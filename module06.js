var fs = require('fs');
var path = require('path');
module.exports = function(path1, ext, callback) {
    var data = [];
    fs.readdir(path1, function(err, files) {
        if (err) return callback(err)
        for (i = 0; i < files.length; i++) {
            if (path.extname(files[i]) == "."+ext) {
                data.push(files[i]);
            }
        }
        callback(null, data);
    });
}