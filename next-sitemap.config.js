/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://thiagosaraiva.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private/" },
      { userAgent: "*", allow: "/" },
    ],
  },
};

export default config;
