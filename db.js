const uuid = require('uuid/v1');

module.exports = {
	append: function(array, form){
		let id =  uuid();
		array.push({
			user_id: id,
			form: form
		});
		return id;
	},
}