$(document).ready(function() {
	let initial_role = $('#select_role').val();
	if(initial_role == '0')
	{
		$('#below_dropdown').html('<button type="button" onclick="location.href=\'/form/candidate\'"; class="btn-lg btn-primary btn-block" id="button_form_c">Fill Form</button>');
	}
	else if(initial_role == '1')
	{
		$('#below_dropdown').html('<button type="button" onclick="location.href=\'/form/employer\'"; class="btn-lg btn-primary btn-block" id="button_form_e">Fill Form</button>');
	}
	if(initial_role == '2')
	{
		$('#below_dropdown').html('<button type="button" onclick="location.href=\'/candidate\'"; class="btn-lg btn-primary btn-block" id="button_clist">List of Candidates</button>'
								+ '<button type="button" onclick="location.href=\'/employer\'"; class="btn-lg btn-primary btn-block" id="button_elist">List of Employers</button>'
								+ '<div class="container"style="margin-top: 5px;height: 46px;width: auto;padding-left: 0px;padding-right: 0px;"><div class="row" style="margin-right: -0px;margin-left: -0px;"><div class="col-xs-6 col-sm-6 col-md-6" style="padding-right: 5px;padding-left: 0px;">'

									+ '<input type="text" class="form-control" placeholder="UUID" id="uuid"></div><div class="col-xs-6 col-sm-6 col-md-6" style="padding-left: 5px;padding-right: 0px;">'
									+ '<button type="button" class="btn btn-danger btn-block" id="button_match"'
									+ 'onclick=\"'
										//+ 'location.href=\'https://supere-matcher.herokuapp.com/match/candidate/\'+$(\'#uuid\').val()'
										+ '\"'
									+'>Match</button></div></div></div>');
		document.getElementById('button_match').onclick = function(){
			let uuid = document.getElementById('uuid').value

			alert('uuid is ' + uuid);
			sessionStorage.setItem('selected_uuid', uuid);
			location.href= '/matched_candidates'
		}
	}
	$('#select_role').change(()=>{
		let role = $('#select_role').val();

		let toCandidateForm = "'https://supere-matcher.herokuapp.com/form/candidate'"
		let toEmployerForm = "'https://supere-matcher.herokuapp.com/form/employer'"
		let toCandidateList = "'https://supere-matcher.herokuapp.com/candidate'"
		let toEmployerList = "'https://supere-matcher.herokuapp.com/employer'"
		let toMatch = "'https://supere-matcher.herokuapp.com/match/candidate/'"

		if(role == '0')
		{
			$('#below_dropdown').html('<button type="button" onclick="location.href=\'/form/candidate\'"; class="btn-lg btn-primary btn-block" id="button_form_c">Fill Form</button>');
		}
		else if(role == '1')
		{
			$('#below_dropdown').html('<button type="button" onclick="location.href=\'/form/employer\'"; class="btn-lg btn-primary btn-block" id="button_form_e">Fill Form</button>');
		}
		if(role == '2')
		{
			$('#below_dropdown').html('<button type="button" onclick="location.href=\'/candidate\'"; class="btn-lg btn-primary btn-block" id="button_clist">List of Candidates</button>'
									+ '<button type="button" onclick="location.href=\'/employer\'"; class="btn-lg btn-primary btn-block" id="button_elist">List of Employers</button>'
									+ '<div class="container"style="margin-top: 5px;height: 46px;width: auto;padding-left: 0px;padding-right: 0px;"><div class="row" style="margin-right: -0px;margin-left: -0px;"><div class="col-xs-6 col-sm-6 col-md-6" style="padding-right: 5px;padding-left: 0px;">'

										+ '<input type="text" class="form-control" placeholder="UUID" id="uuid"></div><div class="col-xs-6 col-sm-6 col-md-6" style="padding-left: 5px;padding-right: 0px;">'
										+ '<button type="button" class="btn btn-danger btn-block" id="button_match"'
										+ 'onclick=\"'
											//+ 'location.href=\'https://supere-matcher.herokuapp.com/match/candidate/\'+$(\'#uuid\').val()'
											+ '\"'
										+'>Match</button></div></div></div>');
			document.getElementById('button_match').onclick = function(){
				let uuid = document.getElementById('uuid').value

				alert('IMPORTANT: The following is your unique id. SAVE it to reference your application in the future :)\n' + uuid);
				sessionStorage.setItem('selected_uuid', uuid);
				location.href= '/matched_candidates'
				// $.get('/matched_candidates', function(data, status){
			 //       //$("#body").html(data);
			 //       document.write(data)
			 //    });
			}
		}
	});
	
});