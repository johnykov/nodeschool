var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {
      // socket handling logic
      fs.createReadStream(process.argv[3]).pipe(res);

})
server.listen(process.argv[2])