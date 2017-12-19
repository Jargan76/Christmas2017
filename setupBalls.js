
function setupBalls(){
    let ballGap = 13
  // simple loop makes five balls eachs at men's base
    for(let i = 0; i < 6; i++){
       ballStack.push(new Snowball(Xcords,430));
       Xcords+=ballGap;
    }
    for(let a = 0; a < 6; a++){
       secondStack.push(new Snowball(secXCords,430));
       secXCords-=ballGap;
    }
}

function showBalls(){
    for(let j = ballStack.length-1;j > 0; j--){
        ballStack[j].ballin();
    }
    for(let b = ballStack.length-1;b > 0; b--){
        secondStack[b].ballin();
    }
   // flyingBall needs to be created in draw move
   // because flyX & flyY are changing
  flyingBall = new Snowball(flyX, flyY);
  flyingTwo = new Snowball(flyXR, flyYR);
  flyingBall.ballin();
  flyingTwo.ballin();
}