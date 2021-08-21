var bgwait, bgwaitimg;
var bglevel1,bglevel1img;
var bginfo,bginfoimg;
var gamestate="wait"


function preload(){
    bgwaitimg=loadImage("wait.gif");
}


function setup(){
createCanvas(windowWidth,windowHeight)
bgwait =createSprite(windowWidth/2,windowHeight/2)
    bgwait.addImage(bgwaitimg)
bgwait.scale=3.2
bgwait.visible=false



}

function draw(){
   background(0) 

if(gamestate==="wait"){
    bgwait.visible=true
}

    drawSprites();
}