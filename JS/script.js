function func() {
    alert("Hello!");
}

function position(event) {
    alert(event.clientX);
}

const movement = (event) => {
    //const canvas = document.getElementById("myCanvas");
    //const ctx = canvas.getContext("2d");
    ctx.fillRect(event.clientX, event.clientY, 100, 100);
}

const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
canvas.addEventListener('click', movement, false);