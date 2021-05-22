class Drops {
 constructor(x,y){
     var options={
         restitution:0.1,
         friction:0.005
     }
this.body=Bodies.circle(x,y,10,options)
World.add(world,this.body)


 }

 update(){
if(this.body.position.y>600){
Matter.Body.setPosition(this.body,{x:random (0,400),y:random(0,600)})
}
 }
display(){
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,10,10)
}
}