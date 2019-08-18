const HEAD_RADIUS = 12;

class Player
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.head = new Circle(x,y,HEAD_RADIUS,"#ffa078");
        this.body = new DRect(x-HEAD_RADIUS,y+HEAD_RADIUS+2,2*HEAD_RADIUS,40,"#ffa078", 0);
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
        this.head.setPosition(this.x, this.y);
        this.body.setPosition(this.x-HEAD_RADIUS-this.vx,this.y+HEAD_RADIUS+2);
        this.body.emp = this.vx;
    }

    draw()
    {
        this.head.draw();
        this.body.draw();
    }
}