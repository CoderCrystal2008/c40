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
    }

    play(){
        form.hide();
        textSize(20);
        text("The Game has officially started!",120,100);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            console.log(allPlayers);
            var displayPosition = 200;
            for(var plr in allPlayers){
                if(plr === "player"+player.index){
                    fill("red");
                }else {
                    fill("black");
                }
                //displays it on the screen
                displayPosition+= 20
                textSize(10);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,200,displayPosition);
            }
        }
    }
}