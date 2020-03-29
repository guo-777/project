<template>
 	<div class="Follow">
		<!-- <Lheader/> -->
		<div class="follow-a">
			<Cell v-for="(item,index) of follow"
				:key="item._id"
				:data="item"
				:index="index"
				api-name="follow"
			/>
		</div>
		
	</div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	// import Lheader from '../components/Lheader.vue'
	import axios from '../plugins/axios.js'
	 
	export default {
		name: 'Follow',
		props: {},
		data() {
			return {
				follow:[]
			}
		},
		components: {
			Cell/*,Lheader*/
		},
		mounted() {
			this.$root.bLoading=true;
			axios({
				url:"/api/goods/follow",
				params:{_page:1,_limit:8},
				
			}).then(
			
			res=>{
				this.$root.bLoading=false;
				this.follow=res.data.data;
				}
			  )
			},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
.follow-a{
	margin-top: 1.2rem;
	margin-left: 0.4rem;
	margin-right: 0.4rem;
}
</style>
