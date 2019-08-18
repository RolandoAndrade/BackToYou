let canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");


let h1 = new Heart(300,300,"#ff78c3",4);

let h2 = new Heart(350,300,"#ff3665",4);

let h3 = new Heart(400,300,"#ff234a",4);

new Player(50,50).draw();

/*function loop()
{
    new Rect(0,0,600,400,"#fff").draw();
    h1.beat();
    h2.beat();
    h3.beat();
}

window.setInterval(loop, 30);*/