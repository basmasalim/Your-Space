const canvas = document.getElementById('canvas');
const section = document.querySelector('section');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var theColor = '';
var lineW = '';
let prevX = null; 
let prevY = null;
let draw = false;

section.style.backgroundColor = '#ffffff';
var theInput = document.getElementById('favcolor');

theInput.addEventListener('input', function () {
    theColor = theInput.value;
    section.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext('2d');
ctx.lineWidth = lineW;

document.getElementById('ageInputId').oninput = function () {
    draw = null;
    lineW = document.getElementById('ageInputId').value;
    document.getElementById('ageOutputId').innerHTML = lineW;
    ctx.lineWidth = lineW;
};

let clrs = document.querySelectorAll('.clr');
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    });
});

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png"); 
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});

window.addEventListener('mousedown', (e) => draw = true);
window.addEventListener('mouseup', (e) => draw = false);

window.addEventListener('mousemove', (e) => {
    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }
    let currentX = e.clientX;
    let currentY = e.clientY;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
});
function logoutUser() {
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  
    window.location.href = './index.html';
  }
  