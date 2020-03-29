<template>
  <div class="home">
	<Swiper
	  :data="list"
	  apiName="banner"
	/>
	<Instro/>
	<div  class="home-m-l-r">
		<Cell v-for="(item,index) of home"
			:key="item._id"
			:data="item"
			:index="index"
			api-name="home"
		/>
		
	</div>
  </div>
</template>

<script>
	import Swiper from '../components/Swiper.vue'
	import Cell from '../components/Cell.vue'
	import Instro from '../components/Instro.vue'
  export default {
    name:'Home',
    props:{},
    data(){
      return {
        list:[],
		home:[]
      }
    },
    components:{
		Swiper,Cell,Instro
	},
    mounted(){
      axios({
        url:'/api/goods/banner',
        params:{_page:1,_limit:3},
      }).then(
        res=>this.list = res.data.data
      )
      
      axios({
        url:'/api/goods/home',
        params:{_page:1,_limit:10},
      }).then(
        res=>this.home = res.data.data
      )
      
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>

.home-m-l-r{
    margin: 0 0.4rem;
  }
</style>