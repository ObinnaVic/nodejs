const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    placeOrder() {
        this.orderNumber++;
        
        //having access to the emit method of the built-in events
        //class because this class inherits the built-in events class. 
        this.emit("order", "small", "icing");
    }

    displayNumber() {
        return this.orderNumber;
    }
}

module.exports = PizzaShop;