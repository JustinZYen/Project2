function func() {
    alert("Hello!");
}

function position(event) {
    alert(event.clientX);
}

const movement = (event) => {
    //ctx.fillRect(event.clientX, event.clientY, 100, 100);
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();
}

const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);
ctx.beginPath();
ctx.moveTo(0,0);
canvas.addEventListener('click', movement, false);