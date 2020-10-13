class Form {
    constructor(){
         this.input = createInput("name");
         this.button = createButton("Login");
         this.greeting = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h1");
        title.html("Car racing game");
        title.position(130,0);
        
        

        this.input.position(130,160);
        this.button.position(130,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
           
            this.greeting.html("Hello,"+player.name);
            this.greeting.position(170,200);
        });

    }
}
