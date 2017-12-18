class SnowmanLeft {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 71;
    }
    backArm(){
      // use stick
    }
    base() {
        let baseSize = this.size;
        // outline
        stroke(90, 105, 172);
        fill(246, 247, 254);
        ellipse(this.x, this.y, baseSize);
        // accent
        noStroke();
        fill(162, 172, 221);
        ellipse(this.x+2, this.y+2, baseSize-10);
        fill(246, 247, 254);
        ellipse(this.x-2, this.y-2, baseSize-6);
    }
    middle() {
        let midSize = this.size-15;
        let middleY = this.y-45;
        // outline
        stroke(90, 105, 172);
        fill(246, 247, 254);
        ellipse(this.x, middleY, midSize);
        // accent
        noStroke();
        fill(162, 172, 221);
        ellipse(this.x+2, middleY+2, midSize-10);
        fill(246, 247, 254);
        ellipse(this.x-2, middleY-2, midSize-6);
    }
    head() {
        let headSize = this.size-27;
        let headY = this.y-85;
        // outline
        stroke(90, 105, 172);
        fill(246, 247, 254);
        ellipse(this.x, headY, headSize);
        // accent
        noStroke();
        fill(162, 172, 221);
        ellipse(this.x+2, headY+2, headSize-10);
        fill(246, 247, 254);
        ellipse(this.x-2, headY-2, headSize-6);
    }
    buttons() {
        let startPointX = this.x +10;
        let startPointY = this.y + 18;
        fill(0);
        // bottom buttons --- flow bottom-up
        ellipse(startPointX, startPointY, 5);
        ellipse(startPointX+7, startPointY-10, 5);
        ellipse(startPointX+10, startPointY-20, 5);
        ellipse(startPointX+8, startPointY-30, 5);
        // middle buttons
        startPointX = this.x + 7;
        startPointY = this.y - 32;
        ellipse(startPointX, startPointY, 5);
        ellipse(startPointX+4, startPointY-8, 5);
        ellipse(startPointX+6, startPointY-16, 5);
        ellipse(startPointX+5, startPointY-24, 5);
    }
    eyes(){
        let eyeStartX = this.x+4;
        let eyesStartY = this.y-88
        fill(15);
        ellipse(eyeStartX, eyesStartY, 7);
        ellipse(eyeStartX+10, eyesStartY, 7);
    }
    show() {
        this.base();
        this.middle();
        this.head();
        this.buttons();
        this.eyes();
    }
}