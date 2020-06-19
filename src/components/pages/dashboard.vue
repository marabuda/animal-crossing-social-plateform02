<template>
<div>
    <Navbar/>
    <p>{{welcomeTxt}}</p>
    <router-view 
        :userlogin-friendboard="this.userloginInfo.userInfo.friendlist"
        :userlogin-detail="this.userloginInfo.userInfo"/>
</div>
    
</template>

<script>
import Navbar from '../Navbar';
export default{
    name: 'dashboard',
    data(){
        return{
            welcomeTxt: `歡迎回來!${this.userloginInfo.userInfo.username}`,
        }
    },
    props:[
        'userloginInfo'
    ],
    components:{
        Navbar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
