class Circle extends Shape {
	constructor(x, y, endX, endY, color, radius) {
		super(x, y, color);
		this.endX = endX;
		this.endY = endY;
		radius = this.radius;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY + "radius" + this.radius);
	}
	draw(){

		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		var centerX = canvas.width / 2;
      	var centerY = canvas.height / 2;

      	//context.clearRect(0, 0, canvas.width, canvas.height);
	    context.beginPath();
	    context.moveTo(this.x, this.y + (this.endY - this.y) / 2);
	    context.bezierCurveTo(this.x, this.y, this.endX, this.y, this.endX, this.y + (this.endY - this.y) / 2);
	    context.bezierCurveTo(this.endX, this.endY, this.x, this.endY, this.x, this.y + (this.endY - this.y) / 2);
	    context.closePath();
	    context.stroke();

	}
}