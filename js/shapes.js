class Heart
{
    constructor(x, y, color, size = 1)
    {
        this.x = x;
        this.y = y;
        this.size = Math.max(0.01, size);
        this.startSize = this.size;
        this.t = 0;
        this.color = color;
    }

    draw()
    {
        let x = this.x, y = this.y, s = this.size;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.bezierCurveTo(x,y-3/s,x-5/s,y-15/s,x-25/s,y-15/s);
        ctx.bezierCurveTo(x-55/s,y-15/s,x-55/s,y+22.5/s,x-55/s,y+22.5/s);
        ctx.bezierCurveTo(x-55/s,y+40/s,x-35/s,y+62/s,x,y+80/s);
        ctx.bezierCurveTo(x+35/s,y+62/s,x+55/s,y+40/s,x+55/s,y+22.5/s);
        ctx.bezierCurveTo(x+55/s,y+22.5/s,x+55/s,y-15/s,x+25/s,y-15/s);
        ctx.bezierCurveTo(x+10/s,y-15/s,x,y-3/s,x,y);
        ctx.fill();
    }

    beat()
    {
        this.t = (this.t + 0.1) % Math.PI;
        this.size = this.startSize +  Math.sin(this.t);
        this.draw();
    }
}


class Rect
{
    constructor(x, y, w, h, color)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

class DRect extends Rect
{
    constructor(x, y, w, h, color, emp)
    {
        super(x, y, w, h, color);
        this.emp = emp;
    }

    draw()
    {
        let ltx = this.x + this.emp, lty = this.y, rtx = this.x+this.w, rty = lty,
            lbx = this.x, lby = lty+this.h, rbx = lbx + this.w - this.emp, rby = lby;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        moveTo(ltx,lty);
        ctx.lineTo(rtx,rty);
        ctx.lineTo(rbx,rby);
        ctx.lineTo(lbx,lby);
        ctx.lineTo(ltx,lty);
        ctx.fill();
    }
}

class Circle
{
    constructor(x, y, r, color)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}