<template>
    <div id="app">
        <router-view v-on:emitUserLogin="cacheUserLogin" 
        :userlogin-info="this.userloginInfo"
         @edit-userdetail="updateUserInfo"/>
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
        },
        updateUserInfo(val){
            const vm = this
            console.log(val.fruit)
            console.log(vm.userInfo)
            vm.userloginInfo.userInfo.fruit = val.fruit
            vm.userloginInfo.userInfo.intro = val.intro
            vm.userloginInfo.userinfo.islandname = val.islandname
        }
    }
}
</script>

<style lang="scss">
    @import "./assets/all";
</style>
