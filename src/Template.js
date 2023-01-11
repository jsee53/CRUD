const { mainModule } = require("process");

var html = function () {
  return `  
<html lang="ko">
<head>
    <meta charset="UTF-8" />
    <title>tiele</title>
</head>
<body>
    게시판
    <div>list</div>
</body>
</html>
`;
};

module.exports = html();
