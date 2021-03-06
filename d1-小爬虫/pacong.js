var express = require('express');
var superagagent = require("superagent");
var cheerio = require("cheerio");


var  app = express();
app.get("/",function(req,res,next){
    superagagent.get('https://cnodejs.org/')
        .end(function(err,sres){
            console.log('in');
            if(err){
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $("#topic_list .cell .topic_title").each(function(index,element){
                var $element = $(element);
                items.push({
                    title:$element.attr("title"),
                    // href:$element.attr("href")
                })
            });
            res.send(items);
        })
})

app.listen(3000,function(req,res){
    console.log("running in port 3000:")
})