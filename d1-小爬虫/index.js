var express  = require("express");
var app = express();
app.get('/',function(req,res){
    console.log("in");
});

app.listen(3000,function(req,res){
    console.log("app is running at port")
})