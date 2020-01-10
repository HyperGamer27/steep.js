
/// Made by Nicolae Antonio (HyperGamer27), Brasov, Romania, jan. 2020 AD

let pi = 3.141592653589793238; // =D

alert("Welcome to steep.js");

const dimX = prompt("Enter the width of the plot in pixels");
const dimY = prompt("Enter the height of the plot in pixels");

let step = parseFloat(prompt("Enter the Precission of the ploting (0.01, 5)"));
alert("NOTE : Enter the rules for the functions (as a Javascript expression)");
alert("NOTE : If you want to tune the frequency use the formula: ampl * f(x * freq), enter 1 in both cases for no alteration.");
let ec1 = prompt("f(x) = ");
let ec2 = prompt("g(x) = ");
let ec3 = prompt("h(x) = ");
let ec4 = prompt("w(x) = ");
alert("That's all, if you like it or if I made a mistake send a review of it or open an issue @https://github.com/HyperGamer27/steep.js. Thanks!")

let x = -dimX / 2;

function f(x)
{
    return eval(ec1); 
}

function g(x)
{
    return eval(ec2);
}

function h(x)
{
   return eval(ec3); 
}

function w(x)
{
   return eval(ec4); 
}

function setup() {
    createCanvas(dimX, dimY);
    background(0);
    stroke(50);
    line(0, dimY / 2, dimX, dimY / 2);
    line(dimX / 2, 0, dimX / 2, dimY);
}

function ch1()
{
    if(x <= dimX / 2)
    {
      strokeWeight(3);
      console.log('draw');
      stroke(230, 230, 0);
      point(x + dimX / 2, -f(x) + dimY / 2);
      x += step;
    }
}

function ch2()
{
    if(x <= dimX / 2)
    {
      strokeWeight(3);
      console.log('draw');
      stroke(57, 255, 20);
      point(x + dimX / 2, -g(x) + dimY / 2);
      x += step;
    }
}

function ch3()
{
    if(x <= dimX / 2)
    {
      strokeWeight(3);
      console.log('draw');
      stroke(128, 0, 128);
      point(x + dimX / 2, -h(x) + dimY / 2);
      x += step;
    }
}

function ch4()
{
    if(x <= dimX / 2)
    {
      strokeWeight(3);
      console.log('draw');
      stroke(66, 125, 240);
      point(x + dimX / 2, -w(x) + dimY / 2);
      x += step;
    }
}

function draw() {
     ch1();
     ch2();
     ch3();
     ch4();
}
