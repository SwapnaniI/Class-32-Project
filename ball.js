class Ball{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution: 0.3,
            density: 1.8,
            friction: 0.8
        }
    this.body = Bodies.circle(x,y,r,options) 
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world,this.body)
    }
    display(){
         var pos = this.body.position;
         push();
         noStroke();
         fill(240, 66, 66)
         circle( pos.x, pos.y, (this.r*2) )
         pop();
    }
    fly(){   
        if(this.body.position.x>980){
            Matter.Body.applyForce(this.body,this.body.position,{x:-random(19,28),y:-random(20,30)})
        }
        else {
            Matter.Body.applyForce(this.body,this.body.position,{x:0,y:0})
        }      
    }
    


    
}