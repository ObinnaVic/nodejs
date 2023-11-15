//The http is used to receive and respond to requests from the browser. It is used to create a server that recieves and 
//request and send a response in the form of http.
const http = require("node:http");

const server = http.createServer((req, res) => {

    const Person = { //Json object 
        firstName: "Victor",
        LastName: "Nkire",
        age: 23,
        career: "Frontend developer"
    }

    res.writeHead(200, {"Content-Type" : "application/json"}); //The type becomes "application/json".
    res.end(JSON.stringify(Person)); //You have to stringify the object inorder to send it as a response from the server.
});

server.listen(3000, () => {
    console.log("Server listening at port 3000");
})