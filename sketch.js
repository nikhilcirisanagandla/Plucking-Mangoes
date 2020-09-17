const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

;
var mango1
var tree;
var ground
var boy
var stone
var chain
function preload()
{
boy = loadImage("Images/boy.png")
}

function setup() {
    createCanvas(1000, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
mango1 = new Mango(800,100)
mango2 = new Mango(750,300)
mango3 = new Mango(700,250)
mango4 = new Mango(900,250)
mango5 = new Mango(800,200)
tree = new Tree(790,360,300,600)
ground = new Ground(500,650,1000,20)
stone = new Stone(235,420,30)
chain = new Chain(stone.body,{x:225,y:460})
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 image(boy,200,390,200,340)
  tree.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone.display()
chain.display()
ground.display()

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  
  }
  
  
  function mouseReleased(){
  chain.fly()
  
  }

  function detectCollision(lstone,lmango) {
     mangoBodyPosition = lmango.body.position;
     stoneBodyPosition = lstone.body.position;

     var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
     if(distance <= lmango.r + lstone.r) {
       Matter.Body.setStatic(lmango.body,false);
     }
  }

  function keyPressed() {
    if(kerCode === 32) {
      Matter.Body.setPostion(stone.body, {x: 235, y: 420})
      chain.attach(stone.body);
    }
  }