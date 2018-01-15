const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  console.log(e);
}

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvase.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvase.addEventListener("mouseout", () => {
  isDrawing = false;
});

