var eventproxy= require("eventproxy");
var superagent = require("superagent");
var cheerio = require("cheerio");
//存链接
var url = require("url");
//存第一条评论
var comments = [];

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

    fun(topicUrl);
})

function fun(array){
    var eq = new eventproxy();
    eq.after("ajax",array.length,function (obj) {
        // console.log(obj);
    });
    array.forEach(function(item,index){
        superagent.get(item).end(function (res, req) {
            $ = cheerio.load(req.text);
            var obj = {};
            // obj.title = $('#content > div:nth-child(3) > h1 > a');
            obj.author = $("div.author strong")['0'].children['0'].data;
            obj.comment = $("div.text p")['0'].children['0'].data;
            obj.index = index;
            if(index ==0 )
            console.log(obj.title);
            comments.push(obj);
            eq.emit("ajax",obj);
            // 这里obj就是往line26的after传的数据
        });
    })
}


// var ep = new eventproxy();
// ep.after("ajax",topicUrl.length,function(topics){
//
// })
// topicUrl.forEach(function (item) {
//     superagent.get(item).end(function(err,res){
//         console.log('fetch'+item+"successful");
//         ep.emit("ajax",[topicUrl,res.text])
//     })
// })
