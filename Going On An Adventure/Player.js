    class Player{

    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);
        this.height=20;
        this.width=20;
        this.image=loadImage("MainCharacter.jpg")
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);



    }
}