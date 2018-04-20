var express = require('express');
var path = require('path');
var app = express();




app.use(express.static(path.resolve(__dirname, "../public")))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "../client/index.html")));

app.listen(3002, () => console.log('Example app listening on port 3002!'))