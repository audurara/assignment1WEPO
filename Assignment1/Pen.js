class Pen extends Shape {
	constructor(x, y, endX, endY, color, pWidth) {
		super(x, y, color, pWidth);
		this.endX = endX;
		this.endY = endY;
		this.array = [];
	}

	setEnd(x, y){
		this.array.push({x: x, y: y});
	}

	draw(){
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

		context.beginPath();
		context.lineWidth = this.pWidth;
		context.strokeStyle = this.color;
		context.moveTo(this.x-10, this.y-10);
		for (var i = 0; i < this.array.length; i++){
			context.lineTo(this.array[i].x, this.array[i].y);
			context.stroke()
		}
    }
}