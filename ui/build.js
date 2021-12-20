const fs = require("fs");
const { exec } = require("child_process");

const content = "";

const updateLibFiles = (callback) => {
  console.log("Updating files...!");
};

const compiling = () => {
  console.log("Compiling files...!");
  exec("node src/index.js", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`${stdout}`);
    console.log("File compiled...! - ", Date.now());
    updateLibFiles();
  });
};
compiling();
