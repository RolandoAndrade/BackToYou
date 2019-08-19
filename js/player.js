const HEAD_RADIUS = 12;
const EMP = 5;
const SPEED = 8;
const JUMP_SPEED = 20;
const GRAVITY = 2;
const PLAYER_HEIGHT = 40;
class Player
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.box = {l: x-HEAD_RADIUS, t: y - HEAD_RADIUS, r: x+HEAD_RADIUS, b: y + PLAYER_HEIGHT + HEAD_RADIUS};
        this.isGrounded = false;
        this.head = new Circle(x,y,HEAD_RADIUS,"#ffa078");
        this.body = new DRect(x-HEAD_RADIUS,y+HEAD_RADIUS+2,2*HEAD_RADIUS,PLAYER_HEIGHT,"#ffa078", 0);
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
                    if(a.isGrounded)
                    {
                        a.vy = -JUMP_SPEED;
                        a.isGrounded = false;
                    }
                    break;
            }

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
        this.box = {l: this.x-HEAD_RADIUS, t: this.y - HEAD_RADIUS, r: this.x+HEAD_RADIUS, b: this.y + PLAYER_HEIGHT + HEAD_RADIUS};
        this.vy += this.isGrounded?0:GRAVITY;
    }

    draw()
    {
        this.head.draw();
        this.body.draw();
    }

    ground(platform)
    {
        this.isGrounded=true;
        this.y = platform.y - PLAYER_HEIGHT - HEAD_RADIUS ;
        this.vy=0;
        this.move();
    }
}

class Platform extends Rect
{
    constructor(x,y,w,h)
    {
        super(x,y , w, h, "#424242");
    }

    collision(player)
    {
        let r = this, b = player.box;
        return r.x<=b.r&&b.l<=r.x+r.w&&r.y<=b.b&&b.b<=r.y+r.h;
    }
}