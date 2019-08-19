let canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");


let h1 = new Heart(100,200,"#ff78c3",4);

let h2 = new Heart(200,200,"#ff3665",4);

let h3 = new Heart(400,300,"#ff234a",4);

let p = new Player(150,200);

let t = 0;

function loop()
{
    new Rect(0,0,700,400,"#fff").draw();
    p.draw();
}

window.setInterval(loop, 30);