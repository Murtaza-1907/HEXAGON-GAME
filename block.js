class Block{
    constructor(x, y, width, height) {
        var options = {
                 restitution:0.5,
                 friction:0    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x =x
        this.y = y
        World.add(world, this.body);
        this.visibility =255
        this.image = loadImage("block.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        if(this.body.speed<5){
          // push();
          // translate(pos.x, pos.y);
          // rotate(angle);
          imageMode(CENTER);
          image(this.image,this.x,this.y,this.width, this.height);
          // pop();
        }
        else{
          World.remove(world,this.body)
          push()
          this.visibility-=5
          tint(255,this.visibility)
          // imageMode(CENTER)
          image(this.image,this.body.position.x,this.body.position.y, this.width,this.height)
        pop()
        }
      }
}
