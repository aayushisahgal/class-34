const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball,rope,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function setup(){
      createCanvas(1800,700);

      engine=Engine.create();
      world=engine.world;
  
      ground=new Ground(900,670,1800,20);
  
      ball=new Ball(600,400,50,50);

      rope=new Rope(ball.body,{x:570,y:80});

      box1=new Box(670,100,70,70);
      box2=new Box(670,100,70,70);
      box3=new Box(670,100,70,70);
      box4=new Box(670,100,70,70);
      box5=new Box(670,100,70,70);
      box6=new Box(670,100,70,70);
      box7=new Box(670,100,70,70);
      box8=new Box(670,100,70,70);
      box9=new Box(720,100,70,70);
      box10=new Box(720,100,70,70);
      box11=new Box(720,100,70,70);
      box12=new Box(720,100,70,70);
      box13=new Box(720,100,70,70);
      box14=new Box(720,100,70,70);
      box15=new Box(720,100,70,70);
      box16=new Box(720,100,70,70);



}

function draw(){
    background('blue');
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y:mouseY});
}