var express = require('express');
var app = express();
var fs = require('fs');

// test data
var accounts = JSON.parse(fs.readFileSync('./data/accounts.json', 'utf8'));
var transactions = JSON.parse(fs.readFileSync('./data/transactions.json', 'utf8'));
var categories = JSON.parse(fs.readFileSync('./data/categories.json', 'utf8'));

var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

app.get('/accounts', function (req, res) {
  console.log("getting categories...");
  var data = accounts;
  res.send(data);
});

app.get('/transactions', function (req, res) {
  console.log("getting transactions...");
  var data = transactions;
  res.send(data);
});

app.get('/categories', function (req, res) {
  console.log("getting categories...");
  var data = categories;
  res.send(data);
});