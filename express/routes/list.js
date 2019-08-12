var express = require('express');
var router = express.Router();
var {
  connect,
  find,
  ObjectId
}=require('../public/javascripts/db')
/* GET home page. */
router.get('/news',async function(req, res, next) {
  let data=await find('user')
  res.json(data);
});

module.exports = router;
