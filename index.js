//require(): method which is used to import modules both the built-in modules and the local modules
const PizzaShop = require("./pizzaShop");
const EventEmitter = require("node:events");
const fs = require("node:fs");
const math = require("./math");
const buffer = new Buffer.from("Hello Victor");


//BUFFERS:

console.log(buffer); //returns the hexadecimal representation of the data.

console.log(buffer.toJSON()); //returns an object containing the unicode (decimal) representation of the data.

buffer.write("Hello Nkire"); //This is used to edit the data stored in the buffer memory which is limited to the size of the data in the buffer memory.

console.log(buffer.toString()); //returns the data as a string.



//FS (FILE SYSTEM MODULE): Uses buffer internally for execution.


//READING A FILE;
//Synchronous way of reading a file in fs module.
const fileText = fs.readFileSync("./file.txt", "utf-8"); //returns the text written in the file.txt file.

console.log(fileText);

//Asynchronous way of reading a file
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})


//WRITING A FILE;
fs.writeFileSync("./greet.txt", "Hello World"); //this writes to the greet file. If the greet file doesnt exist, it creates a new file called greet.txt and writes to it.

fs.writeFile("./greet.txt", " Hello Victor", {flag: "a"}, (err) => { //The write function overrides already written texts in the greet file but the {flag: "a"} stops if from overriding but instead append or adds the new text to the old.
    if (err) {
        console.log(err);
    } else {
        console.log("File written/updated");
    }
})


//Using the fs module to read a file and pass data streams in chunks of the file to another file;
const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2, //Meaning pass the stream of data in chunks of 2 bits per time.
});

const writeableStream = fs.createWriteStream("./file2.txt"); //crreate a new file and write the data into the new file.

readableStream.on("data", (chunk) => { //Uses the "on" keyword from events class because the fs module inherits the events class.
    console.log(chunk);
    writeableStream.write(chunk);
})


//invoking an instance of the imported class object.
const pizza = new PizzaShop();

//using the "on" keyword because this class instance inherits the events class
pizza.on("order", (size, toppings) => {
    console.log(`Baking a ${toppings} pizza of ${size} size`);
})

pizza.placeOrder();

console.log(pizza.displayNumber());

const {add, mul} = math;

//Events module returns a class which is instantiated here.
const emitter = new EventEmitter();

//A function should run when the event is emitted;
emitter.on("Order-pizza", (size, type) => {
    console.log(`Baking a ${type} pizza of ${size} size`);
})

//Emitting the new event and passing additional information. 
//First param is the event, subsequent params are the added informations passed.
emitter.emit("Order-pizza", "large", "circle");




const addResult = (a, b) => {
    return a + b;
}

const multiply = mul(2, 10);
const multiplyTwo = add(5, 2);


console.log(multiply);
console.log(multiplyTwo);
console.log(addResult(5, 3));

