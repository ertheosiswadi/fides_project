const express = require('express');
const http = require('http');
const fs = require('fs');
const db = require('./db.js');
const matcher = require('./matcher.js');
const PORT = process.env.PORT || 3003;
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./support_files'));

var candidates = [];
var employers = [];

app.get('', (request, response) => {
	response.set('Content-Type', 'text/html');
	setHTMLFile(response, 2);
	return response;
});

app.get('/matched_candidates', (request, response) => {
	response.set('Content-Type', 'text/html');
	setHTMLFile(response, 3);
	return response;
});

app.get('/employer_details', (request, response) => {
	response.set('Content-Type', 'text/html');
	setHTMLFile(response, 4);
	return response;
});

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
	let uuid = db.append(candidates, request.body)
	response.send(uuid);
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
	else if(specifier === 2)
	{
		filename = 'menu';
		filehandler = filehandler + '/MenuHandler.js';
	}
	else if(specifier === 3)
	{
		filename = 'match_summary';
		filehandler = filehandler + '/MatchSummaryHandler.js';
	}
	else if(specifier === 4)
	{
		filename = 'employer_details';
		filehandler = filehandler + '/EmployerDetailsHandler.js';
	}
	var fileContents = fs.readFileSync('./html/' + filename + '.html', {encoding: "utf8"});
	response.write(fileContents);
	console.log(filename);

	response.sendFile(filehandler);
	console.log(filename);
	response.end();	
}

app.listen(PORT, () => {
	console.log('server is live');
});
