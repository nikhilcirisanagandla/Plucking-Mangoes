class Stone {
  constructor(x, y) {
    var options = {
        isStatic: false,
        'restitution':0,
        'friction':1,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,20, options);
    this.radius = 20
     this.image = loadImage("Images/stone.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("white");
    fill("lime");
    image(this.image,0, 0, this.radius, this.radius);
    pop();
  }
};
