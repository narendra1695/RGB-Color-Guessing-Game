var numberOfSquares = 6;

var colors = randomColorGenerator(numberOfSquares);

var squares = document.querySelectorAll(".square");
var goalColor = goalColorGenerator();
var displayColor = document.querySelector("#displayColor");
var message = document.querySelector("#message");
var h1Background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

displayColor.textContent = goalColor;

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = randomColorGenerator(numberOfSquares);
	goalColor = goalColorGenerator();
	displayColor.textContent = goalColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = randomColorGenerator(numberOfSquares);
	goalColor = goalColorGenerator();
	displayColor.textContent = goalColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	colors = randomColorGenerator(numberOfSquares);
	goalColor = goalColorGenerator();
	displayColor.textContent = goalColor;

	resetButton.textContent = "New Colors";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
}
	h1Background.style.backgroundColor = "steelblue";
})


for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === goalColor) {
			message.textContent = "Correct!";
			changeAllSquareColor();
			h1Background.style.backgroundColor = goalColor;
			resetButton.textContent = "Play Again"
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}
	})
}

function changeAllSquareColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
}

function goalColorGenerator() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColorGenerator(colorsToGenerate) {
	var randomColorArray = []
	for(var i = 0; i < colorsToGenerate; i++) {
		randomColorArray.push(randomColor());
	}
	return randomColorArray;
}

function randomColor() {
	var redAmount = Math.floor(Math.random() * 256 );
	var greenAmount = Math.floor(Math.random() * 256 );
	var blueAmount = Math.floor(Math.random() * 256 );

	return "rgb(" + redAmount + ", " + greenAmount + ", " + blueAmount + ")";
}