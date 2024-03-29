function Pipe() {
  this.top = random(height-100);
  this.bottom = this.top + 100;
  //this.bottom = random(height/2);
  this.x = width;
  this.w = 40;
  this.speed = 1;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.x >this.x && bird.x < this.x + this.w) {
      if(bird.y < this.top || bird.y > this.bottom) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.calcScore = function() {
    if (bird.x === (this.x + this.w)) {
      //console.log(bird.x, this.x + this.w);
      return true;
    }
    return false;
  }

  this.show = function() {
    fill(255);
    if(this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, height);
  }

  this.update = function() {
    this.x -=this.speed
  }

  this.offscreen = function() {
    if (this.x<-this.w) {
      return true;
    } else {
      return false;
    }
  }
}
