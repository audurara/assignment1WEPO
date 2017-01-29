
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var canvasOffset = $("#myCanvas").offset();

var selectedShape = "pen";
var currentShape = undefined;
var currentO = undefined;


var arr = [];
var undoArr = [];


var vals = {

	startX : 0,
	startY: 0,
	x2: 0,
	y2: 0,
	isDrawing : false,
	isMoving : false,
	color: 'black',
	pWidth: 0,
	fSize : 0
};


$(document).ready(function(){

	let item = new Shape(10, 20, "black");
	item.printValues();

	vals.startX = 0;
	vals.startY = 0;

	offsetX = canvasOffset.left;
	offsetY = canvasOffset.top;


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
		if(selectedShape === "text" && selectedShape !== "circle"){
			vals.isDrawing = false;
			console.log("Inni i mousedown");
			var text = document.getElementById("text").value;
			console.log(text);
            color = $('#color').val();
            font = $('#font').val();
			fSize = $('#fontSize').val();
			newText = new Text(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth, "Arial", 30, text);
			arr.push(newText);
			newText.draw();
			vals.isDrawing = false;
			vals.isMoving = false;
			vals.color = undefined;
			pWidth = undefined;
			fSize = undefined;
			//vals.font = undefined;
	

		}

		currentO = currentShape;
	});


	$("#myCanvas").mousemove(function(e){

		if(vals.isDrawing === true){

			vals.isMoving = true;


			vals.x2 = e.pageX;
			vals.y2 = e.pageY;


			context.clearRect(0, 0, 500, 500);



				if (selectedShape === "line") {
					color = $('#color').val();
					pWidth = $('#width').val();


					currentShape = new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
					currentShape.draw(context);
				} 
				else if (selectedShape === "rectangle") {
					color = $('#color').val();
					pWidth = $('#width').val();
					currentShape = new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
					currentShape.draw(context);

				} 
				else if (selectedShape === "circle") {
					color = $('#color').val();
					pWidth = $('#width').val();
				
					console.log("Inni i mousemove Circle");
					currentShape = new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, pWidth);
					currentShape.draw(context);
					
					
				}
				else if (selectedShape === "pen") {
					currentO.setEnd(e.offsetX, e.offsetY);
					currentShape.draw(context);
					
				}
				/*else if(selectedShape === "text"){
		
					currentO.draw(context);

				}*/
		
			
					let i;
					for(i = 0; i < arr.length; i++){
						arr[i].draw(context);
						console.log("buinn i text draw");
					}
			
		}
			
	});


	$("#myCanvas").mouseup(function(e){

		if(vals.isDrawing = true || vals.isMoving === true){


			if(selectedShape === "line"){
				arr.push(new Line(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
				
			}
			if(selectedShape === "rectangle"){
				arr.push(new Rectangle(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
			}
			if(selectedShape === "circle"){
				arr.push(new Circle(vals.startX, vals.startY, vals.x2, vals.y2, color, vals.pWidth));
			}
			if(selectedShape === "pen"){
				
				arr.push(currentO);
				
			}
			/*if(selectedShape === "text"){
				//arr.push(new Text(vals.startX, vals.startY, vals.x2, vals.y2, color));
				arr.push(currentO);
			}*/
			

			
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


document.getElementById('undo').onclick = function(){
	
	undo();
}

document.getElementById('redo').onclick = function(){
	
	redo();
}

function undo() {
	if (arr.length !== 0) {
		undoArr.push(arr.pop());
		context.clearRect(0, 0, 500, 500);
		let i;
		for(i = 0; i < arr.length; i++){
			arr[i].draw();
		}
	}
}
function redo() {
	if (undoArr.length !== 0) {
		arr.push(undoArr.pop());
		context.clearRect(0, 0, 500, 500);
		let i;
		for(i = 0; i < arr.length; i++){
			arr[i].draw();
		}
	}
}







