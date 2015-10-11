'use strict'

var koa = require('koa');
var serve = require('koa-static');
var app = koa();

app.use(serve(__dirname + '/../../build/'));

var port = process.env.PORT || 5000;
app.listen(port);
