
var canvasOffset = $("#myCanvas").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;


var vals = {

	startX : 0,
	startY: 0,
	x2: 0,
	y2: 0,
	isDrawing : false,
	isMoving : false,
	color: 'black',
	pWidth: 0
};

var selectedShape = "pen";
var currentShape = undefined;
var currentO = undefined;


var arr = [];
$(document).ready(function(){

	let item = new Shape(10, 20, "black");
	item.printValues();

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	vals.startX = 0;
	vals.startY = 0;

	$('input:radio[name=draw]').change(function() {
		selectedShape = $(this).val();
    });

	$("#myCanvas").mousedown(function(e){

		vals.startX = e.pageX; 
		vals.startY = e.pageY;
		
		vals.isDrawing = true;

		

		if(selectedShape === "pen") {
			color = $('#color').val();
			pWidth = $('#width').val();
			currentShape = new Pen(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
			
		}
		if(selectedShape === "text"){
			canMouseX = parseInt(e.clientX - offsetX);
            canMouseY = parseInt(e.clientY - offsetY);
			currentShape = new Text(vals.startX, vals.startY, vals.x2, vals.y2, color);
			currentShape.draw();
		}

		currentO = currentShape;
	

	});

	$("#myCanvas").mousemove(function(e){

		if(vals.isDrawing === true){

			vals.isMoving = true;

			currentO.setEnd(e.offsetX, e.offsetY);


			vals.x2 = e.pageX;
			vals.y2 = e.pageY;


			context.clearRect(0, 0, 500, 500);


			if (selectedShape === "line") {
				color = $('#color').val();
				pWidth = $('#width').val();

				currentShape = new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
			} 
			else if (selectedShape === "rectangle") {
				color = $('#color').val();
				pWidth = $('#width').val();
				currentShape = new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);

			} 
			else if (selectedShape === "circle") {
				color = $('#color').val();
				pWidth = $('#width').val();

				currentShape = new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
				
			}
			else if(selectedShape === "text"){
				color = $('#color').val();
				currentShape = new Text(vals.startX, vals.startY, vals.x2, vals.y2, color);
	
			}

			let i;
			for(i = 0; i < arr.length; i++){
				arr[i].draw();
			}

			currentShape.draw(context);

			
		}
	});

	$("#myCanvas").mouseup(function(e){

		if(vals.isDrawing = true || vals.isMoving === true){


			/*if(selectedShape === "line"){
				arr.push(new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
				
			}
			if(selectedShape === "rectangle"){
				arr.push(new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
			}
			if(selectedShape === "circle"){
				arr.push(new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
			}
			if(selectedShape === "pen"){
				
				//arr.push(new Pen(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
				arr.push(currentO);
				
			}
			if(selectedShape === "text"){
				arr.push(new Text(vals.startX, vals.startY, vals.x2, vals.y2, color));
			}*/
			arr.push(currentO);

			
			vals.isMoving = false;
			vals.isDrawing = false;

			vals.startX = undefined; 
			vals.startY = undefined;
			vals.x2 = undefined;
			vals.y2 = undefined;
			
		}
		console.log(arr);


	});
});








