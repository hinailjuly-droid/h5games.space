content = open('frontend/src/lib/blogData.ts', encoding='utf-8').read()

# The GTA6 article ends just before article-1 starts
# article-1 starts at char 23419
# We need to find the closing of GTA6 (the "},\n  {" that leads into article-1)

cut_at = 23419
# Go back to find the "  {" that opens article-1
# That should be at "  {\n    _id: 'article-1'"
open_brace = content.rfind('  {\n    _id:', 0, cut_at)
print("GTA6 article object ends, next { opens at:", open_brace)
print("Content around cut point:")
print(repr(content[open_brace-5:open_brace+5]))
