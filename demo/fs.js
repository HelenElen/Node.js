//File System
const fs = require("fs");
const path = require("path");

//Создание директории
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Папка создана");
// });

//Создать новые файлы. Перетирает существующие данные
const filePath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filePath, "Hello NodeJS", (err) => {
//   if (err) throw err;
//   console.log("Файл создан");

//   //добавить данные в конец файла
//   fs.appendFile(filePath, "\nHello Again", (err) => {
//     if (err) throw err;
//     console.log("Файл создан");
//   });
// });

// чтение файлов
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) throw err;
  console.log(content);
  //   1 вариант
  //   const data = Buffer.from(content);
  //   console.log("Content: ", data.toString());

  //   2 вариант прописать кодировку 2 параметром 'utf-8'
});
