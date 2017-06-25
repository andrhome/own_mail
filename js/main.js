window.addEventListener('DOMContentLoaded', function () {	
	var mode = document.body.getAttribute('data-mode');

	getMessages('GET', 'messages.json', mode); // Get data
	
	var table = document.querySelector('.table-messages'),
		showMessageBlock = document.querySelector('.show-message-block'),
		openedMessageBlock = document.querySelector('.opened-message-block'),
		hideBtn = document.querySelector('.hide-btn');
	
	// Open message
	table.addEventListener('click', function() {
		showMessage(showMessageBlock, openedMessageBlock);
	});
	
	// Clise message
	hideBtn.addEventListener('click', function() {
		hideMessage(showMessageBlock, openedMessageBlock);
	});
});