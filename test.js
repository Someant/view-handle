var fs = require("fs");
var cheerio=require("cheerio");

// 异步读取
fs.readFile('test.html', function (err, data) {
    if (err) {
        return console.error(err);
    }

    var $=cheerio.load(str);
    $('img').each(function(){
        var imgurl=$(this).attr('src');
        console.log(imgurl);
    });


});
