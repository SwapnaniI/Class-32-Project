const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
//var posX;
var box1,box2,box3;
var ballArray = [];
var totalBall;
var stopSpawn;
var points;
var bg;
function setup() {
	createCanvas(1000, 700);	
	engine = Engine.create();
	world = engine.world;	
	
  posX = 400;

	ground = new Ground(1000,20);

  box1 = new Box(posX,675,80,10);
  box2 = new Box(posX+45,640,10,80);
  box3 = new Box(posX-45,640,10,80);

  totalBall = 0;

  stopSpawn = 0;

  points = 0;

 
  // for(var i = 0; i < totalBall; i++){
  //   ballArray.push(new Ball(980,685,10))
  // }
  
  bg = 180;

  
  a = 6;
  
	
}
                                                                                              

function draw() {
  background(bg);
  Engine.update(engine);

  Matter.Body.setPosition(box1.body, {x:posX , y:675});
  Matter.Body.setPosition(box2.body, {x:posX + 45 , y:640});
  Matter.Body.setPosition(box3.body, {x:posX - 45, y:640});
  
   //Filling the strokes in the box to make it look like a single object
   push();
   noStroke();
   rectMode(CENTER);
   fill(85, 246, 166);
   rect(posX+40,675,9,9.2);
   rect(posX-40,675,9,9.2);
   pop();
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  if(stopSpawn <=10){
    if(frameCount % 60 === 0){     
      ballArray.push(new Ball(985,675,10));
      totalBall = totalBall+1;
      stopSpawn = stopSpawn+1;
      
    } 
  }
  for(var i = 0; i < totalBall; i++){
    ballArray[i].display();
    ballArray[i].fly();
  }
console.log(points)

  //The controlls for the block
  
  timeChange();
  textWrite()
  
  if(keyDown(LEFT_ARROW)){
    posX = posX - 6.5;
  }
  if(keyDown(RIGHT_ARROW)){
    posX = posX + 6.5;
  }
  if(keyWentUp(LEFT_ARROW)){
    posX = posX;
  }
  if(keyWentUp(RIGHT_ARROW)){
    posX = posX;
  }

 
  
  //Making the launcher
  push()
  translate(977,661);
  rectMode(CENTER)
  angleMode(DEGREES)
  rotate(42)
  strokeWeight(0.8);
  stroke(19, 91, 236);
  fill(182, 236, 19)
  rect(0,0,90,43);
  pop();
  //Making the second launcher
//   push()
//   translate(23,661);
//   rectMode(CENTER)
//   angleMode(DEGREES)
//   rotate(-42)
//   strokeWeight(0.8);
//   stroke(19, 91, 236);
//   fill(182, 236, 19)
//   rect(0,0,90,43);
//  // console.log(mouseX,mouseY)
//   pop();

}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     posX = posX-5;
//   } else if (keyCode === RIGHT_ARROW) {
//     posX = posX+5;
//   }
// }

function textWrite(){
  push();
  textSize(20)
  if(a>5){
    fill("red")
    text("Great!",400,200);
    text("Collect all the 10 balls!",400,300);
    text("Use your arrow keys for control",400,250);
  }
  else if(a<5){
    fill("magenta")
    text("Great!, you are playing so well in the dark!",400,200);
    text("Collect all the 10 balls!",400,300);
    text("Use your arrow keys for control",400,250);
  }
  pop();
}



async function timeChange(){
  var time = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")  
  var timeJson = await time.json();
  var dateTime = timeJson.datetime;
  var hour = dateTime.slice(11,13)
  if((hour>=6)&&(hour<=18)){
     
     a = 6
     bg = 220;
  }
  else {
    a = 2;
    bg = 160;
  }
  
 
}
