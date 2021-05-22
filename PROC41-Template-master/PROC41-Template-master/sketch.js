const Engine=Matter.Engine;
const World=Matter.World;
var thunder
var thunderFrameCount=0
const Bodies=Matter.Bodies
var drops=[]

function preload(){
 t1=loadImage("thunderbolt/1.png")   
 t2=loadImage("thunderbolt/2.png")
 t3=loadImage("thunderbolt/3.png")
 t4=loadImage("thunderbolt/4.png")
}

function setup(){
    engine=Engine.create()
    world=engine.world
    createCanvas(400,600) 
    umbrella=new Umbrella(200,500)
        if(frameCount%150===0){
        for(var i=0;i<100;i++){
         drops.push(new Drops(random(0,400),random(0,600)))
         }
    }


  
    
}

function draw(){
    Engine.update(engine)
    background("black")
    umbrella.display()
    for(var i=0;i<100;i++){
        drops[i].display()
        drops[i].update()
    }
     
    rand=Math.round(random(1,4))
    if(frameCount%50===0){
        thunderFrameCount=frameCount
        thunder=createSprite(random(10,350),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(t1);
            break;
            case 2:thunder.addImage(t2);
            break;
            case 3:thunder.addImage(t3);
            break;
            case 4:thunder.addImage(t4);
            break;
            default:break;
        }

        thunder.scale=random(0.3,0.6)
        
    }
    if(thunderFrameCount+10===frameCount&&thunder){
        thunder.destroy()
    }
    
    drawSprites()
}   

