const EventEmitter = require("events");

class CustomEmitter extends EventEmitter {}

const emitter = new CustomEmitter();


emitter.on("hodisa1", () => console.log("Hodisa #1"));

emitter.emit("hodisa1"); //Hodisa #1