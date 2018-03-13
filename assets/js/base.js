var imgs = {
	play: './assets/images/play.png',
	title: './assets/images/title.png',
	leaf1: './assets/images/leaf4.png',
	leaf2: './assets/images/leaf5.png',
	leaf3: './assets/images/leaf3.png',
	logo: './assets/images/logo.png',
	addone: './assets/images/addone.png',
	bg1: './assets/images/bg1.jpg',
	bg2: './assets/images/bg2.jpg',
	bg3: './assets/images/bg3.jpg',
	bg4: './assets/images/bg4.jpg',
	bg5: './assets/images/bg5.jpg',

	xdd: './assets/images/xdd.jpg',

	arrow: './assets/images/arrow.png',
	btn1: './assets/images/btn3.png',
	border: './assets/images/border1.png',
	border1: './assets/images/border.png',
	clip: './assets/images/clip.png',
	brand: './assets/images/brand.png',
	bucket1: './assets/images/bucket1.png',

	bucket: './assets/images/bucket.gif',
	person: './assets/images/person2.gif',
	person1: './assets/images/person.png',

	btn2: './assets/images/btn2.png',
	qrcode: './assets/images/qrcode.png',
	shareDisabled: './assets/images/share-disable.png',
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