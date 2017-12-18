

function setup() {
  mainCan = createCanvas(500, 500);
  // added id for css only
  mainCan.id("mainCan");
// image from www.publicdomainpictures.net/view-image.php?image=104832&picture=snowy-hills
  bgImage = loadImage("assets/snowy_hills.jpg",0,0);
  // set the frame rate so I can control
  frameRate(60);
  angleMode(DEGREES);
  // full description check out setupMen.js
  setupMen();
  // full description check out setupBalls.js
  setupBalls();
  // simple as it seems, swing = true thats it.
  // true triggers the armRotation function
  mainCan.mouseClicked(swingTrue);
}
function draw(){
  background(bgImage);
  // full details look @ setupMen.js
  showMen();
  // full details look @ setupBalls.js
  showBalls();
  // if countDwn = 0 give message!
  messageConditions();
  ballPosition();
}