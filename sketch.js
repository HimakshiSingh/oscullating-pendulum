const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var cir , pend


function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(600,80,1200,20);
  cir = new Circle(200,200,40,40)
  pend = new Pendulum(cir.body,{x:200,y:80})
  
  
}

function draw(){

  

background("white");
Engine.update(engine);
cir.display();
pend.display();
ground.display();








}
function keyPressed() {
  if (keyCode === ENTER) {
    
   
    Matter.Body.setPosition(cir.body,{x:mouseX,y:mouseY})
  }
              
}



  
