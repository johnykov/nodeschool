var http = require('http')
var bl = require('bl')
var results = []
var count = 0

var urls = [process.argv[2], process.argv[3], process.argv[4]]

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(urls[index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++){
  httpGet(i)
  // console.log(urls[i])
}
