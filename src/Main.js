var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
const template = require("./Template.js");
const path = require("path");

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
        date = new Date();
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        content = template.CONTENT(filelist, date);
        return_HTML = template.main_HTML(title, content);
        response.writeHead(200);
        response.end(return_HTML);
      });
    } else {
      response.writeHead(200);
      response.end("??");
    }
  } else if (pathname === "/create") {
    fs.readdir("../file", function (error, filelist) {
      date = new Date();
      date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      content = template.CONTENT(filelist, date);
      return_HTML = template.create_HTML();
      response.writeHead(200);
      response.end(return_HTML);
    });
  } else if (pathname === "/create_process") {
    var receive_data = "";
    request.on("data", function (data) {
      receive_data += data;
    });
    request.on("end", function () {
      var post = qs.parse(receive_data);
      title = post.title;
      content = post.content;
      date = post.date;
      fs.writeFile(`../file/${title}`, content, "utf-8", function (err) {
        response.writeHead(302, { Location: "/" });
        response.end();
      });
    });
  } else if (pathname === "/edit") {
    response.writeHead(200);
    response.end("edit");
  } else if (pathname === "/delete") {
    response.writeHead(200);
    response.end("??");
  } else if (pathname === `${title}`) {
    response.writeHead(200);
    response.end("?ddd?");
  }
  //접속이 실패할 때
  else {
    response.writeHead(404);
    response.end("Not found!");
  }
});

app.listen(2000);
