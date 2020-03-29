<template>

	<div class="lheader">
		<div class="header">
			<a><img src="images/11.jpg" /></a>
			<strong>职位动态</strong>
		</div>
		<div class="nav">
			<a href="#">职位邀请</a>
			<a href="#">新职位</a>
			<a href="#">我的关注</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Lheader',
		props: {},
		data() {
			return {

			}
		},
		components: {
		},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped>
	.lheader{
		background-color: #FFF;
	}
	.header {width: 100%;padding: .13rem 0;border-bottom: .005rem solid #ababab;position: fixed;top: 0;}
	.header>a{display: inline-block;margin-left: .2rem;}
	.header img {width: .12rem;height: .21rem;}
	.header strong{position: fixed;left: 42%;}
	.nav{width: 100%;border-bottom:.005rem solid #e7e9eb;display: flex;justify-content: space-around;position: absolute;top:.6rem;}
	.nav a{color:#999999;font-size: .14rem;line-height: .4rem;padding: .1rem 0;}
	.nav a:hover{color:#00b38a;font-weight: bold;border-bottom: .03rem solid #00b38a;}

</style>
