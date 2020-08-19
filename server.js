var express = require("express");
var app = express();
var PORT = 3000;


app.set('view engine','pug');

app.get('/',function(req,res)
{
        res.send("Hello World");

});

app.get('/index',function(req,res)
{
        res.render('index',{title:"api",message:"This is my first API"});

});


var server = app.listen(PORT, function(err)
{
        if(err) console.log("error in loading server")
        console.log("listening to PORT",PORT);
});




// var express = require("express");
// var app = express();
// var PORT = 3000;


// app.set('view engine','pug');

// app.get('/',function(req,res)
// {
//         res.send("Hello World");

// });

// app.get('/index',function(req,res)
// {
//         res.render('index',{title:"api",message:"This is my first API"});

// });


// var server = app.listen(PORT, function(err)
// {
//         if(err) console.log("error in loading server")
//         console.log("listening to PORT",PORT);
// });
// Amalaa
// var express = require("express"); var app = express(); var PORT = 3000; app.set('view engine','pug'); app.get('/',function(re
// ith server.js il copy paste cheyy
