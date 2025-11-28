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
  
  //과제3 - 마우스 인터랙션 : 마우스 포인터를 따라 움직이는 눈동자
  offSet = -4 + mouseX/600*8
  if(mouseX > 600){
    offSet = 4;
  }
  if(mouseX < 0){
    offSet = -4;
  }
  ellipse(255 + offSet,177,10,10); //오른쪽 눈동자
  ellipse(345 + offSet,177,10,10); //왼쪽 눈동자
  
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
  line(276,304,250,330); //왼팔
  armDX = 0;
  armDY = 0;
  handDX = 0;
  handDY = 0;
  
  //과제3 - 키보드 인터랙션 : g키를 누르고 있는 동안 오른손이 마우스 포인터를 향함
  if(keyIsPressed){
    if(key === 'g'){
      armDX = -26 + mouseX - 324;
      armDY = -26 + mouseY - 304;
      handDX = -350 + mouseX;
      handDY= -330 + mouseY;
      if(mouseX > 600){
        armDX = -26 + 600 - 324;
        handDX = -350 + 600;
      }
      if(mouseY > 400){
        armDY = -26 + 400 - 304;
        handDY = -330 + 400;
      }
    }
  }
  line(324,304,350 + armDX,330 + armDY); //오른팔
  noStroke();
  fill(30,20,100);
  ellipse(250,330,20,20);
  ellipse(350 + handDX,330 + handDY,20,20); //오른손
  
  //colorMode(RGB)
  //fill(255,255,0,120);
  //ellipse(mouseX, mouseY, 40, 40) //마우스 포인터 하이라이트(노란색)
}

function keyPressed() {
  if (key === 's') {
    saveGif('report3', 5);
  }

}


