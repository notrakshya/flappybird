let canvasSize = [288, 512];
let gamerun = false;
let BACKGROUND, BASE, BOTTOM_PIPE, TOP_PIPE, BIRD, DIE, HIT, WING, SWOOSH;

function preload() {
    BACKGROUND = loadImage("media/flappybg.png");
    BASE = loadImage("media/flapbase.png");
    TOP_PIPE = loadImage("media/flappipe2.png");
    BOTTOM_PIPE = loadImage("media/flappipe1.png");
    BIRD = loadImage("media/flapbird.png");
    DIE = loadSound("media/die.mp3");
    HIT = loadSound("media/hit.mp3");
    WING = loadSound("media/wing.mp3");
    SWOOSH = loadSound("media/swoosh.mp3");
}

function setup() {
    canvasSize = [windowWidth, windowHeight];
    createCanvas(canvasSize[0], canvasSize[1]);
    BACKGROUND.resize(canvasSize[0], canvasSize[1]);
    BASE.resize(canvasSize[0], BASE.height);
    frameRate(25);
}

function play() {
    // Implement game logic here
}

function draw() {
    image(BACKGROUND, 0, 0);
    image(BASE, 0, canvasSize[1] - BASE.height);
    if (!gamerun) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill("darkpink");
        text("FLAPPY BIRD", canvasSize[0] / 2, canvasSize[1] / 3);
        text("CLICK TO START", canvasSize[0] / 2, canvasSize[1] * 5 / 6);
        if (mouseIsPressed) {
            gamerun = true;
        }
    } else {
        play();
    }
}
