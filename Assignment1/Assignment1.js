
/*class Shape {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
	}
	doStuff(){

	}
}

class Pen extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
	}
	doStuff() {
		super.doStuff();
	}
}

class Circle extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
	}
	doStuff() {
		super.doStuff();

		ctx.beginPath();
		ctx.arc(100,75,50,0,2*Math.PI);
		ctx.stroke();
	}
}

class Rectangle extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
	}
	doStuff() {
		super.doStuff();
	}
}

class Line extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
	}
	doStuff() {
		super.doStuff();
	}
}

class Text extends Shape {
	constructor(x, y, color) {
		super(x, y, color);
	}
	doStuff() {
		super.doStuff();
	}
}
*/
var vals = {

	startX : 0,
	startY: 0,
	x2: 0,
	y2: 0,
	isDrawing : false,
	color: 'blue'
};


var arr = [];
$(document).ready(function(){

	let item = new Shape(10, 20, "blue");
	item.printValues();

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	vals.startX = 0;
	vals.startY = 0;

	$("#myCanvas").mousedown(function(e){

		console.log("blabla");

		vals.startX = e.pageX; 
		vals.startY = e.pageY;

		vals.isDrawing = true;

	});

	$("#myCanvas").mousemove(function(e){

		if(vals.isDrawing === true){

			vals.x2 = e.pageX;
			vals.y2 = e.pageY;

			context.clearRect(0, 0, 500, 500);
			context.beginPath();
			context.moveTo(vals.startX, vals.startY);
			context.lineTo(vals.x2, vals.y2);
			context.stroke();
		}

	});

	$("#myCanvas").mouseup(function(e){

		if(vals.isDrawing === true){

			//context.clearRect(0, 0, 500, 500);
			context.beginPath();
			context.moveTo(vals.startX, vals.startY);
			context.lineTo(vals.x2, vals.y2);
			context.stroke();

			console.log("bæta í arr");
			arr.push(new Line(vals.startX, vals.startY, vals.x2, vals.y2, vals.color));
			context.clearRect(0, 0, 500, 500);
			let i;
			for(i = 0; i < arr.length; i++){
				arr[i].draw();
			}

		}
		vals.isDrawing = false;
		console.log(arr);


	});
});








