const express = require('express');
const http = require('http');
const fs = require('fs');
const db = require('./db.js');
const matcher = require('./matcher.js');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./support_files'));

var candidates = [];
var employers = [];


app.get('/form/:page', (request, response) => {
	response.set('Content-Type', 'text/html');
	var page = request.params.page;
	if(page === 'employer')
	{
		setHTMLFile(response, 0);
	}
	else if(page === 'candidate')
	{
		setHTMLFile(response, 1);
	}
	else
	{
		return response.status(400).send('Do it properly');
	}
	return response
});

app.get('/candidate', (request, response) => {
	response.send(candidates);
});

app.post('/candidate', (request, response) => {
	console.log(request.body.email);
	db.append(candidates, request.body)
	response.send(request.body);
});

app.get('/employer', (request, response) => {
	response.send(employers);
});

app.post('/employer', (request, response) => {
	console.log(request.body.company_name);
	db.append(employers, request.body)
	response.send(request.body);
});

app.get('/match/candidate/:uuid', (request, response) => {
	var uuid = request.params.uuid;
	let matched_employers = matcher.candidate(candidates, employers, uuid);
	response.send(matched_employers);
})

function setHTMLFile(response, specifier){
	var filename = ''
	var filehandler = __dirname;
	if(specifier === 0)
	{
		filename = 'form_employer';
		filehandler = filehandler + '/EmployerHandler.js';
	}
	else if(specifier === 1)
	{
		filename = 'form_candidate';
		filehandler = filehandler + '/CandidateHandler.js';
	}
	var fileContents = fs.readFileSync('./html/' + filename + '.html', {encoding: "utf8"});
	response.write(fileContents);
	console.log(filename);

	response.sendFile(filehandler);
	console.log(filename);
	response.end();	
}

app.listen(3003, () => {
	console.log('server is live');
});
