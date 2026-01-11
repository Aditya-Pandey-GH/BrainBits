const { exec } = require("child_process");
const fs = require("fs");

module.exports = (code, input) => {
  return new Promise((resolve) => {
    fs.writeFileSync("solution.js", code);

    exec(
      "node solution.js",
      { input, timeout: 2000 },
      (err, stdout) => {
        if (err) return resolve("");
        resolve(stdout.trim());
      }
    );
  });
};
