console.log('I am in Candidate Handler');
$(document).ready(function() {

	setDateToday();
	setGPAOptions()

	$('#submit_button').click(function() {

		var email = $('#candidate_email').val().toLowerCase();
		var name = $('#full_name').val().toLowerCase();
		var nickname = $('#nickname').val().toLowerCase();
		var birthdate = $('#birthdate').val();
		var address = $('#address').val().toLowerCase();
		var region = $('#region').val().toLowerCase();
		var postcode = $('#candidate_poscode').val();
		var education = $('#candidate_qualification').val().toLowerCase();
		var major = $('#candidate_major').val().toLowerCase();
		var gpa = $('#candidate_gpa').val();
		var sector = $('#industry_sector').val().toLowerCase() //dropdown		
		var salary = $('#salary').val() //number

		var insurance = $('#insurance_benefit').is(':checked')  //checkbox
		var parking = $('#parking_benefit').is(':checked')  //checkbox
		var mobile_phone = $('#phone_benefit').is(':checked')  //checkbox
		var laptop = $('#laptop_benefit').is(':checked')  //checkbox

		var json = {
			email:email,
			name: name,
			nickname: nickname,
			birthdate: birthdate,
			address:address,
			region:region,
			postcode:postcode,
			education:education,
			major:major,
			gpa:gpa,
			salary:salary,
			insurance:insurance,
			parking: parking,
			mobile_phone:mobile_phone,
			laptop:laptop,
			sector:sector			
		}
		console.log(json);

		$.ajax({
			type: 'post',
			url: '/candidate',
			data: JSON.stringify(json),
			contentType: "application/json; charset=utf-8",
			traditional: true,
			success: function(data){
				console.log('Candidate successfully uploaded form');
				alert('IMPORTANT! SAVE YOUR UNIQUE ID: \n'+ data);
			},
			error: function(textStatus, errorThrown) {
				alert('Error: server error');
			}

		});

	})

	function setDateToday()
	{
	    var date = new Date();

	    var day = date.getDate();
	    var month = date.getMonth() + 1;
	    var year = date.getFullYear();

	    if (month < 10) month = "0" + month;
	    if (day < 10) day = "0" + day;

	    var today = year + "-" + month + "-" + day;       
    	$("#birthdate").attr("value", today);
	}
	function setGPAOptions()
	{
		var option = '';
		for(i = 2; i <= 3; i++)
		{
			for(j=0; j < 10; j++)
			{
				option += '<option>'+ i + '.'+ j +'</option>'
			}
		}
		option += '<option>'+ 4 + '.'+ 0 +'</option>'
		console.log(option)
		$('#candidate_gpa').html(option);
	}
});