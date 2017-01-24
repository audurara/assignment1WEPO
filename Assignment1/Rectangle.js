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
		
		context.fillStyle = this.color;
     	context.fillRect(this.x, this.y, this.endX, this.endY);
      	context.strokeRect(this.x, this.y, this.endX, this.endY);
	}
}