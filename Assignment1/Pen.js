class Pen extends Shape {
	constructor(x, y, endX, endY, color) {
		super(x, y, color);
		this.endX = endX;
		this.endY = endY;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY);
	}
	draw(context){
		//context.beginPath();
		//context.moveTo(0, 0);
		//context.lineTo(500, 500);
		//context.stroke();
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

	}

}