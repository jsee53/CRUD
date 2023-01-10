var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");

var app = http.createServer(function (request, response) {
  var request_url = request.url;
  var pathname = url.parse(request_url, true).pathname;
  console.log(request_url);
  console.log(pathname);

  if (pathname === "/") {
    response.writeHead(200);
    response.end();
    //메인 화면
    //console.log("main");
  } else {
  }
  response.writeHead(200);
  response.end();
});
