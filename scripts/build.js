const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const directory = path.join(__dirname, "..", "src");

const cleanDir = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      if (fs.lstatSync(path.join(directory, file)).isDirectory()) {
        cleanDir(path.join(directory, file));
      }
      const ext = path.extname(file);
      if (ext === ".js") {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    }
  });
};

cleanDir(directory);
