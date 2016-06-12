var fs = require("fs");
//var cheerio=require("cheerio");

// 异步读取
fs.readFile('test.html', function (err, data) {
    if (err) {
        return console.error(err);
    }

    var pattern = /\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/,
        str = data.toString();
    var img=str.match(pattern);
    for(var i in img){
        //console.log(img[i]);
    }

    console.log(img[2]);

});
