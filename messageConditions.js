function messageConditions(){
    if(countDwn < 1 && countDwn > -3){
        fill(33);
        textSize(24);
        text("Have a ball", 125, 150);
        text("This Holiday Season!",74,175);
    }
    if(countDwn <= -8){
        fill(33)
        text("I'm glad you are enjoying my game.", 70, 150);
        text("Please share with your friends.",70,175);
    }
}