function setup() {
  createCanvas(600, 400);
}

function draw() {
  colorMode(HSB)
  background(0,0,100);

  //ears
  noStroke();
  fill(30,20,100);
  ellipse(200,175,35,35);
  ellipse(202,190,22,22);
  ellipse(400,175,35,35);
  ellipse(398,190,22,22);
  fill(30,30,95);
  ellipse(200,175,19,19);
  ellipse(400,175,19,19);
  
  //neck
  quad(290,310,290,250,310,250,310,310);
  
  //face
  fill(30,20,100);
  ellipse(300,170,200,240);
  
  //hair
  fill(0,0,0);
  beginShape();
  curveVertex(410,1050);
  curveVertex(195,150);
  curveVertex(405,150);
  curveVertex(190,1050);
  endShape();
  
  fill(0,0,70);
  triangle(195,150,210,150,201,190);
  triangle(405,150,390,150,399,190);
  
  //nose
  fill(30,30,95);
  quad(286,215,292,180,308,180,314,215);
  ellipse(290,217,10,10);
  ellipse(300,217,12,12);
  ellipse(310,217,10,10);
  
  //glass
  noFill();
  stroke(50,100,90);
  strokeWeight(4);
  ellipse(255,185,60,60);
  ellipse(345,185,60,60);
  line(285,175,315,175);
  line(225,175,190,160);
  line(375,175,410,160);
  
  //eyes
  stroke(0,0,0);
  curve(220,220,240,175,270,175,290,220);
  curve(380,220,360,175,330,175,310,220);
  fill(0,0,0);
  ellipse(255,177,10,10);
  ellipse(345,177,10,10);
  
  //mouth
  noFill();
  strokeWeight(8);
  stroke(0,40,90);
  beginShape();
  curveVertex(200,170);
  curveVertex(270,240);
  curveVertex(330,240);
  curveVertex(400,170);
  endShape();
  
  //body
  noStroke();
  fill(200,40,95);
  quad(275,300,325,300,325,340,275,340);
  stroke(200,40,95);
  line(276,304,250,330);
  line(324,304,350,330);
  noStroke();
  fill(30,20,100);
  ellipse(250,330,20,20);
  ellipse(350,330,20,20);
  
  
}