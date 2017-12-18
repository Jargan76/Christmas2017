class Hat {
    constructor(x,y,shade){
        this.x = x;
        this.y = y;
        this.fill = shade;
    }
    show(){
        fill(this.fill);
        ellipse(this.x, this.y, 40, 10);
        ellipse(this.x, this.y-20, 30, 7);
        rectMode(CENTER);
        rect(this.x, this.y-10, 30,20);
        fill(240);
        rect(this.x, this.y-4, 30,5);
    }
}