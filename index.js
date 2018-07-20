const path = require('path');
const express = require('express');
const app = express();

// 设置存放模板文件的目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(3000);

module.exports = app;

