(function() {
	let button;

	button = $('input[type="submit"]');

	function makeGrid() {
		let canvas;
		let cell;
		let gridHeight;
		let gridWidth;
		let rows;

		canvas = $('#pixelCanvas');
		gridHeight = $('#inputHeight').val();
		gridWidth = $('#inputWeight').val();
		
		// reset canvas
		canvas.children().remove();
		
		// create boxes
		for (i = 0; i < gridHeight; i++) {
			canvas.append('<tr></tr>');
		}
		
		rows = $('tr');
		
		for (j = 0; j < gridWidth; j++) {
			rows.append('<td></td>');
		} 
		
		cell = canvas.find('td');
		
		// Add color to the grid
		cell.click(function() {
			let color;
			color = $("#colorPicker").val();
			$(this).attr('bgcolor', color);
		});
	}

	// Invoke makeGrid() function when button is clicked
	button.on('click', function(evt) {
	  evt.preventDefault();
	  makeGrid();
	});	
})();