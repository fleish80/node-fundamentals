const fs = require('fs');

//EVENT LOOP IN PRACTICE
console.log('Program has started');

//STORED IN - 3RD PHASE
setImmediate(() => {console.log('SetImmediate callback executed')});

//STORED IN - 1ST PHASE
setTimeout(() => {
  console.log('Timer callback executed - time is 0')
}, 0);

//STORED IN - 1ST PHASE
setTimeout(() => {
  console.log('Timer callback executed - time is not 0')
}, 10);

//STORED - 2ND PHASE
fs.readFile('./files/input.txt', () => {
  console.log('File read completed');

  //STORED IN - 1ST PHASE
  setTimeout(() => {
    console.log('Timer callback executed - time is 0 - after file read')
  }, 0);

  setImmediate(() => {console.log('SetImmediate callback executed - after file read')});

  process.nextTick(() => console.log('Process.nextTick callback executed'));

});

console.log('Program has completed');

