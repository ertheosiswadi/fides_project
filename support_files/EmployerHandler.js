console.log('I am in Employer Handler');
$(document).ready(function() {
	setGPAOptions();
	$('#submit_button').click(function() {
		var company_name = $('#name_of_company').val().toLowerCase() //text
		var legal_name = $('#legal_name_of_company').val().toLowerCase() //text
		var sector = $('#industry_sector').val().toLowerCase() //dropdown
		var region = $('#company_region').val().toLowerCase() //dropdown
		var postcode = $('#company_poscode').val() //number

		var job_name = $('#name_of_job').val().toLowerCase()//text
		var education = $('#required_qualification').val().toLowerCase() //dropdown
		var major = $('#required_major').val().toLowerCase() //dropdown
		var gpa = $('#required_gpa').val() //dropdown
		var salary = $('#salary').val() //number

		var insurance = $('#insurance_benefit').is(':checked')  //checkbox
		var parking = $('#parking_benefit').is(':checked')  //checkbox
		var mobile_phone = $('#phone_benefit').is(':checked')  //checkbox
		var laptop = $('#laptop_benefit').is(':checked')  //checkbox

		var json = {
			company_name: company_name,
			legal_name: legal_name,
			sector: sector,
			region: region,
			postcode: postcode,
			education: education,
			major: major,
			gpa:gpa,
			salary:salary,
			insurance:insurance,
			parking: parking,
			mobile_phone:mobile_phone,
			laptop:laptop
		}
		console.log(json);

		$.ajax({
			type: 'post',
			url: '/employer',
			data: JSON.stringify(json),
			contentType: "application/json; charset=utf-8",
			traditional: true,
			success: function(data){
				console.log('Employer successfully uploaded form');
			},
			error: function(textStatus, errorThrown) {
				alert('Error: server error');
			}

		});		
	})
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
		$('#required_gpa').html(option);
	}
});