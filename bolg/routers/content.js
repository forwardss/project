const express = require("express");
const router = express.Router();
router.get("/content", function(req,res){
	res.render("content")
})
module.exports = router;