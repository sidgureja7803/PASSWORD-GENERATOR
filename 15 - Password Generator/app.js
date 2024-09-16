const http = require('http');

var server = http.createServer(function(request, response){
    response.send("chal raha hai");
})


server.listen(3000);