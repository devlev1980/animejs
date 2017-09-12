// anime({
// 	targets: 'div.box.red',
// 	translateY: [
// 		{ value: 300, duration: 500},
// 		{ value: 0, duration: 800 }
// 	],
// 	rotate: {
// 		value:'1turn',
// 		easing :'easeInOutSine'
//
// 	},
// 	loop:true
//
// });
// anime({
// 	targets: 'div.box.yellow',
// 	translateY: [
// 		{ value: 800, duration: 500,delay:1000},
// 		{ value: 0, duration: 800 }
// 	],
// 	rotate: {
// 		value:'1turn',
// 		easing :'easeInOutSine',
// 		delay:1000
//
// 	},
// 	loop:true
//
//
// });
// anime({
// 	targets: 'div.box.green',
// 	translateY: [
// 		{ value: 200, duration: 500,delay:2000},
// 		{ value: 0, duration: 800 }
// 	],
// 	rotate: {
// 		value:'1turn',
// 		easing :'easeInOutSine',
// 		delay:2000
//
// 	},
// 	loop:true
//
//
// });
// anime({
// 	targets: 'div.box.blue',
// 	translateY: [
// 		{ value: 200, duration: 500,delay:3000},
// 		{ value: 0, duration: 800 }
// 	],
// 	rotate: {
// 		value:'1turn',
// 		easing :'easeInOutSine',
// 		delay:3000
//
// 	},
// 	loop:true
//
//
// });
 var playPause =anime({
	targets: 'div.box',
	translateY: [
		{ value: 300, duration: 500},
		{ value: 0, duration: 800 }
	],
	 borderRadius: 50,
	 // left: '50px',
	 right:'300px',
	rotate: {
		value:'1turn',
		easing :'easeInOutSine'

	},
	loop:true,
	delay: function(target, index) {
		// 100ms delay multiplied by every div index, in ascending order
		return index * 1000;
	},
	opacity:0.6,
	width:150,
	autoplay:false
});

// playPause.play()
document.querySelector('#boxes .play').onclick=playPause.play;
document.querySelector('#boxes .pause').onclick=playPause.pause;



