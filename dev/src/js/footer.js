'use strict';

// ANIMATE WATCH
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

// Lets us get random numbers from within a range we specify. From MDN docs.
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

$(document).ready(function(){
	animatePointerHours(watchHours, cxwh, cywh);
	animatePointerMinutes(watchMinutes, cxwm, cywm);
});