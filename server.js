var express = require('express')
var path = require('path')
var app = express();

//var bodyParser = require('body-parser'); // Required if we need to use HTTP post parameters
//var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js
var app = express();
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
//app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
//app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

app.use(function (req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
	res.header("Access-Control-Allow-Methods","*")
	res.header("Access-Control-Allow-Credentials",true)

	next()
});

app.use(express.static('public/comp20-s2018-team8'));
app.get('/', function(req, res) {
   res.sendFile('index.html');
});

app.listen(process.env.PORT || 8000)