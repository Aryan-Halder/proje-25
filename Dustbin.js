class bin{
    constructor(x,y,width,height){
        var options_bin = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options_bin)
        this.width = width
        this.height=height
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.body)
        
    }
    display(){
     var pos = this.body.position
     fill("white")
        rect(pos.x,pos.y,this.width,this.height)
        push()
      imageMode(CENTER)
      fill(255)
      image(this.image, pos.x, 570, 200, 200)
      pop()
        
    }
}