var fs = require("fs");
var cheerio=require("cheerio");

// 异步读取
fs.readFile('shop.html', function (err, data) {
    if (err) {
        return console.error(err);
    }

    var str=data.toString();

    var $=cheerio.load(str);

    //images url
    $('img').each(function(){
        var imgUrl=$(this).attr('src');
        console.log(imgUrl);
    });

    //css url
    $('link').each(function(){
        var cssUrl=$(this).attr('href');
        console.log(cssUrl);
    });

    //script url
    $('script').each(function(){
        var jsUrl=$(this).attr('src');

        if(jsUrl)
        {
            console.log(jsUrl);
        }

    });

});
