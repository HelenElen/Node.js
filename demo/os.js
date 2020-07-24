const os = require("os");

console.log("Операционная ситсема: ", os.platform());
console.log("Архитектура процессора: ", os.arch());
console.log("Процессор: ", os.cpus());
console.log("Свободная память: ", os.freemem());
console.log("Всего памяти: ", os.totalmem());
console.log("Домашняя директория: ", os.homedir());
console.log("Сколько времени включена система: ", os.uptime());
