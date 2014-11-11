var map = require('through2-map')
var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req, res) {
    // socket handling logic
    if (req.method == 'POST') {

        req.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    }
    // fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(process.argv[2])
