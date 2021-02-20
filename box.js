class Box{
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
            restitution: 0.4,
            density: 0.8,
            friction: 0.3
        }
    this.body = Bodies.rectangle(x,y,w,h,options) 
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    World.add(world,this.body)
    }
    display(){
         var pos = this.body.position;
         push();
         rectMode(CENTER)
         strokeWeight(0.6)
         stroke(70, 13, 242)
         //noStroke();
         fill(85, 246, 166)
         rect(pos.x,pos.y, this.width,this.height)
         pop();
    }
}