class Form {
    constructor(){
         this.input = createInput("name");
         this.button = createButton("Login");
         this.reset = createButton("Reset");
         this.greeting = createElement("h2");
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.reset.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h1");
        title.html("Car racing game");
        title.position(windowWidth/2-40,0);
        
        

        this.input.position(windowWidth/2-40,windowHeight/2+60);
        this.button.position(windowWidth/2-40,windowHeight/2+90);
        this.reset.position(windowWidth/2+20,windowHeight/2+90);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.reset.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
           
            this.greeting.html("Hello,"+player.name);
            this.greeting.position(windowWidth/2-40,windowHeight/2+60);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.end(0);
        });
    }
}
