<template>

	<div class="cell" @click="getDetail">
	  <h2><span v-show="index!=null">{{index+1}}.</span>{{data.title}}</h2>
	  <p>{{data.des}}</p>
	</div>
</template>

<script scoped>
	export default {
		name: 'Cell',
		props: {
			data:{
				type:Object,
				required:true,
				default:function(){ 
					return{}
				}
			},
			index:{
				type:Number,
				default:null
			},
			apiName:{
				type:String,
				default:null
			}
		},
		
		components: {},
		mounted() {},
		updated() {},
		methods: {
			getDetail(){
				if(this.apiName){
					console.log('tiaozhuan ',this.apiName);
					this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
				}
			}
		}
	}
</script>

<style scoped>
	.cell {color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #123;}
	.cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
	.cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
	.cell{clear: both;}
</style>
