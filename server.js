var express = require("express");
var app = express();
var PORT = 3000;


app.set('template engine','pug');

app.get('/',function(req,res)
{
	res.send("Hello World");

});

app.get('/index',function(req,res)
{
	res.render('template/index',{title:"api",message:"This is my first API"});

});


var server = app.listen(PORT, function(err)
{
	if(err) console.log("error in loading server")
	console.log("listening to PORT",PORT);
});