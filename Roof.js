class Roof {
    contructor(x,y,width,height){
        this.body = this.Bodies.rectangle(x,y,width,height,{isStatic:ture});
        this.width = this.width;
        this.height = thsi.height;
        World.add(world,this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.poistion.x,this.poistion.y,this.width,this.height);
        pop();
    }
}
