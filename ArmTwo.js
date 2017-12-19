class ArmTwo {
    constructor(x,y,rtate){
        this.x = x;
        this.y = y;
        this.rotation = rtate;
    }
    show(){
        // works with pop Look @ Arm.js for more comments
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        strokeWeight(4);
        stroke(118,92,72);
        line(0, 0, 0+38,0);
        strokeWeight(3);
        line(0+15 ,0, 0+25, 0-10 );
        line(0+15 ,0, 0+25, 0+10 );
        strokeWeight(1);
        // kepps everything in function
        pop();
    }
}