const uuid = require('uuid/v1');

module.exports = {
	append: function(array, form){
		array.push({
			user_id: uuid(),
			form: form
		});
	},
}