var http = require('http');
// var bl = require('bl');
// var concatStream = require('concat-stream')


http.get(process.argv[2], function(response){
  response.setEncoding('utf-8');
  var myBuf =[];
  response.on('data', function(data){
    myBuf.push(data);
  })
  response.on('end', function(end){
    var output ="";
    myBuf.forEach(function(string){
      output +=string;
    });
    console.log(output.length);
    console.log(output);
  })
})