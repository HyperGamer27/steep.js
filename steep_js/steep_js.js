
let pi = 3.141592653589793238;

const dimX = 1300, dimY = 700;

let ampl = 100, freq = 50;

let x = -800;
function f(x)
{
    /// y = f(x)
    return ampl * sin(x / freq); 
}

function g(x)
{
    return ampl * cos(x / freq);
}

function h(x)
{
   return ampl * (sin(x / freq) + cos(x / freq)); 
}

function w(x)
{
   return  x * x / ampl; 
}

function setup() {
    createCanvas(dimX, dimY);
    background(0);
    stroke(50);
    line(0, dimY / 2, dimX, dimY / 2);
    line(dimX / 2, 0, dimX / 2, dimY);
}

function draw() {
    if(x <= dimX / 2 && f(x) <= dimY / 2)
    {
      strokeWeight(3);
      console.log('draw');
      stroke(230, 230, 0);
      point(x + dimX / 2, -f(x) + dimY / 2);
      stroke(57, 255, 20);
      point(x + dimX / 2, -g(x) + dimY / 2);
      stroke(128, 0, 128);
      point(x + dimX / 2, -h(x) + dimY / 2);
      stroke(66, 125, 240);
      point(x + dimX / 2, -w(x) + dimY / 2);
      x += 0.5;
    }
}
