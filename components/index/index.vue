<template>
	<div  class="lt-full zmiti-index-main-ui "  :class="{'show':show}">
		
		
	</div>
</template>

<script>
	import './index.css';
	import imgs from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import '../lib/html2canvas';
	import $ from 'jquery';
	import Toast from '../toast/toast';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				toastMsg:'',
				showBtns:false,
				showMasks:false,
				transX:0,
				transY:0,
				createImg:'',

			}
		},
		components:{
			 Toast
		},
		
		methods:{

			entry(){
				var {obserable} = this;
				obserable.trigger({
					type:'showTreeApp'
				});

			},
			
			toast(msg='提交成功',time=2000){
				this.toastMsg = msg;
				setTimeout(()=>{
					this.toastMsg = '';
				},time)
			},
			
			numstart(){
				//this.num =  1;
			},
			hideMask(){
				this.showMasks = false;
			},
			showMask(){
				this.showMasks = true;
			},
			restart(){
				window.location.href = window.location.href.split('?')[0];
			},
			afterEnter(){
				this.showBtns = true;
			}
			
			
		},
		mounted(){



			

			var s = this;
			s.lastX = '';
			s.lastY = '';
			var i =0 ;
			var startX,startY;
 			window.addEventListener("deviceorientation", function(event) {
			      

			     // document.title = event.beta|0;
			      i++;
			      if(i===1){
			      	startY = event.beta;
			      }

			      var x =  event.gamma|0,
			      	  y = event.beta|0;

			      if(x<-15){
			      	x=-15;
			      }
			      if(x>15){
			      	x=15
			      }
			      if(y-startY<-10){
			      	y=-10+startY;
			      }
			      if(y-startY>10){
			      	y=10+startY
			      }

			      if(s.lastX!==''){
			     	 
			      }
			      if(s.lastY !== ''){
			      	
			      }

			      s.transX = x ;
			      s.transY = y;

			    


			    	      

			}, true);

		}
	}
</script>