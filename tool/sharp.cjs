const sharp = require("sharp");
const fs = require("fs");
const directory = "./public/assets/images/projets";

fs.readdirSync(directory).forEach((file) => {
	sharp(`${directory}/${file}`)
		.resize(600, 450, { fit: "inside" }) // width, height
		.toFile(`${directory}/${file.replace(/\.[^/.]+$/, "")}-small.webp`);
});
