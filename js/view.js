// Render method
function renderTemplate(template, insertBlock, place) {
	insertBlock.insertAdjacentHTML(place, template);
}

// Create messages list
function createMessagesList(obj, insetBlock, mode) {
	
	var messages = '',
	archiveMesages = '';
	
	for (let i = 0; i < obj.length; i++) {
		if (obj[i].archive == false) {
			messages += '<tr class="new-message">' +
							'<td><button type="button" title="Add in archive"><i class="fa fa-file-archive-o"></i></button></td>' +
							'<td>' + obj[i].author + '</td>' +
							'<td><a data-name="message" id="' + obj[i].id +'"' + ' href="#" class="message-text" title="Open message">' + obj[i].text + '</a></td>' +
						'</tr>';
		} else{
			archiveMesages += '<tr class="archived-message">' +
								'<td><button type="button" title="Remove message"><i class="fa fa-trash del-message"></i></button></td>' +
								'<td>' + obj[i].author + '</td>' +
								'<td><a data-name="message" id="' + obj[i].id +'"' + ' href="#" class="message-text" title="Open message">' + obj[i].text + '</a></td>' +
							'</tr>';
		}
		
	}
		
	if (mode == 'messages') {
		renderTemplate(messages, insetBlock, 'afterBegin');
	} else if (mode == 'archiveMessages') {
		renderTemplate(archiveMesages, insetBlock, 'afterBegin');
	}
}

// Show message
function showMessage(showBlock, openedBlock) {
	var target = event.target,
		name = target.getAttribute('data-name');
	
	if (name !== 'message') return;
	
	var elem = document.getElementById(target.id);
	
	showBlock.style.cssText = 'display: block';
	openedBlock.innerHTML = elem.innerHTML;
	elem.parentElement.parentElement.classList.remove('new-message');
}

// Hide message
function hideMessage(showBlock, openedBlock) {
	showBlock.style.cssText = 'display: none';
	openedBlock.innerHTML = '';
}