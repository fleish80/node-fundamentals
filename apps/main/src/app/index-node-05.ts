const fs = require('fs');
const path = require("path");

const resolvePath = path.resolve(__dirname, 'files/input.txt');
let textIn = fs.readFileSync(resolvePath, {encoding: 'utf-8', withFileTypes: true});
console.log(textIn);
