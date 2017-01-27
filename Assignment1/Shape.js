class Shape {
	constructor(x, y, color, pWidth) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.pWidth = pWidth;

	}
	setEnd(x, y){
		this.endX = x;
		this.endY = y;
	}
	printValues(){
		console.log("x:" + this.x + "y:" + this.y + "color:" + this.color);

	}
}