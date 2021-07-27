const express = require('express');
const connection = require('./db');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      res.render('list.ejs', { articles: results });
    }
  );
});
  
module.exports = router;
