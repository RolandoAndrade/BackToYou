const HEAD_RADIUS = 12;
const EMP = 5;
const SPEED = 10;
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
        let a = this;
        document.addEventListener("keydown",(e)=>
        {
            switch (e.keyCode)
            {
                case 39:
                    a.vx = SPEED; break;
                case 37:
                    a.vx = -SPEED; break;
                case 38:
                    a.vy = -5; break;
            }
            a.move();

        });
        document.addEventListener("keyup",()=>  {a.vx = 0;a.move()})
    }


    move()
    {
        this.x += this.vx;
        this.y += this.vy;
        this.head.setPosition(this.x, this.y);
        let emp = EMP*Math.sign(this.vx);
        this.body.setPosition(this.x-HEAD_RADIUS-emp,this.y+HEAD_RADIUS+2);
        this.body.emp = emp;
    }

    draw()
    {
        this.head.draw();
        this.body.draw();
    }
}