class Roof{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Matter.Bodies.rectangle(800,400,400,20, options);
        this.width = 300;
        this.height = 20;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        stroke(this.color);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}