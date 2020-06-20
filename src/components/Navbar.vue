<template>
    <nav class="navbar navbar-light bg-light ">
        <a class="navbar-brand" href="#" @click.prevent="toFriendList">森友交流平台</a>
        <div class="header_tools">
            <div class="d-inline-block dropdown">
                <button class="btn btn-link " @click.stop="notificationToggle()">
                    <svg width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                </button>
                <div class="dropdown-menu" v-show="this.notificationDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>    
            </div>  
            
            <a href="#" @click.stop.prevent="toYourDetail" title="your profile">
                you
            </a>
            <div class="d-inline-block dropdown">
                <button class="btn btn-link " @click.stop="settingToggle()">
                    <svg width="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </button>
                <div class="dropdown-menu" v-show="this.settingDropdown">
                    <a class="dropdown-item" href="#" @click.stop.prevent="toYourFriend()">好友列表</a>
                    <a class="dropdown-item" href="#" @click.prevent="signout">登出</a>
                </div>    
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            notificationDropdown: false,
            settingDropdown: false
        }
    },
    mounted: function(){
        const vm = this;
        window.addEventListener('click', function(){
            vm.notificationDropdown = false;
            vm.settingDropdown = false;
        },false)
    },
    methods:{
        signout(){
            const vm = this;
            vm.$router.push('/login');
        },
        notificationToggle(){
            this.notificationDropdown ? this.notificationDropdown = false  : this.notificationDropdown = true;
            this.settingDropdown ? this.settingDropdown = false:'';
        },
        settingToggle(){
            this.settingDropdown ? this.settingDropdown = false : this.settingDropdown = true;
            this.notificationDropdown ? this.notificationDropdown = false :'';
        },
        toFriendList(){
            const vm = this;
            vm.$router.push('/dashboard/friendboard');
        },
        toYourDetail(){
            const vm = this;
            vm.$router.push('/dashboard/yourdetail');
        },
        toYourFriend(){
            const vm = this;
            vm.$router.push('/dashboard/yourfriend');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-menu{
    left: auto;
    right: 0;
    display: block;
}
</style>
