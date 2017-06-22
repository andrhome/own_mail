// Get data
function getData() {
	"use strict";
	
	var xhr = new XMLHttpRequest(),
		xhrObj;
	
	xhr.open('GET', 'messages-list.json', true);
	
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			
			xhrObj = JSON.parse(xhr.responseText);
			
			// Create messages list HTMl
			createMessagesList(xhrObj);
		}
	};
	
	xhr.send();
}

// Create date
function createDate() {
	"use strict";
	
	var date = new Date(),
		day = date.getDay(),
		month = date.getMonth() + 1,
		year = date.getFullYear();
	
	if (day < 10) day = '0' + day;	
	if (month < 10)	month = '0' + month;
	
	var customDate = day + '/' + month + '/' + year;

	return customDate;
}

function createMessagesList(obj) {
	"use strict";
	
	var tableMessages = document.querySelector('#tableMessages tbody');
	
	var messages = '';
	
	for (let i = 0; i < obj.length; i++) {
		messages += '<tr class="new-message">' +
						'<td><i class="fa fa-trash del-message"></td>' +
						'<td>' + obj[i].author + '</td>' +
						'<td><a href="#" class="message-text">' + obj[i].text + '</a></td>' +
						'<td>' + createDate() + '</td>' +
					'</tr>';
	}
	
	tableMessages.insertAdjacentHTML('afterBegin', messages);
}

window.addEventListener('DOMContentLoaded', function () {
	"use strict";
	
	getData();
});