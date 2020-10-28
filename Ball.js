class Ball {
    constructor(x,y){
        var options = {
            restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.color = color(random(0,255),random(0,255),random(0,255));
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        push();
        fill(this.color);
        stroke(this.color);
        translate(pos.x,pos.y)
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(0, 0,this.radius,this.radius);
        pop();
    }
}