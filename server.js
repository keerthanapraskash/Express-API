var express = require("express");
var app = express();
var PORT = 3000;

app.get('/',function(req,res)
{
	res.send("hello world");

});
var server = app.listen(PORT, function(err)
{
	if(err) console.log("error in loading server")
	console.log("listening to PORT",PORT);
});