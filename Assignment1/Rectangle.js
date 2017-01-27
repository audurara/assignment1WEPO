class Rectangle extends Shape {
	constructor(x, y, endX, endY, color) {
		super(x, y, color);
		this.endX = endX;
		this.endY = endY;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY);
	}
	draw(){

		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

		context.strokeStyle = this.color;


		var x = Math.min(this.x, this.endX), 
			y = Math.min(this.y, this.endY), 
			w = Math.abs(this.x - this.endX),
			h = Math.abs(this.y - this.endY);

		context.strokeRect(x, y, w, h);

	}
}