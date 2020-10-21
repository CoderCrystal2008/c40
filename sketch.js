var database;
var game, form, player;
var playerCount = 0;
var gameState = 0;
var allPlayers 
var distance = 0;

//creates the cars
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img
var groundimg, trackimg
function preload(){
    groundimg = loadImage("images/ground.png");
    trackimg = loadImage("images/track.jpg");
    car1img = loadAnimation("images/car1.png");
    car2img = loadAnimation("images/car2.png");
    car3img = loadAnimation("images/car3.png");
    car4img = loadAnimation("images/car4.png");
    
    
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //name spaces the firebase database
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    //makes the leader board
    

    
}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }

   if(gameState === 2){
       game.end();
   }

    
    }



