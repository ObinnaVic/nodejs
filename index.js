//require(): method which is used to import modules both the built-in modules and the local modules
const PizzaShop = require("./pizzaShop");
const EventEmitter = require("node:events");
const math = require("./math");
const buffer = new Buffer.from("Hello Victor");

console.log(buffer); //returns the hexadecimal representation of the data.

console.log(buffer.toJSON()); //returns an object containing the unicode (decimal) representation of the data.

buffer.write("Hello Nkire"); //This is used to edit the data stored in the buffer memory which is limited to the size of the data in the buffer memory.

console.log(buffer.toString()); //returns the data as a string.



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

