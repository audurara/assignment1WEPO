class Rectangle extends Shape {
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
		
		var x = Math.min(this.x, this.endX); 
		var y = Math.min(this.y, this.endY);
		var w = Math.abs(this.x - this.endX);
		var h = Math.abs(this.y - this.endY);

		context.strokeRect(x, y, w, h);
	}
}