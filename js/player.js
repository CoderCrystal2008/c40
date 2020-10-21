class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).update({
            name : this.name,
            distance: this.distance
        }
        )
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

    getPlayerRank(){
        var getPlayerRankRef = database.ref("CarsAtEnd");
        getPlayerRankRef.on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updatePlayerRank(rank){
        //accesses the root
        database.ref("/").update({
            CarsAtEnd: rank
        })
    }
}