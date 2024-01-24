console.log('Hello World!');

var a =3;
let b= 2;
const c = 1;

function sum(num1, num2){
    console.log(num1 + num2);
}

s = function (n1, n2){return n2-n1};
//console.log(s(c, a));

f = (name)=>{console.log(name+"!")};
//f("elian");

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
/*console.log(canvas);
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.fillStyle = 'rgba(0, 233, 0, 0.5)';
ctx.fillRect(200, 200, 100, 100);


for(let i=0; i< 100; i++){
    ctx.beginPath();
    ctx.arc(Math.random()*i*12, Math.random()*i*10, 30, 0, Math.PI*2, false);
    ctx.strokeStyle = 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+', 1)';
    ctx.stroke();
}*/



function Circle(){
    this.x = Math.random()*(innerWidth-31)+31;
    this.dx = Math.random()*9+1;
    this.y = Math.random()*(innerHeight-31)+31;
    this.dy = Math.random()*9+1;
    this.draw = () => {
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.arc(this.x, this.y, 30, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.fill();
        if (this.x>innerWidth-30 || this.x<30){
            this.dx = -this.dx;
        }
        if (this.y>innerHeight-30 || this.y<30){
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
    }
}

let circles = [];
for(let i=0; i< 100; i++){
    circles.push(new Circle());
}
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circles.map((circle)=>{circle.draw()});
}

animate();