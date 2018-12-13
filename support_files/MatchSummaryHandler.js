$(document).ready(function() {
	let uuid = sessionStorage.getItem('selected_uuid');
	var matchedEmployers = [];
	$.get('/match/candidate/' + uuid, (data,status)=>{
		matchedEmployers = data;
		console.log(matchedEmployers[0]['form']);
		console.log(matchedEmployers[0]['form']['company_name']);

	   	if(matchedEmployers.length == 0 || matchedEmployers === 'Invalid UUID')
	   	{
	   		alert('no match');
	   	}
	   	else{
			var markup = '<a href="#" class="list-group-item active">Employers</a>';
			for (i = 0; i < matchedEmployers.length; i++) {
				console.log(matchedEmployers[i]['form']['company_name']);
				markup = markup + getFileMarkup(matchedEmployers[i]['form']['company_name']);
			}
			$('#summary_table').html(markup);
	   	}
	});
	
});
function getFileMarkup(employer_name)
{
	return '<a href="#" class="list-group-item">'+ employer_name +'</a>'
}