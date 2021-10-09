const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  
  boxa1 = new Box(600, 100, 70, 70);
  boxa2 = new Box(600, 100, 70, 70);
  boxa3 = new Box(600, 100, 70, 70);
  boxa4 = new Box(600, 100, 70, 70);
  boxa5 = new Box(600, 100, 70, 70);
  boxa6 = new Box(600, 100, 70, 70);
  boxa7 = new Box(600, 100, 70, 70);

  boxb1 = new Box(700, 100, 70, 70);
  boxb2 = new Box(700, 100, 70, 70);
  boxb3 = new Box(700, 100, 70, 70);
  boxb4 = new Box(700, 100, 70, 70);
  boxb5 = new Box(700, 100, 70, 70);
  boxb6 = new Box(700, 100, 70, 70);

  boxc1 = new Box(800, 100, 70, 70);
  boxc2 = new Box(800, 100, 70, 70);
  boxc3 = new Box(800, 100, 70, 70);
  boxc4 = new Box(800, 100, 70, 70);
  boxc5 = new Box(800, 100, 70, 70);
  boxc6 = new Box(800, 100, 70, 70);
  boxc7 = new Box(800, 100, 70, 70);
  boxc8 = new Box(800, 100, 70, 70);

  boxd1 = new Box(900, 100, 70, 70);
  boxd2 = new Box(900, 100, 70, 70);
  boxd3 = new Box(900, 100, 70, 70);
  boxd4 = new Box(900, 100, 70, 70);
  boxd5 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  boxa1.display();
  boxa2.display();
  boxa3.display();
  boxa4.display();
  boxa5.display();
  boxa6.display();
  boxa7.display();

  boxb1.display();
  boxb2.display();
  boxb3.display();
  boxb4.display();
  boxb5.display();
  boxb6.display();

  boxc1.display();
  boxc2.display();
  boxc3.display();
  boxc4.display();
  boxc5.display();
  boxc6.display();
  boxc7.display();
  boxc8.display();

  boxd1.display();
  boxd2.display();
  boxd3.display();
  boxd4.display();
  boxd5.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}