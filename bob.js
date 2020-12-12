class Bob {
    constructor(x,y){
        var options = {
            'isStatic': true,
            'restitution' : 0.3,
            'friction' : 0.7,
            'density' : 1.2
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
    
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(92,102,247);
    rect(pos.x,pos.y,this.width, this.height);
    
    }
    
    };