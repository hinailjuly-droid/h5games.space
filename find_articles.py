content = open('frontend/src/lib/blogData.ts', encoding='utf-8').read()

# Find where GTA6 article ends and others begin
gta6_end = content.find("_id: 'article-1'")
print("article-1 starts at char:", gta6_end)
print("Total chars:", len(content))
# Show the surrounding area
print("---")
print(content[gta6_end-50:gta6_end+100])
