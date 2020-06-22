<template>
    <div class="mt-4">
        <modal name="foundFriend">
            <div class="display-flex align-content-center">
                <div></div>
                <div>
                    <p class="font-weight-bold mb-0">{{foundFriend.name}}</p>
                    <p class="mb-0">{{foundFriend.islandname}}</p>
                </div>
                <div>
                    <button>送出交友邀請</button>
                </div>
            </div>
        </modal>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div :class="userImgClass">
                       
                    </div>
                    <p>{{userloginDetail.username}}</p>
                    <p>{{id}}</p>
                    <form>
                        <div class="input-group mb-2">
                            <input class=" form-control" id="idFriend" type="text" placeholder="用id搜尋" v-model="cacheId.userId" required>
                            <div class="input-group-append">
                                <button class="input-group-text btn btn-primary" @click.prevent="findFriend">
                                    Q
                                </button>
                                <!-- <span class="input-group-text">?</span> -->
                            </div>  
                        </div>
                    </form>
                    <ul class="list-unstyled">
                        <li><a href="#" :class="friendList ? 'active friendTab' : 'friendTab' " @click.prevent="yourfriendList">好友列表</a></li>
                        <li><a href="#" :class="friendList ? 'friendTab' : 'active friendTab' " @click.prevent="yourfriendRequest">新的交友邀請</a></li>
                    </ul>
                </div>
                <div class="col-8" v-if="friendList">
                    {{nofriendTxt}}
                </div>
                <div class="col-8" v-else>
                    目前沒有交友邀請
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nofriendTxt: '你沒有朋友 :(',
            id: `ID: ${this.userloginDetail.userId}`,
            friendList: false,
            cacheId:{
                userId:''
            },
            foundFriend:{
                name:'',
                islandname:''
            }
        }
    },
    props:[
        'userloginDetail'
    ],
    computed:{
        userImgClass:function () {
            const vm = this
            let userImgNum = vm.userloginDetail.userpicture,
                userImgClass = `userImg${userImgNum}`
           
            // return [ 'userImg_label','pointer', userImgClass]
            return [ 'userImg', userImgClass]
        }
    },
    methods:{
        yourfriendList(){
            this.friendList = true
        },
        yourfriendRequest(){
            this.friendList = false
        },
        findFriend(){
            const vm = this
            const api = 'http://localhost:8081/userInfo'
            console.log(vm.cacheId)
            this.$modal.show('foundFriend');
            vm.$http.post( api, vm.cacheId).then((response) => {
                if(response.status === 200){
                    console.log(response)
                    vm.foundFriend.name = response.data.name
                    vm.foundFriend.islandname = response.data.islandname
                    
                }else{
                    vm.statusTxt = '失敗'
                    console.log(response.status)
                    vm.statusSvg = 3
                }
            })
            vm.cacheId = ''
        }
    }
}
</script>

<style lang="scss">
@for $var from 1 to 9 {
    .userImg#{$var}{
        background-image: url(../../assets/userImg0#{$var}.jpg);
    }
}
.userImgnull, .userImgundefined{
    background-color: #ddd;
}

</style>