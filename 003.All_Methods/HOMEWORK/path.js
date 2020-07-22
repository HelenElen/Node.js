const { request } = require("http");

var path = require('path');

//Наименование файла
var filename = path.basename(__filename);
console.log('path.basename: ', filename);
//Абсолютный путь по имени файла
console.log('path.resolve: ', path.resolve(filename));
// расширение файла
console.log('path.extname: ', path.extname(filename));
//проверка Является ли путь к фалу абсолютным
console.log(`path.isAbsolute: ${__dirname}: `, path.isAbsolute(__dirname));
//Парсит путь 
var filePath = path.join(__dirname, __filename);
var pasrsFile = path.parse(filePath);
console.log(pasrsFile);