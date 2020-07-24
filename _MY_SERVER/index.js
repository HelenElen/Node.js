const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead("200", {
  //           "Content-Type": "text/html",
  //         });
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/content") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "content.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead("200", {
  //           "Content-Type": "text/html",
  //         });
  //         res.end(content);
  //       }
  //     );
  //   }

  //оптимизация
  let filePsth = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //проверка на расширение, есть оно или нет
  //метод extname возвращает расширение
  //   console.log(path.extname(filePsth));

  const ext = path.extname(filePsth);
  let contentType = "text/html";

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = " text/javascript";
      break;
    default:
      contentType = "text/html";
  }

  if (!ext) {
    filePsth += ".html";
  }

  //   console.log(filePsth);

  fs.readFile(filePsth, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
