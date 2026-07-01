function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 4000),
    mongoUri: process.env.MONGODB_URI || "",
  };
}

module.exports = { getServerConfig };
