//渲染首页
const index = require("../routers/index");
//加载列表
const list = require("../routers/list");
//加载内容页
const content = require("../routers/content");
//加载内容
const Cont = require("../routers/Cont");


module.exports = function(app){
	app.get("/",index);
	app.get("/list",list);
	app.get("/content",content);
	app.post("/Cont",Cont);
}