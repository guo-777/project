 import Vue from 'vue';
 import VueRouter from 'vue-router';
 Vue.use(VueRouter);
 
 import Home from '../pages/Home.vue'
 import Column from '../pages/Column.vue'
 import Detail from '../pages/Detail.vue'
 import Follow from '../pages/Follow.vue'
 import Login from '../pages/Login.vue'
 import NoPage from '../pages/NoPage.vue'
 import Reg from '../pages/Reg.vue'
 import User from '../pages/User.vue'
 
 let routes = [
	 {path:'/home',component:Home},
	 {path:'/Column',component:Column},
	 {path:'/Detail/:_id',component:Detail,name:'detail'},
	 {path:'/Follow',component:Follow},
	 {path:'/Login',component:Login},
	 {path:'/Reg',component:Reg},
	 {path:'/User',component:User},
	 {path:'/',redirect:'/home'},
	 {path:'*',component:NoPage}
 ];
 let router=new VueRouter({
	 routes,
	 mode:'history'
 })
 export default router;
