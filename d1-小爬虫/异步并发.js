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

    // var eq = new eventproxy();
    fun(topicUrl);
})

function fun(array){
    var eq = new eventproxy();
    eq.after("ajax",array.length,function () {
        console.log("done");
    });
    for(var i in array){
        superagent.get(array[i]).end(function (err, res) {
            console.log("fetch"+array[i]+"successful");
            if(err){
                throw  err
            }
            var $ = cheerio.load(res.text);

                var obj = {};
                obj.author = $(".row .author strong").html();
                obj.text = $(".row .text p").html();
                comments.push(obj);
            eq.emit("ajax",res)
        });
    }
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
