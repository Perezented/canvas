let canvas = document.querySelector("canvas");

canvas.classList.add("absolute");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

c.fillStyle = "rgba(0,0,255,.5";
c.fillRect(400, 100, 100, 300);
c.fillStyle = "rgba(255,0,0,.5";
c.fillRect(900, 100, 100, 300);
c.fillStyle = "rgba(0,255,0,.5";
c.fillRect(500, 500, 400, 300);

console.log(canvas);

// Line
c.beginPath();
c.moveTo(50, 30);
c.lineTo(300, 100);
c.lineTo(400, 500);
c.lineTo(800, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

//  Arc / Circle
c.beginPath();
c.arc(750, 400, 30, 0, Math.PI * 2, false);
c.strokeStyle = "green";
c.stroke();

c.beginPath();
c.arc(650, 400, 30, 0, Math.PI * 2, false);
c.strokeStyle = "green";
c.stroke();
