class Line extends Shape {
	constructor(x, y, endX, endY, color, pWidth) {
		super(x, y, color, pWidth);
		this.endX = endX;
		this.endY = endY;
	}

	draw(){

		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

		context.strokeStyle = this.color;
		context.lineWidth = this.pWidth;
		context.beginPath();
		context.moveTo(this.x, this.y);
		context.lineTo(this.endX, this.endY);
		context.stroke();

	}
}