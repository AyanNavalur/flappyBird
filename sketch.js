const population = 400;

var birds = [];
var savedBirds = [];
var pipes = [];
//var k=0;

var counter = 0;
let slider;

function setup() {
	createCanvas(400, 600);
	slider = createSlider(1,100,1);
	slider.position(50,650);
	for(var i = 0; i<population; i++) {
		birds[i] = new Bird();
	}
	//pipes.push(new Pipe());
}

function draw() {
	for(let n = 0; n<slider.value(); n++) {
		if(counter % 300 == 0) {
			pipes.push(new Pipe());
		}
		counter++;

		for (var i = pipes.length-1 ; i >=0 ; i--) {
			 pipes[i].update();
			 // if(pipes[i].calcScore(bird)) {
			 // 	gameScore++;
			 // }
			for(let j = birds.length-1; j>=0; j--) {
				if(pipes[i].hits(birds[j])) {
					//console.log('HIT');
					savedBirds.push(birds.splice(j,1)[0]);
				}
			}
			if(pipes.length !== 0) {
				if (pipes[i].pipe_offscreen()) {
					pipes.splice(i, 1);
				}
			}
		}

		for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }

		for(let bird of birds) {
			bird.think(pipes);
			bird.update();
		}

		if(birds.length === 0) {
			counter = 0;
			nextGeneration();
			//reset();
			pipes = [];

			// if(pipes[i].hits(bird)) {
			// 	console.log('HIT');
			// 	pipes[i].show();
			// 	//console.log('Here');
			// 	//noLoop();
			// 	//reset();
			// 	//k = 1;
			// }
			}
	}

	// All the drawing stuff
	background(0);	
	for(let bird of birds) {
		bird.show();
	}
	for(let pipe of pipes) {
		pipe.show();
	}

}

function keyPressed() {
	if (key == 'S') {
		let bird = birds[0];
		//let json = bird.brain.serialize();
		console.log(bird.brain);
		save(bird.brain, 'bird.json');
	}
	//code for waiting until you press the spacebar after you die to resume gameplay...
	//ISSUE: page is unresponsive if you leave it for more than 20 seconds on loop
	// while(k) {
	// 	if (key == ' ') {
	// 		reset();
	// 		loop();
	// 		k = 0;
	// 	}
	// }
}
