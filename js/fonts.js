const DURATION = 80;

class MText
{
    constructor(text, x = WIDTH/2, y = HEIGHT-30, size = 15,  color = "rgba(255,255,255,1)", align = "center")
    {
        this.text = text;
        this.size = size;
        this.color = color;
        this.align = align;
        this.x = x;
        this.y = y;
        this.opacity = 0;
        this.read = 0;
        this.exec = true;
    }

    draw()
    {
        ctx.fillStyle = this.color;
        ctx.font = this.size+'px Arial, sans-serif';
        ctx.textAlign = this.align;
        ctx.fillText(this.text, this.x,this.y);
    }

    show()
    {
        if(this.exec)
        {
            if(this.read===0)
            {
                this.opacity+=0.05;
            }
            else if(this.read>DURATION)
            {
                this.opacity-=0.05;
                if(this.opacity<0)
                {
                    this.exec = false;
                }
            }
            if(this.opacity>=1)
            {
                this.read++;
            }
            this.color = this.color.substring(0,16)+","+this.opacity+")";
            this.draw();
        }

    }
}