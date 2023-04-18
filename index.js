const server = "127.0.0.1";
const port = 8080;
const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`);
