import re
content = open('frontend/src/lib/blogData.ts', encoding='utf-8').read()
ids = re.findall(r"_id: '([^']+)'", content)
titles = re.findall(r"title: '([^']+)'", content)
for i, t in zip(ids, titles):
    print(i, '|', t[:70])
