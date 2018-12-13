$(document).ready(()=>{
	console.log('im at employer details handler')
	console.log(JSON.parse(sessionStorage.getItem('selected_employer')));
	let employer = JSON.parse(sessionStorage.getItem('selected_employer'))['form'];
	$('#company_name').html(employer['company_name'])
	$('#education').html('<b>Qualification: </b>'+employer['education'])
	$('#gpa').html('<b>GPA Requirement: </b>'+employer['gpa'])
	$('#major').html('<b>Major Background: </b>'+employer['major'])
	$('#postcode').html('<b>Poscode: </b>'+employer['postcode'])
	$('#region').html('<b>Region: </b>'+employer['region'])
	$('#sector').html('<b>Industry Sector: </b>'+employer['sector'])
	$('#salary').html('<b>Salary Offer: </b>'+employer['salary'])
	


});