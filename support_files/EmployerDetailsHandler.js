$(document).ready(()=>{
	console.log('im at employer details handler')
	console.log(JSON.parse(sessionStorage.getItem('selected_employer')));
	let employer = JSON.parse(sessionStorage.getItem('selected_employer'))['form'];

	let company_name = capitalizeFirstLetter(employer['company_name'])
	let education = employer['education'].toUpperCase()
	let major = capitalizeFirstLetter(employer['major'])
	let region = getRegion(employer['region'])
	let sector = capitalizeFirstLetter(employer['sector'])
	let salary = 'Rp.' + employer['salary'];

	$('#company_name').html(company_name)
	$('#education').html('<b>Qualification: </b>'+education)
	$('#gpa').html('<b>GPA Requirement: </b>'+employer['gpa'])
	$('#major').html('<b>Major Background: </b>'+major)
	$('#postcode').html('<b>Poscode: </b>'+employer['postcode'])
	$('#region').html('<b>Region: </b>'+region)
	$('#sector').html('<b>Industry Sector: </b>'+sector)
	$('#salary').html('<b>Salary Offer: </b>'+salary)
	
});

function capitalizeFirstLetter(string)
{
	return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRegion(region)
{
	var dic = {
		jakut: 'Utara',
		jakpus: 'Pusat',
		jabar: 'Barat',
		jatim: 'Timur',
		jaksel: 'Selatan'
	}
	return 'Jakarta ' + dic[region];
}