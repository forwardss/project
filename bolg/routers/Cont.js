const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");
router.post("/Cont", function(req,res){
	let url = req.body.url;
	connection.query("select content from bolg where url='"+url+"'", function(err,data){
		if(data.length>0){
			res.send({msg:1,data:data});
		}else{
			res.send({msg:0});
		}
	})
})
module.exports = router;