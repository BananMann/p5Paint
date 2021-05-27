var backgroundColor; // Color of background
var penColor; // Color of pen
var penWidth; // Width of pen
var clearButton; // Variable for clearing
var lines = []; // Array that stores all lines

function setup() {
  createCanvas(550, 400); 
  penWidth = createSelect(false); // Makes a dropdown for pen width. 'false' makes it so you can only select one
  penWidth.option('1'); // Options for width
  penWidth.option('2');
  penWidth.option('3');
  penWidth.option('4');
  penWidth.selected('2'); // Selects width of 2 by default
  clearButton = createButton('Clear'); // Creates a button for clearing
  clearButton.position(455, 310);
  clearButton.size(75, 75);
  penColor = createColorPicker(''); // Creates a color selector for pen color
  penColor.position(95, 333);
  backgroundColor = createColorPicker('#1e1e1e'); // Creates a color selector for pen width
  backgroundColor.position(275, 333);
  penWidth.position(410, 335);
}

function draw() {
  background(backgroundColor.value()); // Sets the background equal to backgroundColor
  rect(-1, 300, 600, 150); // Creates UI and text
  text('Pen Color:', 25, 350);
  text('Background Color:', 160, 350);
  text('Pen Width:', 340, 350);
  
  if(mouseIsPressed) { // If the mouse is held
    newLine = new NewPen(penColor.value(), penWidth.value()); // Sets the values of the variables to the class
    lines.push(newLine); // Creates a new line object in the line array
  }
  
  for(var newLine of lines) {  // Creates a for... of loop that shows the lines
    newLine.show();
  }
  
  clearButton.mousePressed(function() { // When the clear button is clicked it sets the line array to empty
    lines = [];
  })
}
