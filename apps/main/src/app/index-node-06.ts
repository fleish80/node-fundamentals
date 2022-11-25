const fs = require('fs');
const path = require('path');
const readline = require('readline');

const resolvePath = path.resolve(__dirname, 'files/input.txt');
let textIn = fs.readFileSync(resolvePath, {encoding: 'utf-8'});

let content = `Data read from file:\n${textIn}`;
fs.writeFileSync(resolvePath, content);

fs.readFile(resolvePath, {encoding: 'utf-8'},(err: Error, data: string) => {
  console.log('sync ', data);
});

let asyncContent = `Data read from file asynchronously:\n${textIn}`;
fs.writeFile(resolvePath, asyncContent, () => {
  console.log('file written');
});

