// Get data
function getMessages(method, url, mode) {
	
	var xhr = new XMLHttpRequest(),
		xhrObj;
	
	xhr.open(method, url);
	
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			
			xhrObj = JSON.parse(xhr.responseText);
			
			// Create messages list HTMl
			if (mode == 'messages') {
				createMessagesList(xhrObj, document.querySelector('#tableMessages tbody'), mode);
			} else if (mode == 'archiveMessages'){
				createMessagesList(xhrObj, document.querySelector('#archiveMessages tbody'), mode);
			}
		}
	};
	
	xhr.send();
}
