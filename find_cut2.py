content = open('frontend/src/lib/blogData.ts', encoding='utf-8').read()

# Find where GTA6 article ends: just before "  {\n    _id: 'article-1'"
article1_start = content.find("  {\n    _id: 'article-1'")
print("article-1 block starts at:", article1_start)

# Find end of the whole INITIAL_BLOG_POSTS array: "];\n\nexport"
array_end = content.find('];\n\nexport const BLOG_CATEGORIES', article1_start)
if array_end == -1:
    array_end = content.find('\n];\n', article1_start)
print("Array closes at:", array_end)
print("Content after array:", repr(content[array_end:array_end+30]))
