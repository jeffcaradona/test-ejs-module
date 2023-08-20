const express = require('express');
const router = express.Router();

const test_module = require('@jeffcaradona/ejs-in-node-package');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.info(req.test_module);

  test_module.renderList().then((html) => {
    res.render('index', { title: 'Express',ul:html });

  });
  
});

module.exports = router;
