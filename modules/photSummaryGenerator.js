"use strict"

let fs = require("fs")

fs.readdir("static/img//photos", function (err, files) {
  if (err) throw err
  let fileList = []

  files.forEach((file) => {
    let check = file.split(".")
    if (check.length < 1) {
      return
    }
    if (file.split(".")[1] === "jpg") {
      const filePath = "/img/photos/" + file
      fileList.push({ src: filePath })
    }
  })

  fs.writeFile(
    "contents/photos/photo.json",
    JSON.stringify(fileList, null, "    "),
    (err) => {
      if (err) {
        console.log("エラーが発生しました。" + err)
        throw err
      }
    }
  )
})
