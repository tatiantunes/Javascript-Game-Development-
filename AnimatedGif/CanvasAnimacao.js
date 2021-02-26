(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
//7


(function() {
	var run, //1
		runImage,//1
		canvas;//1
	
	function animLoop(){ //9
		window.requestAnimationFrame(animLoop); //9.
		
		run.update(); //9
		run.render(); //9
	}
	
	function Sprite(options){ // 4
		var sprite={}, // 4
			frameIndex = 0, // 4
			tickCount = 0, // 4
			ticksPerFrame = options.ticksPerFrame || 0, // 4
			numberOfFrames = options.numberOfFrames || 1; // 4
		
		sprite.context = options.context; // 4
		sprite.width = options.width; // 4
		sprite.height = options.height;// 4
		sprite.image = options.image; // 4
		
		sprite.update = function(){ // 8
			tickCount += 1; // 8
			
			if(tickCount > ticksPerFrame){ // 8
				tickCount = 0; // 8
				if(frameIndex < numberOfFrames - 1){ // 8
					frameIndex += 1; // 8
				} else { // 8
					frameIndex = 0; // 8
				}
			}
		
		};
		
		sprite.render = function(){ //6
			
			sprite.context.clearRect(0,0,sprite.width,sprite.height);
			
			sprite.context.drawImage( //6
				sprite.image,//6
				frameIndex * sprite.width / numberOfFrames, //6
				0, //6
				sprite.width / numberOfFrames, //6
				sprite.height, //6
				0, //6
				0, //6
				sprite.width / numberOfFrames, //6
				sprite.height); //6
		};
		
		return sprite; //4
	}
	
	
	canvas = document.getElementById("canvas"); //2
	canvas.width = 160; //2
	canvas.height = 145; //2
	
	runImage = new Image(); //3

	
	run = Sprite({ //5
		context: canvas.getContext("2d"), //5
		width: 1600, //5
		height: 145, //5
		image: runImage, //5
		numberOfFrames: 10, //5
		ticksPerFrame: 6 //5
	});
	
	runImage.addEventListener("load",animLoop);
	runImage.src = "sprite1.png"; //3
	
}());
