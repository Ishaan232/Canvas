canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(150,300,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(I)
{
    color=document.getElementById("color").value;
    mouseX=I.clientX-canvas.offsetLeft;
    mouseY=I.clientY-canvas.offsetTop;
    console.log(mouseX,mouseY);
    circle(mouseX,mouseY);
}
function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
ctx.stroke();
}