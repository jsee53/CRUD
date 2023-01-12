var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
const template = require("./Template.js");

var app = http.createServer(function (request, response) {
  var request_url = request.url;
  var pathname = url.parse(request_url, true).pathname;
  var queryData = url.parse(request_url, true).query;
  var title; //파일의 제목
  var content; //파일의 내용
  var date; //파일 생성 날짜
  var return_HTML; //출력 화면

  //접속이 성공할 때
  if (pathname === "/") {
    //메인 화면
    if (queryData.id === undefined) {
      fs.readdir("../file", function (error, filelist) {
        date = "2023-01-12";
        content = template.CONTENT(filelist, date);
        return_HTML = template.HTML(title, content);
        response.writeHead(200);
        response.end(return_HTML);
      });
    } else {
      response.writeHead(200);
      response.end("??");
    }
  }
  //접속이 실패할 때
  else {
    response.writeHead(404);
    response.end("Not found!");
  }
});

app.listen(2000);
