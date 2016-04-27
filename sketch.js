
var startAngle = 0;
var angleVel = 0.4;

function setup() {
 createCanvas(640, 360);
}

function draw(){
	background(255);

	var angle = startAngle;
beginShape()
	for(var x=0; x<=width; x+=24){
		var y = map(sin(angle), -1,1,0,height);
		stroke(0);
		fill(0,50);
		ellipse(x,y,34,34);
		angle += angleVel;
	}
	endShape();
}
