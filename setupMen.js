

function setupMen(){
    // view Arm.js
    armBehindOne = new Arm(105,350, 45);
    //view ArmTwo.js
    armBehindTwo = new ArmTwo(388,350,200);
    // view SnowmanLeft.js
    manOne = new SnowmanLeft(100,400);
    //view SnowmanRight.js
    manTwo = new SnowmanRight(400, 400);
    // view carrot.js
    carrot = new Carrot(111,320,0);
    carrotTwo = new Carrot(390,320, 1);
    // view hat.js
    hatOne = new Hat(100,300,"#acc436");
    hatTwo = new Hat(400,300,"red");
}

function showMen(){
    // these need to be in draw for rotation
    armOne = new Arm(100,350, degOne);
    armTwo = new ArmTwo(400,350, degTwo);
    armBehindOne.show();
    armBehindTwo.show();
    manOne.show();
    carrot.show();
    hatOne.show();
    manTwo.show();
    carrotTwo.show();
    hatTwo.show();
    armOne.show();
    armTwo.show();
    // listen for swing to be true veiw @ armRotation.js
    rotateArms();
}