function setup (){
    var canvas = createCanvas(400,400);
var ball = createSprite(200,200,10,10);
}

function draw(){
    background("red");
    ball.x = mouseX ;
    ball.y = mouseY ;
if (ball.x > 200){
    background("pink");
    
}
}
