<template>
	<section class="loading_shade" id="J_loading_box">
	    <div class="loading_box">
	        <div class="loading"></div>
	        <p class="loading_text">努力加载中...</p>
	    </div>
	</section>
</template>

<script scoped>
	export default {
	  name:'loading',
	  props:{},
	  data(){
	    return {
	      
	    }
	  },
	  components:{},
	  mounted(){
		},
	  updated(){},
	  methods:{}
	}
</script>

<style>
	.loading_shade {position: fixed;left: 0;top: 0;width: 100%;height: 100%;display: -webkit-box;-webkit-box-pack: center;-webkit-box-align: center;background: rgba(255,255,255,.7);z-index: 99}
	.loading_box {padding: 30px;box-sizing: border-box;-webkit-box-sizing: border-box}
	.loading_box .loading {width: 100px;height: 100px;margin: 0 auto;background-color: #00b589;border-radius: 100%;-webkit-animation: load_scaleout 1s infinite ease-in-out;animation: load_scaleout 1s infinite ease-in-out}
	.loading_box .loading_text {text-align: center;color: #333;font-size: .12rem}
	@-webkit-keyframes load_scaleout {
	    0% {
	        -webkit-transform: scale(0)
	    }
	    100% {
	        -webkit-transform: scale(1);
	        opacity: 0
	    }
	}
	@keyframes load_scaleout {
	    0% {
	        transform: scale(.1);
	        -webkit-transform: scale(.1)
	    }
	    100% {
	        transform: scale(1.5);
	        -webkit-transform: scale(1.5);
	        opacity: 0
	    }
	}
	.loading_oneline_box {font-size: .12rem;color: #FFF;text-align: center}
</style>
