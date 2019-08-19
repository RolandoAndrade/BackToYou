let canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");


let h1 = new Heart(300,300,"#ff78c3",4);

let h2 = new Heart(350,300,"#ff3665",4);

let h3 = new Heart(400,300,"#ff234a",4);

let p = new Player(50,250);

let pl = new Platform(50,300,100,20);

function loop()
{
    new Rect(0,0,600,400,"#fff").draw();
    /*h1.beat();
    h2.beat();
    h3.beat();*/
    p.move();
    p.draw();
    pl.draw();
    if(pl.collision(p))
    {
        p.ground(pl);
    }
    else
    {
        p.isGrounded=false;
    }
}

window.setInterval(loop, 30);