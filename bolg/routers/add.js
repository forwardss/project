const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");
router.post("/add", function(req,res){
	let con = req.body.con;
	let tit = req.body.tit;
	connection.query("select title from bolg where title='"+tit+"'", function(err,data){
		if(data.length>0){
			res.send({code:0,msg:"此项目已存在!"})
		}else{
			connection.query("insert into bolg(title,content) values('"+tit+"','"+con+"')", function(err,data){
				res.send({code:1})
			})
		}
	})
})
module.exports = router;