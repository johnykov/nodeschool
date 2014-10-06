var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function(err, data) {
    var str = data.toString();
    var arraystr = str.split('\n');
    console.log(arraystr.length - 1)
});