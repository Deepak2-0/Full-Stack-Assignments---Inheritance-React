class Shape {
  color = "red";

  constructor(color) {
    this.color = color;
  }

  drawShape() {
    console.log("shape");
  }
  calculateArea() {
    console.log("area of shape");
  }
}

export default Shape;
