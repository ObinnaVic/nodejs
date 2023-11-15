const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => { //This is done to route between pages on the web application.
    if (req.url === "/") {

        res.writeHead(200, {"Coontent-Type" : "text/plain"});
        res.end("Home page");

    } else if(req.url === "/about") {

        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("About Page");

    } else if(req.url === "/api") {

        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end(JSON.stringify({
            firstName: "Victor",
            lastName: "Nkire"
        }))

    } else {

        res.writeHead(404);
        res.end("Page not found");
        
    }
})

server.listen(3000, () => {
    console.log("Server listening to port 3000");
})