var net = require('net')
var server = net.createServer(function (socket) {
      // socket handling logic
      var now = new Date();
      var month = now.getMonth()+1;
      var mydate = now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes();
      // console.log(mydate);
      socket.end(mydate);
})
server.listen(process.argv[2])