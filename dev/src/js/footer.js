$(document).ready(function(){
	// watch

	var watch = Snap.select('#watch');
	var watchBody = watch.select('#watch__body');
	var watchMiddle = watch.select('#watch__middle');
	var watchHours = watch.select('#watch__pointer--hours');
	var watchMinutes = watch.select('#watch__pointer--minutes');

		// watchHours.attr({ transform: 'r180,250,256'}); // Reset the flake's position to behind the cloud

	var cxwh = watchHours.getBBox().x2 -21; // Get its initial coordinates
	var cywh = watchHours.getBBox().y2 -21;
	
	animatePointerHours(watchHours, cxwh, cywh);

	function animatePointerHours(watchHours, cxwh, cywh){
		// watchHours.attr({ transform: 't0 0'}); // Reset the flake's position to behind the cloud
		var timing = getRandomArbitrary(2000,10000); // Random transition time between times we specify
		var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
		// Animate the flake and do a new animation for it when it's done (repeat this function)
		watchHours.stop().animate({ transform: 't0 0 r'+deg+' '+cxwh+' '+cywh}, 2000, function(){ animatePointerHours(watchHours, cxwh, cywh);
		});
	}

	var cxwm = watchMinutes.getBBox().y -46; // Get its initial coordinates
	var cywm = watchMinutes.getBBox().y2 -21;
	
	animatePointerMinutes(watchMinutes, cxwm, cywm);

	function animatePointerMinutes(watchMinutes, cxwm, cywm){
		// watchHours.attr({ transform: 't0 0'}); // Reset the flake's position to behind the cloud
		var timing = getRandomArbitrary(2000,10000); // Random transition time between times we specify
		var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
		// Animate the flake and do a new animation for it wmen it's done (repeat this function)

		watchMinutes.stop().animate({ transform: 't0 0 r'+deg+' '+cxwm+' '+cywm}, 5000, function(){ animatePointerMinutes(watchMinutes, cxwm, cywm);
		});
	}

	// Sun vars
	// Idealy, load sun via external file to keep HTML clean
	var sun = Snap.select('#sun');
	var sunCircle = sun.select('#circle');
	var sunRays = sun.select('#rays');

	// Sun events
	raysAnimation();

	// Infinite animation for the sun rays
	function raysAnimation(){
		sunRays.stop().animate(
			{ transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
			10000, // Nice slow turning rays
			function(){ 
				sunRays.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
				raysAnimation(); // Repeat this animation so it appears infinite.
			}
			);

	}

	var cloud_snow = Snap.select('#cloud_snow');
	var flakes = ['flake-1','flake-2','flake-3']; // Setup our snow. Matches IDs in SVG.
	
	snow();

	function snow(){
		for (var i=0; i<flakes.length; i++){
			var flakeId = flakes[i];
			var flake = cloud_snow.select('#'+flakeId); // Select each individual flake from our list
			var cx = watchHours.getBBox().cx; // Get its initial coordinates
			var cy = watchHours.getBBox().cy;
			
			animateFlake(flake, cx, cy); // Send it to be infinitely animated
		}
	}
	
	function animateFlake(flake, cx, cy){
		flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
		var timing = getRandomArbitrary(2000,10000); // Random transition time between times we specify
		var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
		// Animate the flake and do a new animation for it when it's done (repeat this function)
		flake.stop().animate({ transform: 't0 200 r'+deg+' '+cx+' '+cy}, timing, function(){ animateFlake(flake, cx, cy);
		});
	}


var cloud_lightning = Snap.select('#cloud_lightning');

var strikeCount = 0;

function strike(){
	var bolt = cloud_lightning.select('#lightning-bolt');
	if (strikeCount < 4){
		var opacity = parseInt(bolt.attr('opacity'));
		var newOpacity = (opacity === 1) ? 0 : 1;
		bolt.stop().animate({ opacity: newOpacity}, 100, strike);
		strikeCount++;
	}
	else {
		strikeCount = 0;
		setTimeout(strike, getRandomArbitrary(1000,5000));
		var x = getRandomArbitrary(-200,200);
		bolt.attr({ transform: 't'+x+',0'});
	}

}

strike();





	// Lets us get random numbers from within a range we specify. From MDN docs.
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
});