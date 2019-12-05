var bird;
var pipes = [];
//var k=0;

var score = 0;
let scoreP;

function setup() {
	createCanvas(400, 600);
	scoreP = createP('Score: 0');
	scoreP.style('font-size', '20pt');
	//scoreP.position(10,10);

	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);

	for (var i = pipes.length-1 ; i >=0 ; i--) {
		pipes[i].show();
		pipes[i].update();
		if(pipes[i].calcScore(bird)) {
			score++;
		}
		scoreP.html('Score: '+`${score}`);

		if(pipes[i].hits(bird)) {
			console.log('HIT');
			pipes[i].show();
			//console.log('Here');
			//noLoop();
			reset();
			//k = 1;
		}
		if (pipes.length !== 0) {
			if (pipes[i].offscreen()) {
				pipes.splice(i, 1);
				//console.log(pipes.length);
			}
		}
	}

	bird.show();
	bird.update();


	if(frameCount % 300 == 0) {
		pipes.push(new Pipe());
	}

}

function reset() {
	pipes = [];
	bird.y = height/2;
  bird.x = 25;
	bird.velocity = 0;
	score = 0;

}

function keyPressed() {
	if (key == ' ') {
		bird.up();
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
