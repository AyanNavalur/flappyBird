class Pipe {
  constructor() {
    this.spacing = 150;
    this.top = random(height-this.spacing);
    this.bottom = this.top + this.spacing;
    this.x = width;
    this.w = 75;
    this.speed = 1;

    this.highlight = false;
  }

  hits(bird) {
    if (bird.x >this.x && bird.x < this.x + this.w) {
      if(bird.y < this.top || bird.y > this.bottom) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  calcScore() {
    if (bird.x === (this.x + this.w)) {
      return true;
    }
    return false;
  }

  show() {
    fill(255);
    if(this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, height);
  }

  update() {
    this.x -= this.speed;
  }

  pipe_offscreen() {
    if (this.x<-this.w) {
      return true;
    } else {
      return false;
    }
  }
}
