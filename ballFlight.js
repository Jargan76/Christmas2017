

function ballPosition(){
    // left snowman

    // once arm is in right spot
    if(degOne === 560){
        // move the ball in hand
        flyX = 75;
        flyY = 337;
        // tell the ball it can move now.
        startLeft = true;
    }
    // if it move how fast
    if(startLeft === true){
        flyX+=flySpeed;
    }
    // if it goes to far stop
    if(flyX > 389 ){
        startLeft = false;
    }
    if(startLeft === false){
        flyY++;
        if(flyY >= 430){
            flyY = 430;
        }
    }
    // Right snowman

    // arm at the right angle
    if(degTwo === -380){
        // put the ball in stick hand
        flyXR = 410;
        flyYR = 337;
    // let the snowball know when to go.
        startRight = true;
    }
    // tells the ball where to go
    if(startRight === true){
        flyXR-=flySpeed;
    }
    if(flyXR < 118){
        startRight = false;
    }
    if(startRight === false){
        flyYR++;
        if(flyYR >= 430 ){
            flyYR = 430;
        }
    }
}
