
var canvasOffset = $("#myCanvas").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;


var vals = {

	startX : 0,
	startY: 0,
	x2: 0,
	y2: 0,
	isDrawing : false,
	color: 'black',
	pWidth: 0,
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
    });

	$("#myCanvas").mousedown(function(e){

		vals.startX = e.pageX; 
		vals.startY = e.pageY;
		
		vals.isDrawing = true;

		if(selectedShape === "pen") {
			console.log("hallo");
			context.beginPath();
			context.moveTo(e.clientX, e.clientY);
		}
		if(selectedShape === "text"){

			color = $('#color').val();
		
			console.log(color);
			canMouseX = parseInt(e.clientX - offsetX);
            canMouseY = parseInt(e.clientY - offsetY);
            $("#downlog").html("Down: " + canMouseX + " / " + canMouseY);

            var text = document.getElementById("text").value;
            context.font = 'italic 20px sans-serif';
            context.fillStyle = color;
            context.fillText(text, canMouseX, canMouseY);
		}
	

	});

	$("#myCanvas").mousemove(function(e){

		if(vals.isDrawing === true){

			vals.x2 = e.pageX;
			vals.y2 = e.pageY;


			context.clearRect(0, 0, 500, 500);


			if (selectedShape === "line") {
				color = $('#color').val();
				pWidth = $('#width').val();
				console.log(pWidth);

				currentShape = new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
				currentShape.draw(context);


			} else if (selectedShape === "rectangle") {
				color = $('#color').val();
				pWidth = $('#width').val();
				currentShape = new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
				currentShape.draw(context);

			} else if (selectedShape === "pen") {
				color = $('#color').val();
				pWidth = $('#width').val();
				currentShape = new Pen(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
				currentShape.draw(context);
				
    			context.lineTo(e.pageX, e.pageY);
    			context.stroke();
				
				console.log("blalbabal");
				

			}
			else if (selectedShape === "circle") {
				color = $('#color').val();
				pWidth = $('#width').val();
				currentShape = new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
				currentShape.draw(context);

			}
			else if (selectedShape === "text") {
				currentShape = new Text(vals.startX, vals.startY, vals.x2, vals.y2, color);
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

			if(selectedShape === "line"){
				arr.push(new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth));
			}
			if(selectedShape === "rectangle"){
				arr.push(new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth));
			}
			if(selectedShape === "circle"){
				arr.push(new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth));
			}
			if(selectedShape === "pen"){
				arr.push(new Pen(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth));
			}
			if(selectedShape === "text"){
				arr.push(new Text(vals.startX, vals.startY, vals.x2, vals.y2, color));
			}


			vals.isDrawing = false;
		}
		console.log(arr);


	});
});








