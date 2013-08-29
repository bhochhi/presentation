var express = require('express');
var fs  = require('fs');
var app = express();
app.use("/impress_files", express.static(__dirname + '/impress_files'));
app.use("/bespoke_files", express.static(__dirname + '/bespoke_files'));
app.use(app.router);
app.get('/', function(request, response) {
  response.send((fs.readFileSync("./impress.html")).toString());
  });
  app.get('/bespoke', function(request, response) {
  response.send((fs.readFileSync("./bespoke.html")).toString());
  });

  var port = process.env.PORT || 5000;
  
  app.listen(port, function() {
    console.log("Listening on " + port);
    });

