var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
for(var i = 0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
        	{numSquares = 3;}
        else
        {
        	numSquares = 6;
        }	
        reset();
        //figure out how many square

        //pick a new color

        // update page to reflect changes
	});
}
function reset(){
	resetButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colors of squares
	colorDisplay.textContent = pickedColor;
	//change colors of the square
	for(var i=0;i<squares.length;i++){  
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		
   }
   h1.style.backgroundColor = "steelblue";
   messageDisplay.textContent = "";
}
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	reset();
});
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++)
{  
	//add initial colors
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click",function(){
		// grab color of clicked square
		 var clickedColor = this.style.backgroundColor;
		 if(clickedColor === pickedColor)
		 {
           messageDisplay.textContent = "Correct!"
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again?"

		 }
		 else
		 {
		 	this.style.backgroundColor = "#232323";
		 	messageDisplay.textContent = "Try Again"
		 }
		 	
	});
}
function changeColors(color)
{
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
function pickColor()
{
var random =	Math.floor(Math.random( )*colors.length);
return colors[random];
}
function generateRandomColors(num)
{
  var arr = []
  //repeat num times
  for(var i =0;i<num;i++)
  {
     //get random color and push into arr
     arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
	// pick a red from 0 to 255
     var r = Math.floor(Math.random()*256);
	// pick a green
     var g = Math.floor(Math.random()*256);
	//pick blue
	 var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
