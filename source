var backgroundColor;
var penColor;
var penWidth;
var clearButton;

function setup() {
  createCanvas(550, 400);
  penWidth = createSelect(false);
  penWidth.option('1');
  penWidth.option('2');
  penWidth.option('3');
  penWidth.option('4');
  penWidth.selected('2');
  clearButton = createButton('Clear');
  clearButton.position(455, 310);
  clearButton.size(75, 75);
  penColor = createColorPicker('');
  penColor.position(95, 333);
  backgroundColor = createColorPicker('#1e1e1e');
  backgroundColor.position(275, 333);
  penWidth.position(410, 335);
}

function draw() {
  background(backgroundColor.value());
  rect(-1, 300, 600, 150);
  text('Pen Color:', 25, 350);
  text('Background Color:', 160, 350);
  text('Pen Width:', 340, 350);
  
  if(mouseIsPressed) {
    
  }
}
