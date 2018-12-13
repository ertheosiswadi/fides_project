$(document).ready(function() {
	let uuid = sessionStorage.getItem('selected_uuid');
	var matchedEmployers = [];
	$.get('/match/candidate/' + uuid, (data,status)=>{
		matchedEmployers = data;

	   	if(matchedEmployers.length == 0 || matchedEmployers === 'Invalid UUID')
	   	{
	   		alert('no match');
	   	}
	   	else{
			var markup = '<a href="#" class="list-group-item active">Employers</a>';
			for (i = 0; i < matchedEmployers.length; i++) {
				console.log(matchedEmployers[i]['form']['company_name']);
				markup = markup + getFileMarkup(matchedEmployers[i]['form']['company_name'], i);
			}
			$('#summary_table').html(markup);
	   	}


	   	$(document).on("click", "a" , function() {
			console.log(event.target.id);
			console.log(matchedEmployers[event.target.id]['form']);
			sessionStorage.setItem('selected_employer', JSON.stringify(matchedEmployers[event.target.id]));
			console.log(sessionStorage.getItem('selected_employer'));
			location.href = '/employer_details'
		});
	});




	
});
function getFileMarkup(employer_name, index)
{
	return '<a href="#" id="'+ index +'" class="list-group-item">'+ employer_name +'</a>'
}