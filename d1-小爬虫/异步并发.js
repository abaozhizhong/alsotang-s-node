var eventproxy= require("eventproxy");
var superagent = require("superagent");
var cheerio = require("cheerio");
var url = require("url");
var webUrl = "http://jiandan.net";
superagent.get(webUrl).end(function(err,res){
    if(err){
        return console.log(err);
    }
    var topicUrl = [];
    var $ = cheerio.load(res.text);
    $(".post .indexs h2 a").each(function(index,element){
        var $element = $(element);
        topicUrl.push($(element).attr("href")) ;
    })


})


var ep = new eventproxy();
ep.after("ajax",topicUrl.length,function(topics){

})
topicUrl.forEach(function (item) {
    superagent.get(item).end(function(err,res){
        console.log('fetch'+item+"successful");
        ep.emit("ajax",[topicUrl,res.text])
    })
})
