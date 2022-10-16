export async function get({ host }) {
  var protocol = 'https://';
  if (host.substring(0,9) === 'localhost') 
      protocol = 'http://';

  return {
    headers: {
      'Content-Type': 'text/plain',
    },
    body: `User-agent: *
Allow: /
Sitemap: ${protocol}${host}/sitemap.xml`,
  };
}