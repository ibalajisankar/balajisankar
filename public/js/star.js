var canvas;
var context;
var screenWidth;
var screenHeight;
var doublePI = Math.PI * 2;
var step = 0.2;
var points = [];
var focalLength = 500;
var bgGradient;
var img = document.getElementById('background');
window.onload = function()
{
	canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    window.onresize = function()
	{
		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;

		canvas.width = img.width;
		canvas.height = img.height;

		bgGradient=context.createRadialGradient((screenWidth >> 1), screenHeight >> 1, screenWidth, screenWidth >> 1, screenHeight >> 1, 0);
		bgGradient.addColorStop(1, '#000');
		bgGradient.addColorStop(0.2, '#000');
	};

	generatePoints();

	window.onresize();

    loop();
};

function generatePoints()
{
	var i = 200;

	for(i; i > -1; --i)
	{
		var point3D = {x:(1 - Math.random() * 2) * 700, y:(1 - Math.random() * 2) * 600, z:(1 - Math.random() * 2) * 600, vx:0, vy:0, vz:0};

		points.push(point3D);
	}
}

window.getAnimationFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback)
{
	window.setTimeout(callback, 1000);
};

function loop()
{
	
	context.drawImage(img,0,0,img.width,img.height);
	context.globalAlpha = 0.4;
	context.fillStyle = 'black';
	$("#landing-hero").css('height',img.height)	
	context.fillRect(0, 0, img.width, img.height);
	context.globalAlpha = 1;

	updatePoints();
	renderPoints();
	renderWire();

	step =1.5;

	getAnimationFrame(loop);
}

function renderPoints()
{
	var i = points.length - 1;

	for(i; i > -1; --i)
	{
		var point = points[i];
		var scale = focalLength / (point.z + focalLength);

		var px = (point.x * scale + (screenWidth >> 1));
		var py = point.y * scale + (screenHeight >> 1);

		drawPoint({x: px, y: py}, scale);
	}
}

function renderWire()
{
	context.globalAlpha = .02;
	context.lineWidth = 1;
	context.strokeStyle = '#FFF';
	context.beginPath();

	var i = points.length - 1;

	for(i; i > -1; --i)
	{
		var point = points[i];
		var scale = focalLength / (point.z + focalLength);

		if(i === points.length - 1) context.moveTo(point.x * scale + (screenWidth >> 1), point.y * scale + (screenHeight >> 1));
		else context.lineTo(point.x * scale + (screenWidth >> 1), point.y * scale + (screenHeight >> 1));
	}

	if(Math.random() > 0.4) context.stroke();
	context.closePath();
	context.globalAlpha = 1;
}

function updatePoints()
{
	var i = points.length - 1;

	for(i; i > -1; --i)
	{
		var point = points[i];
		point.x += Math.cos(step * 1.4) * 2;
		point.y += Math.sin(step * 1.8) * 2;
		point.z -= 2;

		checkBounds(point);
	}
}

function checkBounds(point)
{
	if(point.x < -1000) point.x = Math.random() * 1000;
	else if(point.x > 1000) point.x = Math.random() * -1000;

	if(point.y < -1000) point.y = Math.random() * 1000;
	else if(point.y > 1000) point.y = Math.random() * -1000;

	if(point.z < -500) point.z = Math.random() * 2400 + 200;
}

function drawPoint(point, scale)
{
	context.globalAlpha = scale;
	context.fillStyle = '#0cdbf3';
	context.beginPath();
	context.rect(point.x, point.y, (1.6 * scale > 0) ? 1.6 * scale : 1, (1.6 * scale > 0) ? 1.6 * scale : 1);
	context.fill();
	context.closePath();
	context.globalAlpha = 1;
}


var self = window.self;

(function(self) {


	var points = [], numPoints = 20, i, canvas, context, width, height, bounce = -0.9, particleSize = [];
    
    canvas = document.getElementById("latest-canvas");
    width = self.innerWidth;
    height = self.innerHeight;
    context = canvas.getContext("2d");
    
    context.canvas.width = width;
    context.canvas.height = height;
  
    self.addEventListener('resize', function() {
	    width = self.innerWidth; 
	    height = self.innerHeight;
	    context.canvas.width = width;
	    context.canvas.height = height;
    });

    for(i = 0; i < numPoints; i += 1) {
      points.push({
      	x:Math.random() * width,
        y:Math.random() * height,
        vx:Math.random() * 0.5 - 0.25,
        vy:Math.random() * 0.5 - 0.25
      });
      particleSize.push( Math.random() * 10 + 5 );
    }
  
  function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.strokeStyle="rgba(255, 255, 255, 0.5)";
    context.stroke();
    context.closePath();
  }
  
    
  function update() {
      var i, point;

      for(i = 0; i < numPoints; i += 1) {

          point = points[i];
          point.x += point.vx;
          point.y += point.vy;

          if( point.x >= width ) {
              point.x = width;
              point.vx *= bounce;
          }
          else if(point.x <= 0) {
              point.x = 0;
              point.vx *= bounce;
          }
          if(point.y > height) {
              point.y = height;
              point.vy *= bounce;
          }
          else if(point.y < 0) {
              point.y = 0;
              point.vy *= bounce;
          }
      }

    draw();

  }

  function draw() {
      context.clearRect(0, 0, width, height);
      var i, point, sides = 6, a = ((Math.PI * 2)/sides);
      for(i = 0; i < numPoints; i += 1) {
          point = points[i];
          var size = particleSize[i];
          drawCircle(point.x, point.y, size);
      }
  }

  function render () {
    update();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

})(self);