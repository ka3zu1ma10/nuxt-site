"use strict"

let fs = require("fs")

const MASTERFILESPATH = "../../../../../Volumes/ELECOM500/サイト/build/JPEG/"

fs.readdir(MASTERFILESPATH, function (err, files) {
  if (err) throw err

  files.forEach((file) => {
    fs.copyFile(MASTERFILESPATH + file, "static/img/photos/" + file, (err) => {
      if (err) throw err
    })
  })
})
