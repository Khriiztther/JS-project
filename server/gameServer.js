const http = require("https");
const { stringify } = require("querystring");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from the server" }));
});

server.listen(3000, () => {
    console.log("Server running at https://localhost:3000");
});