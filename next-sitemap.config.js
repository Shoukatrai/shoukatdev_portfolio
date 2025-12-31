/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: "https://shoukatraidev.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/404", "/_app", "/_document"], 
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
};
export default sitemapConfig;
