// steps to setup this server:
// 1. create "root" folder for the entire project...
// 2. create server.js file in root of directory...  i.e. the "entry point" for the server
// 3. create "public" folder to contain the website files... i.e. what the client has access to
  // 3a. create html, css, js, images folders inside public to hold those files...
// 4. git init...  create repository (creates .git folder)
// 5. create .gitignore file  (ignore node_modules & .DS_Store, whatever else desired...)
// 6. npm init... create node project (answer prompts as needed to create package.json file)
  // 6a. npm install express
  // 6b. npm install body-parser
  // 6c. npm install request
  // 6d. npm install multer
// 7. start nodemon to run server...  listening on port defined at bottom of server.js file (e.g. 8080)

// we need these in the npm_modules foler
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var fs = require('fs')
var multer = require('multer')

//start express server
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware static file server from public folder

app.use(express.static('./public'))
//this checks the files in the public file before moving on to the other get requests
//this replaces the folowing three get requests.
//
//
app.get('/denver', function(req,res){
	res.sendFile('./index.html', {root: './public'})
})

app.get('/limon_colorado', function(req,res){
	res.sendFile('./index2.html', {root: './public'})
})

app.get('/colby_kansas', function(req,res){
	res.sendFile('./index3.html', {root: './public'})
})

app.get('/hays_kansas', function(req,res){
	res.sendFile('./index4.html', {root: './public'})
})

app.get('/topeka_kansas', function(req,res){
	res.sendFile('./index5.html', {root: './public'})
})
//Cargo Validator
app.get('/cargo-validator', function(req,res){
	res.sendFile('./cargocalc.html', {root:'./public'})
})

app.post('/validate-cargo', function(req,res,next){
	console.log('Validating cargo')
	console.log(req.body)
	if (req.body.cost <= 0 && req.body.weight <= 0) {
		res.send({message: 'Cargo: invalid'})
	}
	else if (req.body.cargo > 200 || req.body.weight > 200) {
		res.send({message: 'Cargo: invalid'})
	}
	else if (req.body.cost > 0 && req.body.cost <= 200 || req.body.weight > 0 && req.body.weight <=200) {
		res.send({message: 'Cargo: valid'})
	}
})

// // app.get('/main.css', function(req,res){
// 	res.sendFile('./main.css', {root: './public'})
// })

// app.get('/main.js', function(req,res){
// 	res.sendFile('./main.js', {root: './public'})
// })

app.listen(8000)