var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var obstacle_group;
var sound
var cars, car1, car2, car3, car4, obstacle, gold, silver, bronze;
var track, car1_img, car2_img, car3_img, car4_img, obs_img, bro_img, sil_img, gold_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  obs_img = loadImage("images/f1.png");
  sil_img = loadImage("images/silver.png");
  bro_img = loadImage("images/bronze.png");
  gold_img = loadImage("images/gold.png");
  sound = loadSound("sound/sliding.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;

  obstacle_group = createGroup();

  game = new Game();
  game.getState();
  game.start();

  for(var i=0;i<7;i++){
    rand = random(200,950)
    rand2 = random(-height*4,height-300)
    obstacle = createSprite(rand,rand2,20,20);
    obstacle.addImage(obs_img);
    obstacle_group.add(obstacle)
  }
}


function draw(){
   //start the game
   background(200, 200, 255);
   
 
   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
  }
 
  
