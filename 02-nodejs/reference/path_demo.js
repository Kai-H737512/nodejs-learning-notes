const path = require('path');

console.log(__filename)

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
// use this one instead of modifying text cuz different system use \ or /
const path_1 = path.join(__dirname, 'test', 'hello.html')
console.log(path.join(__dirname, 'test', 'hello.html'))
