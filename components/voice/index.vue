<template>
	<transition name='main'>
		<div  class="lt-full zmiti-tree-main-ui "  v-show='show' ref='page'>
			
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import '../lib/html2canvas';
	import $ from 'jquery';
	export default {
		props:['obserable','pv','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				showQrcode:false,
				show:true,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				showMasks:false,
			}
		},
		components:{
		},
		
		methods:{

			loadData(){
				$.getJSON('./assets/js/data.json?t='+new Date().getTime(),(data)=>{
					this.initGL(data)
				})
			},
			initGL(data){
				var scene = new THREE.Scene();

				scene.background = new THREE.Color(0xf0f0f0);

				var renderer = new THREE.WebGLRenderer();
				renderer.setSize(this.viewW,this.viewH);

				this.$refs['page'].appendChild(renderer.domElement);

				var camera = new THREE.PerspectiveCamera( 45,this.viewW/this.viewH,1, 1000 );


				camera.position.set(0,0,100);
				camera.lookAt(scene.position);


				var textureLoader = new THREE.TextureLoader();
					var imgMap = textureLoader.load(this.imgs.floor);

					imgMap.wrapS = THREE.RepeatWrapping;
					imgMap.wrapT = THREE.RepeatWrapping;
					imgMap.anisotropy = 4;
//					imgMap.repeat.set( 30, 54 );

					var imgMaterial = new THREE.MeshLambertMaterial({
						map:imgMap
					});
					imgMaterial.needUpdate  =true;
					
					var imgPlaneGeo = new THREE.PlaneGeometry(100,98,1,1);
					var imgMesh = new THREE.Mesh(imgPlaneGeo,imgMaterial);
					imgMesh.position.y = -20;
					imgMesh.rotation.x = -Math.PI*50/180;
					//imgMesh.rotation.z = Math.PI*50/180;

					scene.add(imgMesh);


				var r = 30;

				data.length = 10;
				var angle = 360/data.length;
				data.forEach((item,i)=>{

					var textureLoader = new THREE.TextureLoader();
					var imgMap = textureLoader.load(item.img);
					var imgMaterial = new THREE.MeshLambertMaterial({
						map:imgMap
					});
					
					var imgPlaneGeo = new THREE.PlaneBufferGeometry(600/30,838/30,100);
					var imgMesh = new THREE.Mesh(imgPlaneGeo,imgMaterial);
					//imgMesh.position.z = Math.cos(angle/180*Math.PI*i)*r;
					imgMesh.position.x = i*30;

					//imgMesh.rotation.y = (angle/180*Math.PI*i);

					console.log(imgMesh.rotation)
					scene.add(imgMesh);
				});
				 



				

				scene.add(new THREE.AmbientLight( '#fff',.7 ))
				
				function animate() {

					var time = Date.now() * 0.0005;

					renderer.render( scene, camera );
					requestAnimationFrame( animate );
				}

				animate()



			}


			
			
			
		},
		mounted(){
			this.loadData();
 
		}
	}
</script>