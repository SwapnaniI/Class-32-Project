class Ground{
    constructor(w,h){
        var options = {
            isStatic : true
        }
    this.body = Bodies.rectangle(500,690,w,h,options) 
    this.width = w;
    this.height = h;
    World.add(world,this.body)
    }
    display(){
         var pos = this.body.position;
         push();
         rectMode(CENTER)
         noStroke();
         fill(184, 102, 20)
         rect(pos.x,pos.y, this.width,this.height)
         pop();
    }
}