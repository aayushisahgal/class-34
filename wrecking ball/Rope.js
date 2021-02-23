class Rope{
    constructor(bodyA,pointB){

        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness:2,
            length:250
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        this.pointB=pointB;
    }

    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.pointB;
        stroke('yellow');
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}