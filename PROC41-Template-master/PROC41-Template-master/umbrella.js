class Umbrella {
 constructor(x,y){
     var options={
         restitution:0.1,
         friction:0.005,
         isStatic:true
     }
     this.image=loadImage("Walking Frame/walking_1.png")
this.body=Bodies.circle(x,y,10,options)
World.add(world,this.body)


 }
  
display(){
    imageMode(CENTER)
    
}
}