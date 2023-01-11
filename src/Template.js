const { mainModule } = require("process");

var template = {
  HTML: function (title, list, description) {
    return `  
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="Main.css" />
      <title>${title}</title>
    </head>
    <body>
      <div
        class="title"
        style="
          text-align: center;
          margin-top: 50px;
          font-size: 40px;
          font-weight: bold;
          color: aquamarine;
        "
      >
        게시판
      </div>
      <div
        class="contentBox"
        style="text-align: center; margin-top: 100px; display: inline-block"
      >
        <div class="content"></div>
        <div>
          <button
            class="createBtn"
            style="background-color: white; border: 1px solid #ddd"
          >
            글 쓰기
          </button>
        </div>
        <div class="list">${list}</div>
      </div>
    </body>
  </html>
  `;
  },
  LIST: function (filelist) {
    var list = "<ul>";
    for (var i = 0; i < filelist.length; i++) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    }
    list += "</ul>";
    return list;
  },
};
module.exports = template;
