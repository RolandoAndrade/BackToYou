let canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
const WIDTH = 700, HEIGHT = 400;


let t = 0;

let q =0;

let ex = false;

let h1 = new Heart(350,270,"#fff",2);

let text = new MText("Al principio todo era oscuridad");

class Level
{
    constructor(game)
    {
        this.start = false;
        this.end = false;
        this.game = game;
    }

    play()
    {
        if(this.start&&!this.end)
        {
            this.end = this.game();
        }
        return this.end;
    }
}

function loop()
{
    new Rect(0,0,700,400,"#222").draw();

    text.show();
    new MText("BACK", WIDTH/2, 150, 80).draw();
    new MText("TO", WIDTH/2, 230, 70).draw();
    new MText("Y    U", WIDTH/2, 300, 50).draw();
    t=(t+0.1)%Math.PI;
    h1.beat();
    if(ex)
    {
        if(h1.size>=0)
        {
            h1.resize(h1.size-0.2);
        }
        else
        {
            new Rect(0,0,700,400,"#fff").draw();
        }
    }




    //p.draw();
}

document.addEventListener("keydown",()=>
{
    ex = true;
})

window.setInterval(loop, 30);