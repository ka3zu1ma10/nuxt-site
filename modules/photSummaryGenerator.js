"use strict";

let fs = require("fs");

fs.readdir("contents/photos/img/", function (err, files) {
  if (err) throw err;
  let fileList = [];

  files.forEach((file) => {
    let check = file.split(".");
    if (check.length < 1) {
      return;
    }
    if (file.split(".")[1] === "jpg") {
      fileList.push(file);
    }
  });

  fs.writeFile(
    "contents/photos/photo.json",
    JSON.stringify(fileList, null, "    "),
    (err) => {
      if (err) {
        console.log("エラーが発生しました。" + err);
        throw err;
      }
    }
  );
});
