import Vue from 'vue';
import Router from 'vue-router';


import login from '@/components/pages/login';
import signup from '@/components/pages/signup';
import dashboard from '@/components/pages/dashboard';
import friendboard from '@/components/pages/friendboard';
import userdetail from '@/components/pages/userdetail';


Vue.use(Router)

export default new Router({
    routes: [
        {
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
                },
            ]
        }
    ]
})
