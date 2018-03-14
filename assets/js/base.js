var imgs = {
	play: './assets/images/play.png',
	title: './assets/images/title.png',
	floor:'./assets/images/floor.jpg',
	
	logo: './assets/images/logo.png',
	addone: './assets/images/addone.png',

	arrow: './assets/images/arrow.png',
	qrcode: './assets/images/qrcode.png',
}

var arr = [];
for (var attr in imgs) {
	arr.push(imgs[attr]);
}

var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	water: {
		src: './assets/music/water.mp3',
		autoplay: false,
		name: 'water',
		loop: false

	}
}
var loading = function(arr, fn, fnEnd) {
	var len = arr.length;
	var count = 0;
	var i = 0;

	function loadimg() {
		if (i === len) {
			return;
		}
		var img = new Image();
		img.onload = img.onerror = function() {
			count++;
			if (i < len - 1) {
				i++;
				loadimg();
				fn && fn(i / (len - 1), img.src);
			} else {
				fnEnd && fnEnd(img.src);
			}
		};
		img.src = arr[i];
	}
	loadimg();
}