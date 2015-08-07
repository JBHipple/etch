// Set global ink color
var theColor = '#000000';

$(document).ready(function() {
  // draw the first box, size 4
  drawBox(4);
  
  // Highlight the black ink button, indicating it is active.
  $('button').last().css('border-color', 'red');
  
  // Detect when the dimension size changes
  $('input').on('change', function() {
    // Get the new dimension size
    var dimension = $('input').val();
    
    // Validate dimension size, draw new box if valid
    if((dimension < 1) || (dimension > 16)){ // Invalid
      alert("The number must be between 1 and 16!")      
    }
    else { // Valid
    drawBox(dimension);
    }
  });
  
  // Detect when Clear Box is pressed, and draw a new empty box. 
  $('#clear').on('click', function(){
    var dimension = $('input').val();
    drawBox(dimension);
  });
  
  //  Detect when an ink button is pressed and change the global ink variable.
  $('.ink').on('click', function() {
    theColor = $(this).val();
    $('.ink').css('border-color', 'black');
    $(this).css('border-color', 'red');
  });
});

// Draws a sketch box of height and width equal to theDims
function drawBox(theDims) {
  // Removes the existing sketch box
  $('ul').remove();
  
  // Create an unordered list for each row
  for (var i = 0; i < theDims; i++){
    $('#sketchBox').append('<ul></ul>');
  }
  
  // Create a list item for each cell.
  for (var i = 0; i < theDims; i++) {
    $('ul').append('<li><div class="thePixel"</div></li>');
  }
  
  // Attach mouseenter handlers to the new box.
  $('.thePixel').on("mouseenter", function() {
    // Changes the background-color of the activated cell to the global ink color.
    $(this).css('background-color', theColor);
  });
}