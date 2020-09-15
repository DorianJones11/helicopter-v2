class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.0,
          'friction':11.0,
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      console.log(this.body);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      angleMode(RADIANS);
      rotate(angle);

  
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
      
    }
  };