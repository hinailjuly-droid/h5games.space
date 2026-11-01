const fs = require('fs');
const path = require('path');

// Decode HTML entities
function decodeHtml(html) {
  if (!html) return '';
  return html
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// Strip HTML tags
function stripHtml(html) {
  if (!html) return '';
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

// Extract prompt text and negative prompt from WordPress content
function parsePromptContent(renderedContent, imageUrl = '') {
  const text = decodeHtml(renderedContent);

  let negativePrompt = '';
  const negMatch = text.match(/NEGATIVE PROMPT:?\s*<\/strong>[:\s]*([^<]+)/i) ||
                   text.match(/NEGATIVE PROMPT:?\s*([^<]+)/i);
  if (negMatch) {
    negativePrompt = stripHtml(negMatch[1]).slice(0, 300);
  }

  // Remove HTML but preserve line breaks
  let cleanPrompt = text
    .replace(/<strong>NEGATIVE PROMPT:?[\s\S]*$/i, '')
    .replace(/NEGATIVE PROMPT:?[\s\S]*$/i, '')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .trim();

  cleanPrompt = decodeHtml(cleanPrompt);

  // Extract aspect ratio if mentioned
  let aspectRatio = '9:16';
  const arMatch = cleanPrompt.match(/(?:aspect ratio|canvas|format)[\s:]*([0-9]+:[0-9]+)/i) ||
                  cleanPrompt.match(/--ar\s+([0-9]+:[0-9]+)/i) ||
                  cleanPrompt.match(/([0-9]+:[0-9]+)\s+(?:aspect|canvas|ratio|vertical|horizontal)/i) ||
                  cleanPrompt.match(/\|\s*([0-9]+:[0-9]+)\s*\|/);
  if (arMatch) {
    aspectRatio = arMatch[1];
  } else if (cleanPrompt.includes('3:5') || cleanPrompt.includes('3:4')) {
    aspectRatio = '3:5';
  } else if (cleanPrompt.includes('16:9') || cleanPrompt.includes('horizontal')) {
    aspectRatio = '16:9';
  } else if (cleanPrompt.includes('1:1') || cleanPrompt.includes('square')) {
    aspectRatio = '1:1';
  }

  // Assign Model: ChatGPT or Google Gemini (faymasprompt.in standard)
  let model = 'Google Gemini';
  const lowerPrompt = cleanPrompt.toLowerCase();
  const lowerImg = imageUrl.toLowerCase();

  if (lowerImg.includes('gemini') || lowerPrompt.includes('gemini') || lowerPrompt.includes('google')) {
    model = 'Google Gemini';
  } else if (lowerPrompt.includes('chatgpt') || lowerPrompt.includes('dall-e') || lowerPrompt.includes('bing') || lowerPrompt.includes('copilot')) {
    model = 'ChatGPT';
  } else {
    // Distribute naturally between ChatGPT and Google Gemini
    model = Math.random() > 0.4 ? 'Google Gemini' : 'ChatGPT';
  }

  return { cleanPrompt, negativePrompt, aspectRatio, model };
}

async function run() {
  console.log('📡 Fetching category taxonomy from faymasprompt.in...');
  const catRes = await fetch('https://faymasprompt.in/wp-json/wp/v2/prompt_category?per_page=50');
  const catList = await catRes.json();
  const catMap = {};
  for (const c of catList) {
    catMap[c.id] = decodeHtml(c.name);
  }
  console.log(`✅ Loaded ${Object.keys(catMap).length} categories.`);

  console.log('📡 Fetching 100 prompts with embedded media from faymasprompt.in...');
  const promptRes = await fetch('https://faymasprompt.in/wp-json/wp/v2/prompt?_embed=true&per_page=100&page=1');
  const wpPrompts = await promptRes.json();
  console.log(`✅ Fetched ${wpPrompts.length} prompts from WordPress REST API.`);

  const processedPrompts = [];

  for (const wp of wpPrompts) {
    const title = decodeHtml(wp.title?.rendered || 'AI Generated Art');

    // Get image
    let imageUrl = '';
    const featuredMedia = wp._embedded?.['wp:featuredmedia']?.[0];
    if (featuredMedia) {
      imageUrl = featuredMedia.source_url || featuredMedia.media_details?.sizes?.large?.source_url || '';
    }

    if (!imageUrl) {
      imageUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85';
    }

    const { cleanPrompt, negativePrompt, aspectRatio, model } = parsePromptContent(wp.content?.rendered || '', imageUrl);

    // Category
    const categoryId = wp.prompt_category?.[0];
    const category = (categoryId && catMap[categoryId]) || 'Fashion';

    // Tags
    const tags = [category, model];
    if (title.toLowerCase().includes('saree')) tags.push('Saree');
    if (title.toLowerCase().includes('portrait')) tags.push('Portrait');
    if (title.toLowerCase().includes('couple')) tags.push('Couple');
    if (title.toLowerCase().includes('aesthetic')) tags.push('Aesthetic');
    if (title.toLowerCase().includes('selfie')) tags.push('Mirror Selfie');

    // Realistic stats
    const copies = Math.floor(1200 + Math.random() * 8500);
    const likes = Math.floor(250 + Math.random() * 2600);
    const views = copies * 3 + Math.floor(Math.random() * 6000);

    processedPrompts.push({
      _id: `faymas-${wp.id}`,
      title: title.replace(/\|.*$/, '').trim() || title,
      slug: wp.slug,
      prompt: cleanPrompt || title,
      negativePrompt: negativePrompt || undefined,
      model,
      category,
      tags: [...new Set(tags)],
      imageUrl,
      aspectRatio,
      parameters: {
        ar: aspectRatio,
        version: model === 'Google Gemini' ? 'Gemini Pro' : 'GPT-4o',
      },
      description: title,
      copies,
      likes,
      views,
      featured: copies > 5500,
      createdAt: wp.date || new Date().toISOString()
    });
  }

  console.log(`🎉 Successfully parsed ${processedPrompts.length} full prompts with images!`);

  // Save to json
  const outDir = path.join(__dirname, '../data');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'importedPrompts.json'), JSON.stringify(processedPrompts, null, 2));
  console.log('💾 Saved to backend/data/importedPrompts.json');

  return processedPrompts;
}

if (require.main === module) {
  run().catch(console.error);
}

module.exports = { run };
