var express = require('express');
var superagagent = require("superagent");
var cheerio = require("cheerio");

// $("post indexs a").html();
// $("post indexs a").href;

var  app = express();
app.get("/",function(req,res,next){
    superagagent.get('http://jandan.net/')
        .end(function(err,sres){
            if(err){
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".post .indexs h2 a").each(function(index,element){
                var $element = $(element);
                items.push({
                    title:$element.attr("href"),
                    html:$element.html()
                })
            });
            res.send(items);
        })
})

app.listen(3000,function(req,res){
    console.log("running in port 3000:")
})
