const express = require("express");
const router = express.Router();
const connection = require("../config/mysql");
router.get("/list", function(req,res){
	connection.query("select title,url from bolg order by No", function(err,data){
		if(data.length>0){
			res.send({code:1,data:data})
		}else{
			res.send({code:0})
		}
	})
})
module.exports = router;