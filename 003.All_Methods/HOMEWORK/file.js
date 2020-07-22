var fs = require("fs");

console.log("Going to open file");

fs.open("example.txt", "a+", function (err, fd) {
  console.log("Opening file!");
  if (err) {
    console.log(err);
  } else {
    fs.write(fd, "This is the file connect!", { encoding: "utf-8" }, function (
      err,
      written,
      string
    ) {
      console.log("wRITTEN TO FILE!");
      if (err) throw err;
      console.log("Колличество записанных бит в память: ", written);
      console.log("Записанный текст: ", string);
    });

    var arr = new Uint16Array(1024);
    var buf = Buffer.from(arr.buffer);
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      console.log("reading from file!");

      if (err) throw err;

      console.log(bytes);
      console.log(buf.slice(0, bytes).toString());
    });

    fs.close(fd, function (err) {
      if (err) throw err;
      console.log("File close");
    });
  }
});
