import fs from "fs";
import sharp from "sharp";
import TextToSVG from "text-to-svg";

const generateOGP = function () {
  const textToSVG = TextToSVG.loadSync("./static/font/MPLUS1p-Bold.ttf");
  const fileNames = fs.readdirSync("./contents/blogs/json/");
  for (const key in fileNames) {
    const file = JSON.parse(
      fs.readFileSync("./contents/blogs/json/" + fileNames[key], "utf8") ||
        "null"
    );
    const textSvg = textToSVG.getSVG(file.title, {
      x: 0,
      y: 0,
      fontSize: 60,
      anchor: "top",
      attributes: { fill: "white" },
    });
    sharp("./static/img/" + file.thumbnail)
      .composite([
        {
          input: Buffer.from(textSvg),
        },
      ])
      .resize(1200, 630)
      .toFile("./static/ogp/blog-" + file.id + ".png", (error) => {
        // eslint-disable-next-line no-console
        if (error) console.log("OGP Generate Error: " + error);
      });
  }
};

module.exports = function () {
  // eslint-disable-next-line no-console
  this.nuxt.hook("generate:before", () => {
    // eslint-disable-line
    // eslint-disable-next-line no-console
    console.log("OgpGenerator:start");
    generateOGP();
    // eslint-disable-next-line no-console
    console.log("OgpGenerator:finish");
  });
};
