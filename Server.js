var express = require('express');
var app = express();

app.get('/',function(req,res){
res.send('Hello Express World');
console.log(req);
})



app.listen(3000);
