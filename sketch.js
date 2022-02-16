let a = 25;
let b = 35;
let c = 235;
let d = 240;
let e = 242;
let f = 243;
let g = 248;
let h = 253;
let i = 255;
let j = 258;
let k = 263;
let l = 264;
let m = 267;
let n = 268;
let a1 = 273;
let b1 = 278;
let c1 = 283;
let d1 = 288;
let e1 = 290; 
let f1 = 293;
let g1 = 298;
let h1 = 300;
let i1 = 301;
let j1 = 303;
let k1 = 304;

let w,x,y= 20;
r = 100;



function setup() {
  // put setup code here
  createCanvas(400,200);
}

function draw() {
  // put drawing code here
  background (102, 178, 255);

  
  //gunung
  strokeWeight()
  fill(0, 102, 0);
  ellipse(200, 150, 510, 190)

  //awan1
  var z1 = 53 + 0.5*Math.sin(radians(80)/30*r);
  var z2 = 65 + 0.5*Math.sin(radians(80)/30*r);
  var z3 = 78 + 0.5*Math.sin(radians(80)/30*r);
  r+=1
  strokeWeight(0)
  fill(255, 255, 255)
  ellipse(z1, 20, 20, 13)
  ellipse(z2, 20, 22, 20)
  ellipse(z3, 20, 20, 13)

  //awan2
  var y1 = 120 + 1*Math.sin(radians(80)/30*r);
  var y2 = 135 + 1*Math.sin(radians(80)/30*r);
  var y3 = 148 + 1*Math.sin(radians(80)/30*r);
  r+=1
  strokeWeight(0)
  fill(255, 255, 255)
  ellipse(y1, 28, 20, 13)
  ellipse(y2, 28, 22, 20)
  ellipse(y3, 28, 20, 13)

  //awan3
  var x = 30 + 0.7*Math.sin(radians(80)/30*r);
  r+=1
  strokeWeight(0)
  fill(255, 255, 255)
  ellipse(253, x, 20, 13)
  ellipse(265, x, 22, 20)
  ellipse(278, x, 20, 13)

  //awan4
  var w = 30 + 0.7*Math.sin(radians(80)/30*r);
  r+=1
  strokeWeight(0)
  fill(355, 255, 255)
  ellipse(353, w, 20, 13)
  ellipse(365, w, 22, 20)
  ellipse(378, w, 20, 13)


  //pesawat
  a = a + 1;
  b = b + 1;
  if(a>400+10)a=0;
  if(b>400+10)b=0;
  strokeWeight(0.5)
  fill(255, 0, 0)
  ellipse(b, 40, 28, 8) //badan pesawat
  arc(a, 38, 4, 10, radians(180), radians(360)) //ekor
  fill(128)
  arc(b,36, 5, 15, radians(180), radians(360)) //sayap kiri
  arc(b, 42, 5, 20, radians(0), radians(180))  //sayap kanan


  //matahari
  strokeWeight()
  fill(255, 255, 0)
  ellipse(6, 6, 20, 20)
  
  //jalan
  strokeWeight()
  fill(128, 128, 128);
  rect(-1, 120, 405, 60 )
  //marka jalan
  strokeWeight(1)
  stroke(255);
  line(0, 150, 5, 150);
  line(10, 150, 15, 150);
  line(20, 150, 25, 150);
  line(30, 150, 35, 150)
  line(40, 150, 45, 150);
  line(50, 150, 55, 150);
  line(60, 150, 65, 150);
  line(70, 150, 75, 150);
  line(80, 150, 85, 150);
  line(90, 150, 95, 150);
  line(100, 150, 105, 150)
  line(110, 150, 115, 150);
  line(120, 150, 125, 150);
  line(130, 150, 135, 150);
  line(140, 150, 145, 150);
  line(150, 150, 155, 150);
  line(160, 150, 165, 150);
  line(170, 150, 175, 150)
  line(180, 150, 185, 150);
  line(190, 150, 195, 150);
  line(200, 150, 205, 150);
  line(210, 150, 215, 150);
  line(220, 150, 225, 150);
  line(230, 150, 235, 150);
  line(240, 150, 245, 150)
  line(250, 150, 255, 150);
  line(260, 150, 265, 150);
  line(270, 150, 275, 150);
  line(280, 150, 285, 150);
  line(290, 150, 295, 150);
  line(300, 150, 305, 150);
  line(310, 150, 315, 150)
  line(320, 150, 325, 150);
  line(330, 150, 335, 150);
  line(340, 150, 345, 150);
  line(350, 150, 355, 150);
  line(360, 150, 365, 150);
  line(370, 150, 375, 150);
  line(380, 150, 385, 150)
  line(390, 150, 395, 150);
  line(400, 150, 405, 150);
  line(410, 150, 415, 150);
 

  //Mobil kuning
  strokeWeight(0.5)
  stroke(0);
  fill(255, 128, 0);
  rect(40, 155, 70, 20,  radians(500), radians(180))
  rect(43, 162, 5, 13)

  //spion
  fill(255);
  line(35, 159, 42, 158)
  rect(35, 159, 1, 3, radians(200))

  //jendela
  fill(51, 255, 153);
  arc(43, 157, 23, 20, radians(0), radians(90))
  rect(43, 157, 5, 5, radians(290), radians(0))
  rect(48, 157, 5, 5)
  rect(53, 157, 5, 5)
  rect(58, 157, 5, 5)
  //pintu
  fill(255);
  rect(63, 157, 10, 13)
  rect(64, 158, 8, 11)
  line(68, 170, 68, 157)
  fill(255, 128, 0);
  rect(67, 153,20, 2, radians(30), radians(30)) 
  //jendela
  fill(51, 255, 153);
  rect(73, 157, 5, 5)
  rect(78, 157, 5, 5)
  rect(83, 157, 5, 5)
  rect(88, 157, 5, 5)
  rect(93, 157, 5, 5)
  rect(98, 157, 5, 5)
  rect(103, 157, 5, 5, radians(0), radians(20))

  //acc
  fill(255);
  rect(100, 168, 5, 6)
  line(104, 169, 101, 169)
  line(104, 170, 101, 170)
  line(104, 171, 101, 171)
  line(104, 172, 101, 172)
  line(104, 173, 101, 173)

  //ban
  strokeWeight(2)
  fill(255);
  ellipse(55, 175, 7, 7)
  point(55, 175)
  ellipse(90, 175, 7, 7)
  point(90, 175)

  //mobil merah
  strokeWeight()
  c = c - 0.5;
  d = d - 0.5;
  e = e - 0.5;
  f = f - 0.5;
  g = g - 0.5;
  h = h - 0.5;
  i = i - 0.5;
  j = j - 0.5;
  k = k - 0.5;
  l = l - 0.5;
  m = m - 0.5;
  n = n - 0.5;
  a1 = a1 - 0.5;
  b1 = b1 - 0.5;
  c1 = c1 - 0.5;
  d1 = d1 - 0.5;
  e1 = e1 - 0.5;
  f1 = f1 - 0.5;
  g1 = g1 - 0.5;
  h1 = h1 - 0.5;
  i1 = i1 - 0.5;
  j1 = j1 - 0.5;
  k1 = k1 - 0.5;

  if(c<400-500)c=400;
  if(d<400-500)d=400;
  if(e<400-500)e=400;
  if(f<400-500)f=400;
  if(g<400-500)g=400;
  if(h<400-500)h=400;
  if(i<400-500)i=400;
  if(j<400-500)j=400;
  if(k<400-500)k=400;
  if(l<400-500)l=400;
  if(m<400-500)m=400;
  if(n<400-500)n=400;
  if(a1<400-500)a1=400;
  if(b1<400-500)b1=400;
  if(c1<400-500)c1=400;
  if(d1<400-500)d1=400;
  if(e1<400-500)e1=400;
  if(f1<400-500)f1=400;
  if(g1<400-500)g1=400;
  if(h1<400-500)h1=400;
  if(i1<400-500)i1=400;
  if(j1<400-500)j1=400;
  if(k1<400-500)k1=400;
  
  strokeWeight(0.5)
  stroke(0);
  fill(255, 7, 7);
  rect(d, 125, 70, 20,  radians(500), radians(180))
  rect(f, 132, 5, 13)

  //spion
  fill(255);
  line(c, 129, e, 128)
  rect(c, 129, 1, 3, radians(200))

  //jendela
  fill(46, 239, 239);
  arc(f, 127, 23, 20, radians(0), radians(90))
  rect(f, 127, 5, 5, radians(290), radians(0))
  rect(g, 127, 5, 5)
  rect(h, 127, 5, 5)
  rect(j, 127, 5, 5)
  //pintu
  fill(255);
  rect(k, 127, 10, 13)
  rect(l, 128, 8, 11)
  line(n, 140, n, 127)
  fill(255, 7, 7);
  rect(m, 123,20, 2, radians(30), radians(30)) 
  //jendela
  fill(46, 239, 239);
  rect(a1, 127, 5, 5)
  rect(b1, 127, 5, 5)
  rect(c1, 127, 5, 5)
  rect(d1, 127, 5, 5)
  rect(f1, 127, 5, 5)
  rect(g1, 127, 5, 5)
  rect(i1, 127, 5, 5, radians(0), radians(20))
  //acc
  fill(255);
  rect(h1, 138, 5, 6)
  line(k1, 139, i1, 139)
  line(k1, 140, i1, 140)
  line(k1, 141, i1, 141)
  line(k1, 142, i1, 142)
  line(k1, 143, i1, 143)
  //ban
  strokeWeight(2)
  fill(255, 255, 255);
  ellipse(i, 145, 7, 7)
  point(i, 145)
  ellipse(e1, 145, 7, 7)
  point(e1, 145)

  line(200, 0, 200, 200) 


}