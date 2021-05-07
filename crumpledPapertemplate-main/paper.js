class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic:false,
        'density':1.2,  
        'friction':0.5,
        'restitution':0.3
        
        

      }
      
      this.body = Bodies.circle(x, y, (r-20)/2, options);
      this.image = loadImage("paper.png");
      this.r = r;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     
     image(this.image,0, 0 , this.r,this.r);
      pop();
    }
  };
  
