export async function get() {
  const body = render();
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
}

const render = () => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <url>
    <loc>https://anyawander.netlify.app/</loc>
    <lastmod>2021-11-12T15:49:42.605Z</lastmod>
    <changefreq>yearly</changefreq>
    <image:image>
      <image:loc>https://anyawander.netlify.app/0.jpg</image:loc>
      <image:title>Завораживающие пейзажи</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/1.jpg</image:loc>
      <image:title>Волжские просторы</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/2.jpg</image:loc>
      <image:title>Отдых в окружении гор</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/3.jpg</image:loc>
      <image:title>Острова</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/4.jpg</image:loc>
      <image:title>Крутые берега</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/5.jpg</image:loc>
      <image:title>Нагорные сосняки</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/6.jpg</image:loc>
      <image:title>Протоки</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/7.jpg</image:loc>
      <image:title>Песчаная коса</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/8.jpg</image:loc>
      <image:title>Волжские луга</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/9.jpg</image:loc>
      <image:title>Уединится с палаткой</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/10.jpg</image:loc>
      <image:title>Лучшая рыбалка</image:title>
    </image:image>
    <image:image>
      <image:loc>https://anyawander.netlify.app/11.jpg</image:loc>
      <image:title>Автор</image:title>
    </image:image>
  </url>
</urlset>`;
