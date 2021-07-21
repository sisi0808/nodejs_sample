const express = require('express');
const mysql = require("mysql");

const app = express();
// /.envに記述した情報を接続に使用
const connection = mysql.createConnection({
  host: process.env.MYSQL_SERVER,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.get('/', (req, res) => {
    res.render('index.ejs', { message: "!??" });
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));
