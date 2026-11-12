const http = require("http");
const stringify = require("querystring");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let scores = [];

app.get("/scores", (req, res) => {
    res.json(scores);
});

app.post("/scores", (req, res) => {
    const { name, score } = req.body;
    if (!name || typeof score !== "number") {
        return res.status(400).json({ error: "Invalid data" });
    }
    scores.push({ name, score, date: new Date().toISOString() });
    req.status(201).json({ ok: true });
});

app.listen(3001, () => {
    console.log("Server at http://localhost/3001");
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from the server" }));
});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});