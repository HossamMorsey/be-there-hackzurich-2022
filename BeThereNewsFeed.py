from requests_html import HTMLSession
session = HTMLSession()

url ='https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en'

r = session.get(url)

r.html.render(sleep=1, scrolldown=5)

articles = r.html.find('article')

for item in articles:
    newsitem = item.find('h3', first=True)
    title = newsitem.text
    link = newsitem.absolute_link
    

print(title, link)
