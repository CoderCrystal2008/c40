class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        cars = [car1,car2,car3,car4];

        car1.addAnimation("car1",car1img);
        car2.addAnimation("car2",car2img);
        car3.addAnimation("car3",car3img);
        car4.addAnimation("car4",car4img);
    }


    play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background(groundimg);
            image(trackimg,0,-windowHeight*4,windowWidth,windowHeight*5);
            var index = 0;
            var x = 150;
            var y = 0;
            for(var plr in allPlayers){
                index++;
                x+=200;
                //puts the distance of the players
                y=displayHeight - allPlayers[plr].distance;

                console.log(cars);
                console.log(index);
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    //cars[index-1].shapeColor = "red";
                    camera.position.x = windowWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index !== undefined){
            player.distance += 50;
            player.update();
        }
        drawSprites();
        if(player.distance>= windowHeight*5){
            gameState = 2;
        }
        

    }

    

    end(){
        console.log("game ended");
    }
}