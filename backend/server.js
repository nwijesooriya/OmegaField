require("dotenv").config();

const http = require("node:http");
const { createApp } = require("./src/app");
const { getServerConfig } = require("./src/config/env");

const config = getServerConfig();
const app = createApp();
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Backend listening on http://localhost:${config.port}`);
});

function shutdown(signal) {
  server.close(() => {
    console.log(`Received ${signal}. Backend stopped cleanly.`);
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
