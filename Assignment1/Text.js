class Text extends Shape {
	constructor(x, y, endX, endY, color) {
		super(x, y, color);
		this.endX = endX;
		this.endY = endY;
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
            context.fillText(text, canMouseX, canMouseY)
	}
}