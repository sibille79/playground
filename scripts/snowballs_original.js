/*
class Grid {
  constructor(pos, size) {
    this.pos = pos
    this.size = size
    this.snowballs = new Snowballs(this.size)
  }
  show() {
    // rect(this.pos.x, this.pos.y, this.size)
    push()
    translate(this.pos.x, this.pos.y)
    this.snowballs.show()
    pop()
  }
}
*/ 

//let grid = []

class Snowballs {
    constructor() {
    this.x = random(width)
    this.y = random(height)
    this.size = 80
    this.radius = this.size/2
    }
    //Methode initiieren
    show() {
      ellipse(this.x, this.y, this.size)
      confetti = new Confetti(this.x, this.y)
      confetti.show()
    } 
    move(){
      this.y += random()
    }
    repeat(){
      if (this.y >= height-this.radius){
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
      ellipse(this.x, this.y, random(50))
    } 
  }
  let confetti = []
  
  function setup() {
    createCanvas(400, 400);
  

  
  // neue Instanz (Snowball) wird hinzugefügt
    for (let i = 0; i < 35; i += 1) {
    snowballs.push(new Snowballs())
  }
  }
  
  function draw() {
    background(205, 200, 245);
    noFill();
    stroke(255)
    
    //Methode aufrufen
    /*for (let i = 0; i < grid.length; i += 1) {
    let currentCell = grid[i]
    currentCell.show()
  }
  */
    for (let i = 0; i < snowballs.length; i += 1) {
    snowballs[i].show()
    snowballs[i].move()
    snowballs[i].repeat()
  }
  }
  
  