global.DEBUG = true;

const fs = require("fs");

const myArgs = process.argv.slice(2); // remove first two args
// const myArgs = process.argv; // show all args
if (DEBUG) if (myArgs.length >= 1) console.log("myArgs: ", myArgs);
