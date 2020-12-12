class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            stiffness:0.1,
            bodyA:bodyA,
            bodyB: bodyB,
            length: 20,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        strokeWeight(4);
        line(a.x,a.y,b.x+this.offsetX,b.y+this.offsetY);
    }
}