const mongoose = require('mongoose');
const BlogPost = require('../src/models/BlogPost');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

const newPosts = [
  {
    title: "The Future of Web Gaming: Why HTML5 is Winning",
    slug: "future-of-web-gaming-html5",
    content: "The landscape of digital entertainment is shifting. For decades, native applications and heavy downloads were the only way to experience high-fidelity games. However, a silent revolution has been taking place in the browser. HTML5, combined with WebGL and WebAssembly, is now capable of delivering console-like experiences with zero friction. At h5games space, we are witnessing this 'Instant Play' movement firsthand. Indpendent developers are pushing the boundaries of what is possible within a simple tab, creating immersive worlds that load in seconds. As 5G technology becomes ubiquitous, the gap between cloud gaming and local execution is disappearing, making the browser the ultimate gaming console of 2026 and beyond.",
    excerpt: "Explore how HTML5, WebGL, and WebAssembly are revolutionizing the gaming industry by removing the barriers of downloads and installs.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    category: "Trends",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "Top 5 Open-Source Arcade Games Every Gamer Should Try",
    slug: "top-5-open-source-arcade-games",
    content: "Arcade games have always been about pure, unadulterated fun. The simplicity of their mechanics contrasted with the depth of their challenge is what keeps players coming back. On h5games space, we curate hundreds of these gems, but five stand out as absolute must-plays. 1. 'Asteroids HD' - a modern take on the vector classic. 2. 'Neon Diver' - a fast-paced physics runner. 3. 'Retro Racer' - bringing back the 16-bit aesthetic. 4. 'Pixel Quest' - a platformer with heart. 5. 'Void Destroyer' - a strategic space shooter. All of these games are built by community developers on GitHub, proving that passion and open-source collaboration can rival the biggest studios in the addictive gameplay department.",
    excerpt: "Our definitive list of the best open-source arcade titles available to play instantly in your browser right now.",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    category: "Reviews",
    readTime: "5 min read",
    featured: false
  },
  {
    title: "A Deep Dive into H5 Game Performance: Getting 60 FPS",
    slug: "h5-game-performance-guide",
    content: "Performance is the lifeblood of a good gaming experience. In the web world, achieving a consistent 60 frames per second (FPS) is a badge of honor for developers. This guide explores the technical side of H5 gaming: from canvas optimization and asset lazy-loading to the critical 'requestAnimationFrame' loop. We analyze how top titles on h5games space manage memory overhead to ensure smooth play even on low-end mobile devices. Understanding garbage collection cycles and hardware acceleration is key for any developer looking to publish on premium portals. For players, this technical excellence translates into one thing: zero lag and total immersion.",
    excerpt: "Learn the technical secrets behind high-performance HTML5 games and how developers optimize for universal browser compatibility.",
    coverImage: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200&auto=format&fit=crop",
    category: "Technical",
    readTime: "12 min read",
    featured: false
  },
  {
    title: "The Ethics of Indie Gaming: Supporting GitHub Creators",
    slug: "ethics-indie-gaming-github",
    content: "At h5games space, our foundation is built on respect for the creator. The indie gaming scene on GitHub is a vibrant ecosystem where developers share their code, experiments, and passion projects freely. However, 'free to play' should never mean 'ignored.' We take pride in our 'Open Source First' philosophy, which ensures every game we host points back to its original creator's repository. Supporting these developers means more than just playing their games; it means acknowledging their licenses, contributing to their issues, and sharing their work with the world. This symbiotic relationship between portals and developers is what keeps the web gaming scene alive and flourishing.",
    excerpt: "Behind every game is a developer. Discover how h5games space supports the open-source community and the importance of creator attribution.",
    coverImage: "https://images.unsplash.com/photo-1522071823991-b99c273c15c0?q=80&w=1200&auto=format&fit=crop",
    category: "Community",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "Retrogaming in 2026: The Browser as an Emulation Powerhouse",
    slug: "retrogaming-2026-browser-emulation",
    content: "Nostalgia is a powerful force. The games we played in our childhood continue to influence modern design and mechanics. Thanks to advancements in web technology, the browser has become a flawless emulation powerhouse. Titles that once required specialized hardware can now be played with a single click. We explore the rise of 'Retro-Inspired' H5 games—new titles that use 8-bit and 16-bit aesthetics but leverage modern web APIs for social features and cloud saves. On h5games space, our retro category remains one of our most popular, proving that great game design is truly timeless.",
    excerpt: "Why retro-style gaming is making a massive comeback in the browser and如何 the latest web tech is preserving gaming history.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    category: "Culture",
    readTime: "8 min read",
    featured: false
  }
];

async function seed() {
  try {
    console.log('📡 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected.');

    for (const post of newPosts) {
      const exists = await BlogPost.findOne({ slug: post.slug });
      if (!exists) {
          await BlogPost.create(post);
          console.log(`➕ Added: ${post.title}`);
      } else {
          console.log(`⏭️  Skipped (exists): ${post.title}`);
      }
    }

    console.log('🏁 Seeding finished successfully.');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

seed();
