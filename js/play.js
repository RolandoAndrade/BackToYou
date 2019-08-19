const RADIUS = 50;

class PlayerHeart extends Heart
{
    constructor(x,y, color)
    {
        super(x, y, color, 4);
        this.trail =[];
    }

    beat()
    {
        super.beat();
        if(this.trail.length>0&&this.trail[0].transparency>1)
            this.trail.shift();
        this.trail.forEach(e=>
        {
            e.transparency+=0.25;
            e.heart.color=this.color.substring(0,16)+","+(1-e.transparency)+")";
        });
        this.trail.forEach(e=>e.heart.draw());
    }

    move(x,y)
    {
        this.trail.push({transparency: 0, heart: new Heart(this.x,this.y, this.color, this.size)});
        this.x = x;
        this.y = y;
    }
}


class Player
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.t = 0;
        this.radius = 50;
        this.heartOne = new PlayerHeart(100,200,"rgba(255,120,195,1)");
        this.heartTwo = new PlayerHeart(200,200,"rgba(255,054,101,1)");
        this.got = RADIUS;
        let a = this;
        document.addEventListener("keydown",(e)=>{
            switch (e.keyCode)
            {
                case 37:
                    a.t-=0.1;
                    break;
                case 39:
                    a.t+=0.1;
                    break;
                case 38:
                    a.got=100;
                    break;
                case 40:
                    a.got=10;
                    break;
            }
        })
    }

    move()
    {
        let x = this.x, y = this.y, r = this.radius, t = this.t;
        this.heartOne.move(x-r*Math.cos(t), y + r*Math.sin(t));
        this.heartTwo.move(x+r*Math.cos(t), y - r*Math.sin(t));
        this.radius+=(this.got-r)*0.5;
        if(Math.abs(this.got-r)<5) this.got=RADIUS;
    }

    draw()
    {
        this.move();
        this.heartOne.beat();
        this.heartTwo.beat();
    }
}