function preload(){
 room =loadImage("assets/room1.jpg")
 toyboximg = loadImage("assets/toy_box.png")
 treashcanimg = loadImage("assets/trash_can.png")
 bookimg = loadImage("assets/book.png")
 ballimg = loadImage("assets/ball.png")
 bagimg = loadImage("assets/bag.png")
 carimg = loadImage("assets/car.png")
 taddyimg = loadImage("assets/taddy_bair.png")
 garbageimg = loadImage("assets/garbage.png")
}

function setup() {
 createCanvas(1200,700)

 toybox = createSprite(1050,500);
 toybox.addImage("toybox",toyboximg);
 toybox.scale = 0.6;

 treashcan = createSprite(100,500);
 treashcan.addImage("treashcan",treashcanimg);
 treashcan.scale = 0.6;

 book = createSprite(300,500);
 book.addImage("book",bookimg);
 book.scale = 0.8;

 ball = createSprite(700,600);
 ball.addImage("ball",ballimg);
 ball.scale =0.3;


 bag = createSprite(700,350);
 bag.addImage("bag",bagimg);
 bag.scale =0.3;

 car = createSprite(400,630);
 car.addImage("car",carimg);
 car.scale =0.5;

 bair = createSprite(500,480);
 bair.addImage("bair",taddyimg);
 bair.scale = 0.3;

 gb = createSprite(700,480);
 gb.addImage("gb",garbageimg);
 gb.scale = 0.3;

 gb2 = createSprite(350,550);
 gb2.addImage("gb2",garbageimg);
 gb2.scale = 0.3;

 gb3 = createSprite(850,650);
 gb3.addImage("gb3",garbageimg);
 gb3.scale = 0.3;

 gb4 = createSprite(100,630);
 gb4.addImage("gb4",garbageimg);
 gb4.scale = 0.4;
}


function draw() {
 background(room)

 drawSprites()
}