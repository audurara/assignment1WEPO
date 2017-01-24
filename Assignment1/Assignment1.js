
var vals = {

	startX : 0,
	startY: 0,
	x2: 0,
	y2: 0,
	isDrawing : false,
	color: 'blue'
};

var selectedShape = undefined;
var currentShape = undefined;


var arr = [];
$(document).ready(function(){

	let item = new Shape(10, 20, "blue");
	item.printValues();

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	vals.startX = 0;
	vals.startY = 0;

	$('input:radio[name=draw]').change(function() {
		selectedShape = $(this).val();
		console.log(selectedShape);
    });

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

			// context.beginPath();
			// context.moveTo(vals.startX, vals.startY);
			// context.lineTo(vals.x2, vals.y2);
			// context.stroke();

			if (selectedShape === "line") {
				currentShape = new Line(vals.startX, vals.startY, vals.x2, vals.y2, vals.color);
				currentShape.draw(context);
			} else if (selectedShape === "rectangle") {
				currentShape = new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, vals.color);
				currentShape.draw(context);
			} else if (selectedShape === "pen") {
				currentShape = new Pen(vals.startX, vals.startY, vals.x2, vals.y2, vals.color);
				currentShape.draw(context);
			}

			let i;
			for(i = 0; i < arr.length; i++){
				arr[i].draw();
			}
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

		}
		vals.isDrawing = false;
		console.log(arr);


	});
});








