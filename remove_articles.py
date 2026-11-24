content = open('frontend/src/lib/blogData.ts', encoding='utf-8').read()

# Remove all articles after GTA6 (article-1 through the end of the array)
# article-1 block starts at 23411 (the "  {" that opens it)
# Array closes at 65533 ("\n];\n")

article1_start = 23411
array_close = 65533  # position of "\n];\n"

# Replace everything from article-1 to the closing "];" with just the closing
new_content = content[:article1_start] + content[array_close:]
print("Original length:", len(content))
print("New length:", len(new_content))
print("--- Last 200 chars before ]; ---")
print(repr(new_content[new_content.find('\n];\n')-100:new_content.find('\n];\n')+10]))

open('frontend/src/lib/blogData.ts', 'w', encoding='utf-8').write(new_content)
print("Done.")
