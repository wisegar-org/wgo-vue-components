const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const buildDirectory = path.join(__dirname, "..", "build");
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

const copyVueFiles = (directory, buildDirectory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      const filePath = path.join(directory, file);
      const buildFilePath = path.join(buildDirectory, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        copyVueFiles(filePath, buildFilePath);
      }
      const ext = path.extname(file);
      if (ext === ".vue") {
        fs.copySync(filePath, buildFilePath);
      }
    }
  });
};

cleanDir(directory);
// copyVueFiles(directory, buildDirectory);
