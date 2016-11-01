var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('*', function (req, res) {
  res.render('default');
});

app.listen(process.env.PORT || 3000);
