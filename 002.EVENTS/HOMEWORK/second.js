var evn = require("events");
var FileStream = new evn.EventEmitter();

//
FileStream.read = function () {
  console.log("Файл прочитан");
};

FileStream.write = function () {
  console.log("Файл записан");
};

FileStream.on("read", () => {
  FileStream.read();
});
FileStream.on("write", () => {
  FileStream.write();
});

FileStream.emit("read");
FileStream.emit("write");
