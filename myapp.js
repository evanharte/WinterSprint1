global.DEBUG = true;

const fs = require("fs");

const myArgs = process.argv.slice(2); // remove first two args
// const myArgs = process.argv; // show all args
if (DEBUG) if (myArgs.length >= 1) console.log("myArgs: ", myArgs);

switch (myArgs[0]) {
  case "init":
  case "i":
    if (DEBUG) console.log(myArgs[0], " - initialize the app.");
    break;
  case "--help":
  case "h":
    if (DEBUG) console.log(myArgs[0], " - show help.");
    break;
  case "version":
  case "v":
    if (DEBUG) console.log(myArgs[0], " - show version.");
    break;
  case "token":
  case "t":
    if (DEBUG) console.log(myArgs[0], " - show token.");
    break;
  default:
    fs.readFile(__dirname + "/usage.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data.toString());
    });
}
