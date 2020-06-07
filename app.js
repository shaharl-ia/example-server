var express = require('express');
var app = express();

app.get('/', function (request, response) {
   var liron = 'liron ya manyak'
   response.send(liron)
})

app.get('/hara', function (request, response) {
    var liron = 'liron ya hara'
    response.send(liron)
 })

var server = app.listen(3000, function () {
   console.log("Example app listening at http://%s:%s")
})

git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:shaharl-ia/example-server.git
git push -u origin master