var fs = require("fs");
var cheerio = require("cheerio");

// 异步读取
fs.readFile('shop.html', function (err, data) {
    if (err) {
        return console.error(err);
    }

    var str=data.toString();

    var $=cheerio.load(str);

    var dataArray=[],imgUrl=[],cssUrl=[],jsUrl=[];

    //images url
    $('img').each(function(){
        var val=$(this).attr('src');
        //console.log(imgUrl);
        if(imgUrl.length==0)
        {
            imgUrl[0]=val;
        }
        else
        {
            imgUrl.push(val);
        }

    });

    //css url
    $('link').each(function(){
        var cssUrl=$(this).attr('href');
        //console.log(cssUrl);
    });

    //script url
    $('script').each(function(){
        var jsUrl=$(this).attr('src');

        if(jsUrl)
        {
            //console.log(jsUrl);
        }

    });

    console.log(imgUrl);

    fs.writeFileSync('data.json', JSON.stringify(imgUrl), 'utf8');
});

