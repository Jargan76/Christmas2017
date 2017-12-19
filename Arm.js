class Arm {
    constructor(x,y,rtate){
        this.x = x;
        this.y = y;
        this.rotation = rtate;
    }
    show(){
        // think of push and pop as a wrapper
        push();
        // set the origin for rotate
        translate(this.x, this.y);
        // how far is it rotating
        rotate(this.rotation);
        // Main branch
        strokeWeight(4);
        stroke(118,92,72);
        line(0, 0, 0+40,0);
        strokeWeight(3);
        // two smaller side branches
        line(0+19 ,0, 0+45, 0-10 );
        line(0+25 ,0, 0+40, 0+10 );
        strokeWeight(1);
        // Keeps the translate changes local
        pop();
    }
}