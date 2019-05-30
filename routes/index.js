var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// HelloWorld
router.get('/hello', function(req,res){
  res.send("Ciao di nuovo, mondo!");  
});

router.post('/hello', function(req,res){
  res.send("Ciao di nuovo, mondo, ma questa volta in POST!");  
});

// Info MagicGate
router.post('/info', function(req,res){
  var msg = "MagicGate v 0.0.1\n";
  msg += "by 'N@no";
  res.send(msg);
});

module.exports = router;
