var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
const template = require("./Template.js");

var app = http.createServer(function (request, response) {
  var request_url = request.url;
  var pathname = url.parse(request_url, true).pathname;
  var queryData = url.parse(request_url, true).query;
  var title; //해당 page의 제목
  var list; //파일 목록
  var description; //파일의 내용
  var return_HTML; //출력 화면

  //접속이 성공할 때
  if (pathname === "/") {
    //메인 화면
    if (queryData.id === undefined) {
      fs.readdir("../file", function (error, filelist) {
        title = "게시판";
        description = "자유롭게 작성하는 공간";
        list = template.LIST(filelist);
        return_HTML = template.HTML(title, list, description);
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
