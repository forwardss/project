const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");
router.post("/Cont", function(req,res){
	let url = req.body.url;
	connection.query("select content,num from bolg where No='"+url+"'", function(err,data){
		if(data.length>0){
			let num = data[0].num+1;
			connection.query("update bolg set num='"+num+"' where No='"+url+"'", function(err,data){
			})
			res.send({msg:1,data:data});
		}else{
			res.send({msg:0});
		}
	})
})
module.exports = router;