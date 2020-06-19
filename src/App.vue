<template>
    <div id="app">
        <router-view v-on:emitUserLogin="cacheUserLogin" :userlogin-info="this.userloginInfo"/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{   
            userloginInfo:{},
        }
    },
    methods:{
        cacheUserLogin:function (userloginInfo) {
            this.userloginInfo = userloginInfo;
        }
    }
}
</script>

<style lang="scss">
    @import "./assets/all";
</style>
