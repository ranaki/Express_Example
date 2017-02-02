var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express(); //runs the express function 

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.get('/products', function(request, response) {
    fs.readFile('products.json', 'utf8', function(err, data) {
        var products = JSON.parse(data);
        response.locals = {products: products};
        response.render('products.ejs');
    })
});

app.get('/products/:id', function(request, response) {
    fs.readFile('products.json', 'utf8', function(err, data) {
        var productsParsed = JSON.parse(data);
        var product = productsParsed.filter( function(p) {
            return p.id === parseInt(request.params.id);
        })[0];

        response.locals = {product: product};
        response.render('product.ejs');
    });
});

app.listen(8000);
console.log('Server listening on http://localhost:8000');
