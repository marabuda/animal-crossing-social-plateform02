import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import Router from 'vue-router';



import login from '@/components/pages/login';
import signup from '@/components/pages/signup';
import dashboard from '@/components/pages/dashboard';
import friendboard from '@/components/pages/friendboard';
import userdetail from '@/components/pages/userdetail';
import yourfriend from '@/components/pages/yourfriend'


Vue.use(VueAxios, axios);
Vue.use(Router);


export default new Router({
    routes: [
        {
            path:'*',
            redirect: 'login'
        },{
            path:'/login',
            name:'login',
            component: login
        },{
            path:'/signup',
            name:'signup',
            component: signup
        }, {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard,
            children:[
                {
                    path: 'friendboard',
                    name: 'friendboard',
                    component: friendboard,
                }, {
                    path: 'yourdetail',
                    name: 'yourdetail',
                    component: userdetail,
                },{
                    path: 'yourfriend',
                    name: 'yourFriend',
                    component: yourfriend
                }
            ]
        }
    ]
})
