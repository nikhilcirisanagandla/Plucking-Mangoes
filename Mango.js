class Mango {
  constructor(x, y) {
    var options = {
        isStatic: true,
        'restitution':0,
        'friction':1
    }
    this.body = Bodies.circle(x, y,40, options);
    this.radius = 40
     this.image = loadImage("Images/mango.png")
    World.add(world, this.body);
  }
  display(){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
  
    fill("yellow");
    image(this.image,0, 0, this.radius, this.radius);
    pop();
  }
};



