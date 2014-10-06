var fs = require('fs');

var path = process.argv[2];

var buf = fs.readFileSync(path);


var str = buf.toString();

var arraystr = str.split('\n');

console.log(arraystr.length-1)
