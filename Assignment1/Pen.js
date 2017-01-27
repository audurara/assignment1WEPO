class Pen extends Shape {
	constructor(x, y, endX, endY, color, pWidth) {
		super(x, y, color, pWidth);
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
		context.lineWidth = this.pWidth;

    }


}