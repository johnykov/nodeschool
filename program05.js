// call: node program05.js . (path)

var fs = require('fs');
var path= require('path');

var path1 = process.argv[2];
var ext = process.argv[3];
fs.readdir(path1, function(err, files) {
	for(i=0; i<files.length; i++){
	if(path.extname(files[i]) == '.'+ext){
	console.log(files[i]); 
}
	}    
//console.log(files)
});


// fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })
