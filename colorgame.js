var numsquares=6;
var colors=[];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colordisp=document.getElementById("colordisplay");
var msg=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var modebtn=document.querySelectorAll(".mode");


init();

function init(){
	//mode button
	setmode();
	//set squares
	setsquare();
	reset();
}

function setmode(){
	for(var i=0;i<modebtn.length;i++)
	{
	modebtn[i].addEventListener("click",function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");		
		if(this.textContent === "Easy")
		{
			numsquares=3;
		}else{
			numsquares=6;
		}
	reset();
		});
	}
}
function setsquare(){
	for(var i=0;i<squares.length;i++)
	{	
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
	//grab clicked color
	var clickedcolor= this.style.background;
	//compare colors
	console.log(clickedcolor);
	if(clickedcolor === pickedcolor){
		msg.textContent="Correct!";
		resetbtn.textContent="Play Again?";
		changecolor(clickedcolor);
		h1.style.background=clickedcolor;
	}else	{
		this.style.background="#232323";
		msg.textContent="Try Again";		
	}
		});
	}
}
function reset(){
	//add new colours
	colors=generaterandomcolor(numsquares);
	//pick new colours
	pickedcolor=pickedcolor1();
	//change colour display
	colordisp.textContent=pickedcolor;
	msg.textContent=""; 
	resetbtn.textContent="New Colours";
	//change colours of square
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.background=colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
}
resetbtn.addEventListener("click",function(){
	reset();
});

colordisp.textContent=pickedcolor;

function changecolor(color){
	//loop
	for(var i=0;i<squares.length;i++)
	{
		//change all color to correct color
		squares[i].style.background=color;
	}
}
function pickedcolor1(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	// pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green"
	var g=Math.floor(Math.random()*256);
	//pick a "blue"
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b +")";

}