function setup() {
   //createCanvas(500, 500);
   let canvas = createCanvas(1600, 550);
   canvas.parent("universe");
  }

  let a = 0

  let moon = {}
    moon.x = 0
    moon.y = 0
    moon.diameterMax = 200
    moon.diameterMin = 100
    moon.radius = moon.diameterMax/2
  
  let miniMoon = {}
    miniMoon.diameter = 30
    miniMoon.radius = miniMoon.diameter/2

  let polygon = {}
    polygon.x = 30
    polygon.y = 30
    polygon.radius = 20
    polygon.npoints = 7

    let myPolygon = function polygon() {
      angle = TWO_PI / polygon.npoints
      beginShape()
      for (let a = 0; a < TWO_PI; a += angle) {
        sx = polygon.x + cos(a) * polygon.radius
        sy = polygon.y + sin(a) * polygon.radius
        vertex(sx, sy)
      }
      endShape(CLOSE)
    }

  let bow = {}
    bow.x1 = -150
    bow.y1 = -150
    bow.x2 = -300
    bow.y2 = 200
    bow.x3 = -200
    bow.y3 = 0
    bow.x4 = -100
    bow.y4 = 0
    bow.z1 = 0
    bow.z2 = 0
    bow.z3 = 100
    bow.z4 = 0
   
  /*let rainbow = {}
    rainbow.x1 = -250
    rainbow.y1 = -260
    rainbow.x2 = -73
    rainbow.y2 = -24
    rainbow.x3 = -73
    rainbow.y3 = -61
    rainbow.x4 = -15
    rainbow.y4 = 5*/
  
  function draw() {
    translate(width/2, height/2)
    background(265, 255, 255)
    noFill()
    stroke(99, 98,)
    frameRate(30)

    //Mond plus MiniMond
    push()
    factor = sin(a)
    scaledDia = map(factor, -1, 1, moon.diameterMin, moon.diameterMax)
    ellipse(moon.x, moon.y, scaledDia)
    const increment = TAU/360
    a += increment

      //MiniMond
    miniMoon.y = sin(a) * (moon.radius + 30)
    miniMoon.x = cos(a) * (moon.radius + 30)
    ellipse(miniMoon.x, miniMoon.y, miniMoon.diameter)
    a += PI/180
    pop()
    
    //Pentagon
    push()
    rotate(frameCount/ 200)
    myPolygon(polygon.x, polygon.y, polygon.radius, polygon.npoints)
    pop()

    //Berzierkurven
    bezier(bow.x1, bow.y1, bow.x2, bow.y2, bow.x3, bow.y3, bow.x4, bow.y4, bow.z1, bow.z2, bow.z3, bow.z4)
    bezier(150, 200, 100, 100, 290, 290, 150, 80)
    
    /*Rainbow
    noFill();
    stroke(255, 102, 0);
    curve(rainbow.x1, rainbow.y1, rainbow.x1, rainbow.y1, rainbow.x2, rainbow.y2, rainbow.x3, rainbow.y3);
    stroke(0);
    curve(rainbow.x1, rainbow.y1, rainbow.x2, rainbow.y2, rainbow.x3, rainbow.y3, rainbow.x4, rainbow.y4);
    stroke(255, 102, 0);
    curve(rainbow.x2, rainbow.y2, rainbow.x3, rainbow.y3, rainbow.x4, rainbow.y4, rainbow.x4, rainbow.y4);
    */
  } 

  