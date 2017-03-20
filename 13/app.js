var express = require('express'),
	app = express(),
	path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(8080, function () {
  console.log('Servidor corriendo!')
})