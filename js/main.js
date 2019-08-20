let canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
const WIDTH = 700, HEIGHT = 400;


let t = 0;

let q =0;

let ex = false;

let h1 = new Heart(350,200,"#fff",2);

let text = new Text("Al principio todo era oscuridad");

function loop()
{
    new Rect(0,0,700,400,"#222").draw();
    h1.beat();
    /*
    new Circle(350,200,q*10+40 + 3 * Math.sin(t), "rgba(255,255,255,0.3)").draw();
    new Circle(350,200,q*10+35 + 3 * Math.sin(t), "rgba(255,255,255,0.4)").draw();
    new Circle(350,200,q*10+30 + 3 * Math.sin(t), "rgba(255,255,255,0.5)").draw();
    new Circle(350,200,q*10+25 + 3 * Math.sin(t), "rgba(255,255,255,0.6)").draw();
    new Circle(350,200,q*10+20 + 3 * Math.sin(t), "rgba(255,255,255,0.7)").draw();
    new Circle(350,200,q*10+15 + 3 * Math.sin(t), "rgba(255,255,255,0.8)").draw();
    new Circle(350,200,q*10+10 + 3 * Math.sin(t), "rgba(255,255,255,0.9)").draw();
    new Circle(350,200,q*10+5, "rgba(255,255,255,1)").draw();*/
    text.show();
    t=(t+0.1)%Math.PI;
    if(ex)
        q++;

    //p.draw();
}

document.addEventListener("keydown",()=>
{
    ex = true;
})

window.setInterval(loop, 30);