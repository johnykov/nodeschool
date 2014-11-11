var mymodule = require('./module06.js')
// mymodule(dirname, extention, callback);

var dirpath = process.argv[2];
var ext = process.argv[3];

mymodule(dirpath, ext, function(err, data) {
    data.forEach(function(file) {
        console.log(file);
    })
});