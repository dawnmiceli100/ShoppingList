
$(document).ready(function() {

	$('#itemToAdd').focus();

	var newItem = '';
	
	$('#addButton').click(function() {
		
		newItem = jQuery.trim($('#itemToAdd').val());
	
		if (newItem == '') {
			$('#errorMessage').removeClass('hidden');
		} else {
			$('#errorMessage').addClass('hidden');
			// Append new item to list. This will be an input of type checkbox
			// that has a label equal to the name of the shopping list item added. 
			$('#listItems').append('<li><input type="checkbox" name="item"><label for "item">' + ' ' + newItem + '</label></li>');
		};	

		$('#itemToAdd').focus();
		$('#itemToAdd').val('');	
	});

	// pressing return while in item entry triggers click on add button
	$('#itemToAdd').keydown(function (e) {
		if (e.keyCode == 13) {
			$('#addButton').click();	
		};	
	});	

	$('#deleteButton').click(function() {
		$("input:checked").parent().remove();
		$('#itemToAdd').focus();
	});


		
});

	



