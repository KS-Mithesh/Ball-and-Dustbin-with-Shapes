class paper{
    constructor(x,y){

        var paper_options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,25,paper_options);
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;
        fill("#FF69B4");
        ellipse(pos.x,pos.y,50,50);

    }
}