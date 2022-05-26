var alvo, alvoImg;


function preload(){
    alvoImg = loadImage("imagens/alvo.png");

}

function setup(){
    createCanvas(1200, 600);
    
}

function draw(){
    background("#12CBC4");
    criarAlvos();
    drawSprites();
}

function criarAlvos(){
    if(frameCount % 60 === 0){
        alvo = createSprite(1200, 300, 50,50);
        alvo.addImage("alvo", alvoImg);
        alvo.scale = 0.07;
        //alvo.x -= 3;
        alvo.velocityX = -3;
        //console.log(frameCount);
        alvo.debug = true;
        console.log(alvo.velocityX);
    }
}