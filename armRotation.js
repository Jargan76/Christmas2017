
function rotateArms(){
  if(swing === true){
    if(mouseX < width/2){
      // Left side
      // degTwo is reset in case user switches side before full Rotation
      degTwo = -200;
      // increased by armspeed @ 60FPS
      degOne+=armSpeed;
      // if the arm rotates to or past this point
      if(degOne >= 740){
      // STOP rotation
        swing = false;
      // make sure that is in proper position
        degOne = 380;
      // tick one off the count down timmer
        countDwn--;
      }
    }else{
      // Right
      // Same as left Reset other arm
      degOne = 380;
      // Same as Left just the decrease this time
      degTwo-=armSpeed;
      // if the arm rotates to or past this point
      if(degTwo <= -560){
      // STOP rotation
        swing = false;
      // make sure that is in proper position
        degTwo = -200;
      // tick one off the count down timmer
        countDwn--;
      }
    }

  } // default swing === false
}
function swingTrue(){
  swing = true;
}