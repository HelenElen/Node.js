var evn = require("events");

var emitter = new evn.EventEmitter();

emitter.on("myEvent", () => {
  console.log("Lena's code");
});

emitter.on("helloEvent", () => {
  console.log("Hello, World");
});

emitter.emit("myEvent");
emitter.emit("helloEvent");
