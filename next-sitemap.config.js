const config = {
  siteUrl: "https://yourwebsite.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private/" },
      { userAgent: "*", allow: "/" },
    ],
  },
};

module.exports = config;
