img ="";

function preload(){
    img=loadImage('football.webp');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("blue");
    text("Football", 50, 70);
    noFill();
    stroke("red");
rect(30,60,450,350);
}

function button_home(){
    window.location=("index.html");
}




