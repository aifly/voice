var imgs = {
	play: './assets/images/play.png',
	//title: './assets/images/title.png',
	reload: './assets/images/reload.png',
	voice: './assets/images/voice.png',
	//voice1: './assets/images/voice.gif',
	bg: './assets/images/bg.jpg',
	index: './assets/images/index1.jpg',
	frequency: './assets/images/frequency4.gif',
	frequency1: './assets/images/frequency2.png',
	wyBtn: './assets/images/wy-btn.png',
	bzBtn: './assets/images/bz-btn.png',
	wyTongdao: './assets/images/wy-tongdao.png',
	bzTongdao: './assets/images/bz-tongdao.png',
	teamBg: './assets/images/team-bg.jpg',
	listBg: './assets/images/list-bg.jpg',

	logo: './assets/images/logo.png',

	arrow: './assets/images/arrow.png',
	imgBg: './assets/images/img-bg.png'
}

window.zmitiConfig = [
	{

		length:33,
		dataUrl:'./assets/js/weiyuan.json?t='+new Date().getTime(),
		voiceStyle:{
			titleImg:imgs.wyTongdao,
			bgStyle:{
				background:'url('+imgs.bg+') no-repeat center center',
				backgroundSize:'cover'
			}
		},
		listStyle:{

		}
	},
	{
		length:23,

		dataUrl:'./assets/js/buzhang.json?t='+new Date().getTime(),
		voiceStyle:{
			titleImg:imgs.bzTongdao,
			bgStyle:{
				background:'url('+imgs.bg+') no-repeat center center',
				backgroundSize:'cover'
			}
		},
		listStyle:{
			
		}
	},{
		length:0,
		dataUrl:'./assets/js/daibiao.json?t='+new Date().getTime(),
		voiceStyle:{
			bgStyle:{}
		},
		listStyle:{
			
		}
	}
];

var arr = [];
for (var attr in imgs) {

	arr.push(imgs[attr]);
}
//委员
for(var i = 0;i<window.zmitiConfig[0].length;i++){
	arr.push('./assets/images/'+(i+1)+'.jpg')
}
//部长
for(var i = 0;i<window.zmitiConfig[1].length;i++){
	arr.push('./assets/images/buzhang/'+(i+1)+'.jpg')
}

var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	}
}