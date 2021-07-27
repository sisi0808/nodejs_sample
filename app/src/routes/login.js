const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('./db');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('login.ejs');
});

router.post('/', (req, res) => {
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        // 定数plainを定義してください
        const plain = req.body.password;
        const hash = results[0].password;

        bcrypt.compare(plain, hash, (error, isEqual) => {
          // ここから削除
          if (isEqual) {
            req.session.userId = results[0].id;
            req.session.username = results[0].username;
            res.redirect('/list');
          } else {
            res.redirect('/login');
          }
        });

      } else {
        res.redirect('/login');
      }
    }
  );
});

module.exports = router;
