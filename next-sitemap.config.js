const config = {
  siteUrl: "https://thiagosaraiva.com", // Atualize para sua URL real
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private/" },
      { userAgent: "*", allow: "/" },
    ],
  },
};

module.exports = config;
