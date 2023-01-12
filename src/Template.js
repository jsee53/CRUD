const { mainModule } = require("process");

var template = {
  HTML: function (title, content) {
    return `  
    <html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="Main.css" />
    <title>${title}</title>
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
               <tr>
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
    padding-top: 20px;
    margin-left: 20px;
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
    var contents = `<tr><td>asdf</td></tr>`;
    for (var i = 0; i < filelist.length; i++) {
      var first_line = fs
        .readFileSync(`"${filelist[i]}.txt"`)
        .toString()
        .split("\n");
      // contents += `<tr>
      // <td>${i}</td>
      // <td>${title}</td>
      // <td>${first_line}</td>
      // <td>${date}</td>
      // </tr>`;
    }
    return contents;
  },
};
module.exports = template;
