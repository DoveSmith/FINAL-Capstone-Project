// Get the container 
const container = document.getElementById('container');

// Set container styles
  // Adjusted height for better alignment
container.style.position = 'relative';

// Create an array to hold the circle elements
const numberOfCircles = 11; // Number of circles in the array
const circleDiameter = 25.5;   // Diameter of each circle

// Loop to create the circles
for (let i = 0; i < numberOfCircles; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  container.appendChild(circle);

  // Set the circle's initial styles
  circle.style.width = `${circleDiameter}px`;
  circle.style.height = `${circleDiameter}px`;
  circle.style.backgroundColor = 'red';
  circle.style.borderRadius = '50%';
  circle.style.position = 'absolute';
  circle.style.cursor = 'pointer';

  // Set straight horizontal line circle position
  circle.style.left = `${i * (circleDiameter + 23)}px`;  // .5px space between circles
  circle.style.top = `${(container.offsetHeight - circleDiameter) / 5}px`;  // Vertically center the circles

  // Event for dragging circles
  circle.addEventListener('mousedown', startDrag);
}

let offsetX, offsetY, isDragging = false, draggedCircle;

// Function to start dragging
function startDrag(event) {
  isDragging = true;
  draggedCircle = event.target; // The circle being dragged
  offsetX = event.clientX - draggedCircle.offsetLeft;
  offsetY = event.clientY - draggedCircle.offsetTop;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
}

// Function to drag the circle
function drag(event) {
  if (isDragging) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    draggedCircle.style.left = `${x}px`;
    draggedCircle.style.top = `${y}px`;
  }
}

// Function to stop dragging
function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}

///Code For Blue Team Player Icons

const container2 = document.getElementById('container2');

// Set container styles
container2.style.position = 'relative';

// Create an array to hold the circle elements
const numCircles = 11; // Number of circles in the array
const circleSize = 25.5;   // Diameter of each circle

// Loop to create the circles
for (let j = 0; j < numCircles; j++) {
  const newCircle = document.createElement('div');
  newCircle.classList.add('circle');
  container2.appendChild(newCircle);

  // Set the circle's initial styles
  newCircle.style.width = `${circleSize}px`;
  newCircle.style.height = `${circleSize}px`;
  newCircle.style.backgroundColor = 'blue';
  newCircle.style.borderRadius = '50%';
  newCircle.style.position = 'absolute';
  newCircle.style.cursor = 'pointer';

  // Set each circle's position in a straight horizontal line
  newCircle.style.left = `${j * (circleSize + 23)}px`;  // .5px space between circles
  newCircle.style.top = `${(container2.offsetHeight - circleSize) / 5}px`;  // Vertically center the circles
  
  // Add event listener for dragging the circle
  newCircle.addEventListener('mousedown', initiateDrag);
}

let offsetX2, offsetY2, isDragging2 = false, movingCircle;

// Function to start dragging
function initiateDrag(event) {
  isDragging2 = true;
  movingCircle = event.target; // The circle being dragged
  offsetX2 = event.clientX - movingCircle.offsetLeft;
  offsetY2 = event.clientY - movingCircle.offsetTop;

  document.addEventListener('mousemove', moveCircle);
  document.addEventListener('mouseup', endDrag);
}

// Function to drag the circle
function moveCircle(event) {
  if (isDragging2) {
    const newX = event.clientX - offsetX2;
    const newY = event.clientY - offsetY2;
    movingCircle.style.left = `${newX}px`;
    movingCircle.style.top = `${newY}px`;
  }
}

// Function to stop dragging
function endDrag() {
  isDragging2 = false;
  document.removeEventListener('mousemove', moveCircle);
  document.removeEventListener('mouseup', endDrag);
}

//Code for Field Ball

const container3 = document.getElementById('container3');

// Set container styles
container3.style.position = 'relative';
container3.style.display = 'flex';
container3.style.justifyContent = 'center';
container3.style.alignItems = 'center';
container3.style.overflow = 'hidden';

// Create a singular circle element
const singleCircle = document.createElement('div');
singleCircle.classList.add('circle');
container3.appendChild(singleCircle);

// Set the circle's initial styles
const circleSize3 = 15;
singleCircle.style.width = `${circleSize3}px`;
singleCircle.style.height = `${circleSize3}px`;
singleCircle.style.backgroundColor = 'black';
singleCircle.style.borderRadius = '50%';
singleCircle.style.position = 'absolute';
singleCircle.style.cursor = 'pointer';

// Center the circle in the container
document.addEventListener('DOMContentLoaded', () => {
  singleCircle.style.left = `${(container3.clientWidth - circleSize3) / 2}px`;
  singleCircle.style.top = `${(container3.clientHeight - circleSize3) / 2}px`;
});

// Add event listener for dragging the circle
singleCircle.addEventListener('mousedown', initiateDrag3);

let offsetX3, offsetY3, isDragging3 = false, movingCircle3;

// Function to start dragging
function initiateDrag3(event) {
  isDragging3 = true;
  movingCircle3 = event.target; // The circle being dragged
  offsetX3 = event.clientX - movingCircle3.offsetLeft;
  offsetY3 = event.clientY - movingCircle3.offsetTop;

  document.addEventListener('mousemove', moveCircle3);
  document.addEventListener('mouseup', endDrag3);
}

// Function to drag the circle
function moveCircle3(event) {
  if (isDragging3) {
    const newX3 = event.clientX - offsetX3;
    const newY3 = event.clientY - offsetY3;
    movingCircle3.style.left = `${Math.max(0, Math.min(container3.clientWidth - circleSize3, newX3))}px`;
    movingCircle3.style.top = `${Math.max(0, Math.min(container3.clientHeight - circleSize3, newY3))}px`;
  }
}

// Function to stop dragging
function endDrag3() {
  isDragging3 = false;
  document.removeEventListener('mousemove', moveCircle3);
  document.removeEventListener('mouseup', endDrag3);
}
//FUNCTION FOR DRAWING
  const canvas = document.getElementById("drawingCanvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
        const ctx = canvas.getContext("2d");
        const toggleButton = document.getElementById("toggleDrawing");
        const undoButton = document.getElementById("undo");
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";


        let isDrawing = false;
        let drawingEnabled = false;
        let history = [];

        // Toggle drawing mode on/off
        toggleButton.addEventListener("click", () => {
            drawingEnabled = !drawingEnabled;
            toggleButton.textContent = drawingEnabled ? "Disable Drawing" : "Enable Drawing";
        });

        canvas.addEventListener("mousedown", (event) => {
            if (!drawingEnabled) return;
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offsetY);
            event.preventDefault();

            // Save canvas state before drawing
            history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        });

        canvas.addEventListener("mousemove", (event) => {
            if (isDrawing) {
                ctx.lineTo(event.offsetX, event.offsetY);
                ctx.stroke();
            }
        });

        canvas.addEventListener("mouseup", () => {
            isDrawing = false;
        });

        canvas.addEventListener("mouseleave", () => {
            isDrawing = false;
        });

        undoButton.addEventListener("click", () => {
            if (history.length > 0) {
                ctx.putImageData(history.pop(), 0, 0);
            }
        });
//CODE FOR SCREENCAPTURE BUTTON

document.getElementById("screenshotBtn").addEventListener("click", () => {
    html2canvas(document.body).then(canvas => {
        let image = canvas.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = image;
        link.download = "screenshot.png";
        link.click();
    });
});



