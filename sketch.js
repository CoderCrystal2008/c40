var database;
var game, form, player;
var playerCount = 0;
var gameState = 0;
var allPlayers 
var distance = 0;

//creates the cars
var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(windowWidth,windowHeight);
    //name spaces the firebase database
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
   if(playerCount === 4){
       game.update(1);
   }
   if(gameState === 1){
       clear();
       game.play();
   }

    
    }



