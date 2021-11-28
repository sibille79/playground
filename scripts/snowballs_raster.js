class Grid {
    constructor(posX, posY, size) {
      this.pos = {x: posX, y: posY}//zeichnet das Grid mit x, y Positionen
      this.size = size //Grösse der Rectangles
      this.numSnowballs = 2
      this.snowballs = []
      for (let i = 0; i < this.numSnowballs; i += 1) {
        let snowballSize = 15
        let x = random(0,100)
        let y = random(0,30)
        this.snowballs.push(new Snowballs(x, y, snowballSize))
        }
    }
    show() {
      rect(this.pos.x, this.pos.y, this.size)
    // Snowballs zeichnen
      push()
      translate(this.pos.x, this.pos.y)
      for (let snowballs of this.snowballs) {
        snowballs.show()
        snowballs.move()
        snowballs.repeat()
      }
      pop()
    }
}
  
class Snowballs {
    constructor(posX, posY, size) {
     this.x = posX
     this.y = posY
     this.size = size
     this.confetti = []
      let x = 0
      let y = 0
      this.confetti.push(new Confetti(x, y))
    }
    //Methode initiieren
    show() {
      ellipse(this.x, this.y, this.size)
      confetti = new Confetti(this.x, this.y)
      confetti.show()
    } 
    move(){
      this.y += 1.5
    }
    repeat(){
        if (this.y >= 100){
        this.y = 0;
        }
    }
}
let snowballs = []
  
class Confetti {
    constructor(x, y) {
     this.x = x
     this.y = y
     this.size = 20
     this.radius = this.size/2
    }
    //Methode initiieren
    show() {
      ellipse(this.x, this.y, random(10))
    } 
}

let confetti = []
let grid = []
  
function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(255);
  ellipseMode(RADIUS);
  frameRate(12)
  
// neue Instanz (Snowball) wird hinzugefügt
  for (let i = 0; i < 400; i += 100) {
    for(let j = 0; j < 400; j += 100) {
      grid.push(new Grid(i, j, 100))
  }
    }
}
  
function draw() {
    background(205, 200, 245);
    
    for (let i = 0; i < grid.length; i += 1) {
    grid[i].show()
    }
}
