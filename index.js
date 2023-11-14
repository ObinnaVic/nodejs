const EventEmitter = require("node:events");
const mulFn = require("./math");


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

const multiply = mulFn(2, 10);
const multiplyTwo = mulFn(5, 2);


console.log(multiply);
console.log(multiplyTwo);
console.log(addResult(5, 3));

