var ball,database,position;

function setup(){
    createCanvas(500,500);
    //name spaces the firebase database
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    //refers to the database
    var ballPositionRef = database.ref("ball/position");
    //listend to the ref function
    ballPositionRef.on("value",readPos,showError);
    
}

function draw(){
    background("white");

    //gives the if condition is the position is not undefined
    if(position!== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
        drawSprites();
    }
}

//writes in the database
function writePosition(x,y){
    database.ref("ball/position").set({
        x: ball.x + x,
        y: ball.y + y 
    })
}

//shows an error
function showError(){
    console.log("An error has occured");
}

//reads the database
function readPos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
    
}
