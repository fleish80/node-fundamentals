const path = require('path');


module.exports = function(file: string) {
  return path.resolve(__dirname, `../${file}`);
}
