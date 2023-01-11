var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
const template = require("./Template.js");

var app = http.createServer(function (request, response) {
  var request_url = request.url;
  var pathname = url.parse(request_url, true).pathname;

  //메인 화면
  if (pathname === "/") {
    console.log(
      "request_url: " + `${request_url}` + " pathname: " + `${pathname}`
    );
    response.writeHead(200);
    response.end(template);
  } else {
    response.writeHead(200);
    response.end("/Main.html");
  }
});

app.listen(2000);
