// Draw square
var squareCanvas = document.getElementById('square');
var squareContext = squareCanvas.getContext('2d');
squareContext.fillStyle = 'black';
squareContext.fillRect(185, 185, 185, 185);

// Draw circle
var circleCanvas = document.getElementById('circle');
var circleContext = circleCanvas.getContext('2d');
circleContext.beginPath();
circleContext.arc(95,50,40,0,2*Math.PI);
circleContext.stroke();

// Draw line
var lineCanvas = document.getElementById('line');
var lineContext = lineCanvas.getContext('2d');
lineContext.moveTo(0, 0);
lineContext.lineTo(100, 200);
lineContext.stroke();

// Draw text
var drawTextCanvas = document.getElementById('draw-text');
var drawTextContext = drawTextCanvas.getContext('2d');
drawTextContext.font = '30px Arial';
drawTextContext.fillText('Hello World', 10, 50)

// Stroke text
var strokeTextCanvas = document.getElementById('stroke-text');
var strokeTextContext = strokeTextCanvas.getContext('2d');
strokeTextContext.font = '30px Arial';
strokeTextContext.strokeText('Hello World', 10, 50);