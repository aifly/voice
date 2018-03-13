<template>
	<transition name='main'>
		<div  class="lt-full zmiti-tree-main-ui "  v-show='show' ref='page'>
			
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import imgs from '../lib/assets.js';
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


				var hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
				scene.add( hemiLight );




				var floorMat = new THREE.MeshStandardMaterial( {
					//roughness: 0.8,
					color: 0xff0000,
					//metalness: 0.2,
					//bumpScale: 0.0005
				});

				var floorGeometry = new THREE.PlaneBufferGeometry( 20, 20 );
				var floorMesh = new THREE.Mesh( floorGeometry, floorMat );

				

				var textureLoader = new THREE.TextureLoader();
				textureLoader.load( "/assets/images/hardwood2_diffuse.jpg", function( map ) {
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 10, 24 );
					floorMat.map = map;
					floorMat.needsUpdate = true;
				} );
				/*textureLoader.load( "/assets/images/hardwood2_bump.jpg", function( map ) {
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 10, 24 );
					floorMat.bumpMap = map;
					floorMat.needsUpdate = true;
				} );
				textureLoader.load( "/assets/images/hardwood2_roughness.jpg", function( map ) {
					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 4;
					map.repeat.set( 10, 24 );
					floorMat.roughnessMap = map;
					floorMat.needsUpdate = true;
				} );*/

				
				floorMesh.receiveShadow = true;
				floorMesh.rotation.x = -Math.PI / 2.0;
				scene.add( floorMesh );

				var clock = new THREE.Clock();
				function animate() {

					var time = Date.now() * 0.0005;
				 var delta = clock.getDelta();

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