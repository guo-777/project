<template>
  <div id="app">
	  <Header v-if="$root.bNav"/>
	<Loading v-if="$root.bLoading"/>
	<router-view></router-view>
	<Footer v-show="$root.bFoot"/>
	
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import Loading from '../components/Loading.vue'
  export default{
	  name:'App',
	  components:{
		  Footer,Header,Loading
	  },
  watch:{
  	$route:{//路由监听，属性检测
      handler(nextValue,PrevValue){
        console.log('路由变化了',nextValue);
        
        let path = nextValue.path;
        
        if(/home|follow|column/.test(path)){//home follow column
          this.$root.bNav=this.$root.bFoot=true;
        }
        
        if(/detail|login|reg/.test(path)){//detial login reg
          this.$root.bNav=this.$root.bFoot=false;
        }
        
        if(path.includes('/user')){//user
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        
      },
      immediate:true
    }
  }
  }
</script>

<style>

</style>
