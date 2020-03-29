<template>
  <div class="instro">
		<p>- 为你推荐精彩内容 -</p>
  </div>
</template>

<script>
  export default {
    name:'Instro',
    props:{},
    data(){
      return {
        
      }
    },
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .instro {/*width: 100%;*/margin: 0 0.4rem;padding:0.2rem 0;border-bottom:1px dashed #00b589;clear: both;}
  .instro>p {text-align: center;line-height: .45rem;font-size: .14rem;}
</style>
