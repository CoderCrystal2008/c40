class Form {
    constructor(){

    }

    display(){
        var title = createElement("h1");
        title.html("Car racing game");
        title.position(130,0);
        
        var input = createInput("name");
        var button = createButton("Login");

        input.position(130,160);
        button.position(130,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("h2");
            greeting.html("Hello,"+name);
            greeting.position(170,200);
        });

    }
}
