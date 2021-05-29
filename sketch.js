var backgroundImg,bombImg,bomb


function preload() {
    backgroundImg = loadImage("background.png");

    bombImg=loadAnimation("2.png","1.png");

    asteroid_Img=loadAnimation("download1.png","download2.png","download3.png",
    "download4.png","download5.png","download6.png","download7.png","download8.png","download9.png")

    sword_Img=loadAnimation("11.png","12.png")
    
    meat_Img=loadImage("meat.gif");

    cloud_Img=loadImage("cloud.gif");

    pixel_Image=loadAnimation("pixel1.png","pixel2.png");

}

function setup(){
    var canvas = createCanvas(1200,400); 

    //asteroid=createSprite( 200,100,10,10)
    //asteroid.addAnimation("asteroid",asteroid_Img)

    ground=createSprite(600,365,1200,20);
    ground.visible=false;

    Pixel=createSprite (100,310,10,10)
    Pixel.addAnimation("pixel",pixel_Image)

}

function draw(){
    background(backgroundImg);

    if(keyDown(UP_ARROW) && Pixel.y>=50 ){
        Pixel.velocityY=-4;
    }

    Pixel.velocityY=Pixel.velocityY+1;

    spawnClouds();
    spawnObstacles();

    Pixel.collide(ground);
    drawSprites()
}


function spawnClouds(){
    if(frameCount%60===0){
        var cloud=createSprite(1200,100,10,10)
        cloud.addImage(cloud_Img);
        cloud.velocityX=-3;
        cloud. scale=2;
        cloud.y=Math.round(random(10,150));
    }
}

function spawnObstacles(){
    if(frameCount%60===0){
        var obstacle=createSprite(1200,320,10,10)
        obstacle.velocityX=-3;
        rand=Math.round(random(1,3))
        switch(rand){
            case 1: obstacle.addAnimation("bomb",bombImg)
            break;
            case 2: obstacle.addAnimation("sword",sword_Img)
            break;
            case 3: obstacle.addImage(meat_Img)
            obstacle.scale=1.5;
            break;
            default:break;
        }
    }
}






