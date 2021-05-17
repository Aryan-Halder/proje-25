class Paper{
    constructor(x,y,radius){
        var options_trash = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
     this.x = x
     this.y = y
     this.radius = radius  
     
     this.body = Bodies.circle(this.x,this.y,this.radius/2,options_trash)
     this.image = loadImage("paper1.png")
     
     World.add(world,this.body)
    
    }
 display(){
     var pos = this.body.position
     push()
     
     translate(pos.x,pos.y)
     rectMode(CENTER)
     strokeWeight(3)
     fill("white")
     ellipse(0,0,this.radius,this.radius)
     imageMode(CENTER)
     image( this.image, 0,-25 ,/*this.width*/125,/*this.height*/125)
     
     pop()
}
}