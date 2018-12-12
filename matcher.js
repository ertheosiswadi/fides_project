var _ = require('lodash');

module.exports = {
	candidate: candidate
}

function candidate(candidates, employers, uuid){

	var candidate = null;
	candidate = getCandidate(candidates, uuid)
	if(candidate == null)
	{
		return 'Invalid UUID';
	}

	var candidate_properties = getCandidateProperties(candidate)
	var employer_properties = null;

	var toReturn = [];

	for(i = 0; i < employers.length; i++)
	{
		employer_properties = getEmployerProperties(employers[i]);
		if(_.isEqual(candidate_properties, employer_properties))
		{
			console.log('found a match');
			toReturn.push(employers[i])
		}
	}

	//debug
	if(toReturn.length == 0)
	{
		console.log('no match found')
	}

	return toReturn;
}

function getCandidate(candidates, uuid)
{
	console.log('candidates length ' + candidates.length);
	for(i = 0; i < candidates.length; i++)
	{	
		
		console.log('candidate ' + i + ' ' + candidates[i]['user_id']);
		if(candidates[i]['user_id'] == uuid)
		{
			return candidates[i];
		}
	}
}

function getCandidateProperties(c)
{
	var cform = c['form'];
	var toReturn = {
		region: cform['region'],
		education:cform['education'],
		major:cform['major'],
		gpa:cform['gpa'],
		salary:cform['salary'],
		insurance:cform['insurance'],
		parking:cform['parking'],
		phone:cform['mobile_phone'],
		laptop:cform['laptop'],
		sector:cform['sector']
	};
	return toReturn;
}

function getEmployerProperties(e)
{
	var eform = e['form'];
	var toReturn = {
		region: eform['region'],
		education:eform['education'],
		major:eform['major'],
		gpa:eform['gpa'],
		salary:eform['salary'],
		insurance:eform['insurance'],
		parking:eform['parking'],
		phone:eform['mobile_phone'],
		laptop:eform['laptop'],
		sector:eform['sector']
	};
	return toReturn;
}
