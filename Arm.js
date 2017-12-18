class Arm {
    constructor(x,y,rtate){
        this.x = x;
        this.y = y;
        this.rotation = rtate;
    }
    show(){
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        strokeWeight(4);
        stroke(118,92,72);
        line(0, 0, 0+40,0);
        strokeWeight(3);
        line(0+19 ,0, 0+45, 0-10 );
        line(0+25 ,0, 0+40, 0+10 );
        strokeWeight(1);
        pop();
    }
}