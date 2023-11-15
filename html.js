const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const name = "Victor";
    res.writeHead(200, {"Content-type" : "text/html"});
    // fs.createReadStream(__dirname + "/index.html").pipe(res);
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", name); //dynamically setting a value into the html file being passed.
    res.end(html);

});

server.listen(3000, () => {
    console.log("Listening to port 3000");
})