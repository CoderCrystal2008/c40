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
        title.position(windowWidth/2-40,0);
        
        

        this.input.position(windowWidth/2-40,windowHeight/2+60);
        this.button.position(windowWidth/2-40,windowHeight/2+90);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
           
            this.greeting.html("Hello,"+player.name);
            this.greeting.position(windowWidth/2-40,windowHeight/2+60);
        });

    }
}
