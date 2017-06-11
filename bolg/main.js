let express = require("express");
let app = express();
let ejs = require("ejs");
let bodyPar = require("body-parser");

//设置ejs模板引擎加载路径
app.set("views",__dirname+"/views")
//设置模板解析格式
app.set("view engine","ejs");

//加载静态资源
app.use(express.static(__dirname+"/static"));
//解析body中的urlencoded字符
app.use(bodyPar.urlencoded({extended:false}));

//引入入口文件
require("./config/enter.js")(app);

app.listen(8011);