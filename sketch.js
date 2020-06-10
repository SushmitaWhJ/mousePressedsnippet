function setup(){
  createCanvas(400,400);
  createElement('h1' , 'My favourite Numbers Below')
}
function draw(){
  background(200);
  fill(255,0,0);
  rect(100,100,50,50);
}
function mousePressed(){
  fill("black")
  createP("My favourite number is" +random(0,10));
}
          
        