class Text extends Shape {
	constructor(x, y, endX, endY, color, pWidth, font, fSize, text) {
		super(x, y, color, pWidth);
		this.font = font;
		this.fSize = fSize;
		this.text = text;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY);
	}
	draw() {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
	

		console.log("Inni i text draw");
		//console.log(text);
        context.font = fSize + "px " + font;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
        context.closePath();

	}
}