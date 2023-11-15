//The http is used to receive and respond to requests from the browser. It is used to create a server that recieves and 
//request and send a response in the form of http.
const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Hello world");
});

server.listen(3000, () => {
    console.log("Server listening at port 3000");
})