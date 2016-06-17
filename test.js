var fs = require("fs");
var cheerio = require("cheerio");
var rootPath=process.argv[2];

var config={
    'domain':'http://shop.esgame.com',
    'version':'0.1',
    'localPath':'content'
}

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
        var val=$(this).attr('href');
        //console.log(cssUrl);
        if(cssUrl.length==0)
        {
            cssUrl[0]=val;
        }
        else
        {
            cssUrl.push(val);
        }
    });

    //script url
    $('script').each(function(){
        var val=$(this).attr('src');

        if(val)
        {
            //console.log(jsUrl);
            if(jsUrl.length==0)
            {
                jsUrl[0]=val;
            }
            else
            {
                jsUrl.push(val);
            }
        }

    });

    dataArray= {
        'images': imgUrl,
        'css':cssUrl,
        'script':jsUrl
    };

    fs.writeFileSync('data.json', JSON.stringify(dataArray,null, ' '), 'utf8');

});

function completeUrl(path)
{


}

function getAllFiles(root){
    var res = [] , files = fs.readdirSync(root);
    files.forEach(function(file){
        var pathname = root+'/'+file
            , stat = fs.lstatSync(pathname);

        if (!stat.isDirectory()){
            res.push(pathname.replace(rootPath,'.'));
        } else {
            res = res.concat(getAllFiles(pathname));
        }
    });
    return res
};
