var database;
var game, form, player;
var playerCount = 0;
var gameState = 0;

function setup(){
    createCanvas(500,500);
    //name spaces the firebase database
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
   
    }



