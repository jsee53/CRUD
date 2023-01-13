const { mainModule } = require("process");
var fs = require("fs");

var template = {
  main_HTML: function (title, content) {
    return `  
    <html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>게시판</title>
  </head>
  <body>
    <nav class="title">자유로운 공간</nav>
    <div class="window">
      <div class="board">
        <div class="boardBar">
          <div class="board_title">Boards</div>
          <div class="create">
            <button class="createBtn"><a href="/create">+ Create a new Board</a></button>
          </div>
        </div>
        <div class="content">
          <div>
            <table class="content_table">
              <tbody>
               <tr class="table_title">
               <td>ID</td>
               <td>Title</td>
               <td>Contents</td>
                <td>Create Date</td>
                <td></td>
              </tr>
              ${content}
            </table>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

<style>
  html {
    margin: auto;
  }
  body {
    margin: 0;
    background-color: rgb(242, 240, 240);
  }

  .title {
    background-color: black;
    padding: 20px;
    padding-left: 100px;
    font-size: 25px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: bold;
    color: white;
  }

  .window {
    padding: 30px;
  }

  .board {
    height: 100%;
    background-color: aliceblue;
  }

  .board_title {
    font-size: 30px;
    padding-top: 30px;
    margin-left: 30px;
  }

  .create {
    text-align: center;
    float: right;
    margin-right: 30px;
    margin-top: 30px;
  }

  .createBtn {
    color: white;
    font-size: 15px;
    background-color: cornflowerblue;
    border: none;
    padding: 10px;
  }

  .content {
    margin-top: 100px;
  }

  .content_table {
    border-collapse: collapse;
    margin-left: 40px;
  }

  .table_title{
    font-weight:bold;
  }

  tr {
    border-top: 1px solid #ddd;
  }

  td {
    padding: 20px;
    padding-left: 120px;
  }

  .viewBtn {
    border: none;
    background-color: rgb(61, 184, 191);
    color: white;
    padding: 8px;
  }

  .editBtn {
    border: none;
    background-color: cornflowerblue;
    color: white;
    padding: 8px;
  }

  .delectBtn {
    border: none;
    background-color: red;
    color: white;
    padding: 8px;
  }

  a{
    color:black;
    text-decoration: none;
  }

  button a {
    color: white;
  }
</style>

  `;
  },
  CONTENT: function (filelist, date) {
    var contents = "";
    var first_line;
    for (var i = 0; i < filelist.length; i++) {
      var first_line = fs
        .readFileSync(`../file/${filelist[i]}`)
        .toString()
        .split("\n");

      contents += `<tr>
      <td>${i + 1}</td>
      <td>${filelist[i]}</td>
      <td>${first_line + "..."}</td>
      <td>${date}</td>
      <td>
        <button class="viewBtn"><a href="/?id=${filelist[i]}">View</a></button>
        <button class="editBtn"><a href="/edit?id=${
          filelist[i]
        }">Edit</a></button>
        <form action="delete">
          <input type="hidden" name="title" value="${filelist[i]}" />
          <input type="submit" class="delectBtn" value="Delete" />
        </form>
      </td>
      </tr>`;
    }
    return contents;
  },

  create_HTML: function () {
    return `
    <html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="Main.css" />
    <title>게시판</title>
  </head>
  <body>
    <nav class="title">자유로운 공간</nav>
    <div class="window">
      <div class="board">
        <div class="frame">
          <div class="phase">Create a Board</div>
          <form action="/create_process" method="post">
            <p>ID</p>
            <input
              type="text"
              name="id"
              placeholder="ID"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'ID'"
            />
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Title'"
            />
            <p>Content</p>
            <textarea
              name="content"
              id="content_area"
              cols="30"
              rows="10"
              placeholder="Content"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Content'"
            ></textarea>
            <input type="hidden" name="date" value="date" />
            <br />
            <input type="submit" class="save" value="Save" />
            <button class="cancle">Cancle</button>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>

<style>
  html {
    margin: auto;
  }
  body {
    margin: 0;
    background-color: rgb(242, 240, 240);
  }

  .title {
    background-color: black;
    padding: 20px;
    padding-left: 100px;
    font-size: 25px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: bold;
    color: white;
  }

  .window {
    padding: 30px;
  }

  .board {
    height: 100%;
    background-color: aliceblue;
    text-align: center;
  }

  .frame {
    margin-top: 30px;
    border: 2px solid #ddd;
    box-shadow: 2px 3px 5px 0px;
    display: inline-block;
    padding: 30px 50px;
  }

  .phase {
    font-size: 20px;
    display: inline-block;
    padding: 20px;
    width: 200px;
    border-bottom: 1px solid #ddd;
  }

  input {
    width: 240px;
    height: 30px;
  }

  textarea::placeholder {
    font-weight: 560;
    color: rgb(143, 143, 143);
  }

  .cancle {
    color: white;
    margin-top: 50px;
    background-color: rgb(179, 187, 194);
    display: inline-block;
    height: 30px;
    padding: 5px 10px;
    border: none;
  }

  .save {
    margin-top: 50px;
    color: white;
    width: 80px;
    background-color: rgb(158, 200, 236);
    display: inline-block;
    padding: 5px 10px;
    border: none;
  }

  .cancle:hover {
    cursor: pointer;
  }

  .save {
    cursor: pointer;
  }
</style>
    `;
  },
};
module.exports = template;
