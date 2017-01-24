class Circle extends Shape {
	constructor(x, y, endX, endY, color, radius) {
		super(x, y, color);
		this.endX = endX;
		this.endY = endY;
		radius = this.radius;
	}
	printValues(){
		super.printValues();
		console.log("endX:" + this.endX + "endY:" + this.endY + "radius" + this.radius);
	}
	draw(){

		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		
		var centerX = canvas.width / 2;
      	var centerY = canvas.height / 2;

      	context.beginPath();
      context.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
		/*context.beginPath( );
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false );
		context.fillStyle = "#8ED6FF";
		context.fill( );
		context.lineWidth = 5;
		context.strokeStyle = "black";
		context.stroke( );*/
		//7context.arc(100,75,50,0,2*Math.PI);
		//context.stroke();
	}
}