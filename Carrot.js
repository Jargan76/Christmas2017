class Carrot {
    constructor(x,y,d){
        this.x = x;
        this.y = y;
        this.direction = d;
    }
    show(){
        let offset = 0;
        let cSize = 9;
        stroke(50,250);
        fill(235, 137, 33);
        if(this.direction === 1){
            for(let i = 0; i < 5; i++){
            ellipse(this.x-offset, this.y, cSize);
            offset+=3;
            cSize-=2;
            }
        }else if(this.direction === 0){
            for(let i = 0; i < 5; i++){
            ellipse(this.x+offset, this.y, cSize);
            offset+=3;
            cSize-=2;
            }
        }else{
            text("Carrot needs a direction.",250,250);
        }
    }
}