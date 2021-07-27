const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy(error => {
    res.redirect('/list');
  });
});

module.exports = router;
