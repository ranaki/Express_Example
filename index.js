var express = require('express');
var app = express(); //runs the express function 

app.get('/', function(request, response) {
    response.sendFile(__dirname + 'index/html');
})
app.listen(8000);
