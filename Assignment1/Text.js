class Text extends Shape {
	constructor(x, y, color, pWidth, font, fSize, text) {
		super(x, y, color);
		this.color = color;
		this.fSize = fSize;
		this.pWidth = pWidth;
		this.text = text;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY);
	}
	draw() {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		var color = $('#color').val();

		console.log(color);
        $("#downlog").html("Down: " + canMouseX + " / " + canMouseY);

        var text = document.getElementById("text").value;
        context.font = 'italic 20px sans-serif';
        context.fillStyle = color;
        context.fillText(text, canMouseX, canMouseY);
	}
}