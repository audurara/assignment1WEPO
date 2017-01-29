class Text extends Shape {
	constructor(x, y, endX, endY, color, pWidth, font, fSize, text) {
		super(x, y, color, pWidth);
		this.font = font;
		this.fSize = fSize;
		this.text = text;
	}

	draw() {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
	
        context.font = this.fSize + "px " + this.font;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
        context.closePath();

	}
}