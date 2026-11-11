/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://thiagosaraiva.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/perito", "/perito/*", "/icon.ico"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private/" },
      { userAgent: "*", allow: "/" },
    ],
  },
};

export default config;
