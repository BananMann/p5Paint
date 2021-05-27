  class NewPen { // Makes a new class
    constructor (penColor, penWidth) { // Creates an object with the variables penColor and penWidth
      this.px = pwinMouseX; // Gets the previous mouse position
      this.py = pwinMouseY;
      this.x = winMouseX; // Gets the current mouse position
      this.y = winMouseY;
      
      this.penColor = penColor; // Sets pen color and width for the line object
      this.penWidth = penWidth;
    }
    show () {
      stroke(this.penColor); // Sets the color of the line equal to penColor
      strokeWeight(this.penWidth); // Sets the width of the line equal to penWidth
      line(this.px, this.py, this.x, this.y); // Creates the line using coords gotten previously
      stroke(255); // Keeps the UI stroke and width consistant
      strokeWeight(2);
    }
  }
