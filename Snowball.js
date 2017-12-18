class Snowball {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 20;
    }
    ballin() {
        // outline
        stroke(90, 105, 172);
        fill(246, 247, 254);
        ellipse(this.x, this.y, this.size);
        // accent
        noStroke();
        fill(162, 172, 221);
        ellipse(this.x+2, this.y+2, this.size-10);
        fill(246, 247, 254);
        ellipse(this.x-2, this.y-2, this.size-6);
    }
}