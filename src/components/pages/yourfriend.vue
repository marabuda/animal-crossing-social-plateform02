<template>
    <div class="mt-4">
        <modal name="foundFriend">
            <div class="d-flex align-content-center align-items-center p-2">
                <div class="userImg flex_item"></div>
                <div class="flex_item">
                    <p class="font-weight-bold mb-0">{{foundFriend.name}}</p>
                    <p class="mb-0">{{foundFriend.islandname}}</p>
                </div>
                <div class="flex_item">
                    <button class="btn btn-primary" @click.prevent="addfriend" :disabled="isSameUser">送出交友邀請</button>
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
                        <li><a href="#" :class="friendListShow ? 'active friendTab' : 'friendTab' " @click.prevent="yourfriendList">好友列表</a></li>
                        <li><a href="#" :class="friendListShow ? 'friendTab' : 'active friendTab' " @click.prevent="yourfriendRequest">新的交友邀請</a></li>
                    </ul>
                </div>
                <div class="col-8" v-if="friendListShow">
                    {{nofriendTxt}}
                </div>
                <div class="col-8" v-else>
                    <div v-if="friendRequestList.length">
                        <div class="d-flex align-content-center align-items-center border-bottom py-2" v-for="(items, index) of friendRequestList" :key="index">
                            <div class="userImg pr-4 flex_1">img</div>
                            <div class="pr-4 flex_2">
                                <p class="mb-0">{{items.username}}</p>
                                <p class="mb-0">{{items.userId}}</p>
                            </div>
                            <div class="flex_2 text-right">
                                <button class="btn btn-link">刪除</button>
                                <button class="btn btn-primary">確認</button>
                            </div> 
                        </div>
                    </div>
                    <div v-else>
                        目前沒有交友邀請
                    </div>
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
            friendListShow: false,
            isSameUser:false,
            cacheId:{
                userId:''
            },
            foundFriend:{
                name:'',
                islandname:''
            },
            addfrienddata:{
                hostId:'',
                guestId:''
            },
            friendRequestList:[]
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
            this.friendListShow = true
        },
        yourfriendRequest(){
            this.friendListShow = false
        },
        findFriend(){
            const vm = this
            const api = 'http://localhost:8081/userInfo'
            if(vm.cacheId.userId.length){
                this.$modal.show('foundFriend')
                vm.$http.post( api, vm.cacheId).then((response) => {
                    if(response.status === 200){
                        vm.foundFriend.name = response.data.name
                        vm.foundFriend.islandname = response.data.islandname
                        if (vm.cacheId.userId == vm.userloginDetail.userId) {
                            vm.isSameUser = true
                        }else{
                            vm.isSameUser = false
                            vm.addfrienddata.guestId = Number(vm.cacheId.userId)
                            console.log(vm.addfrienddata.guestId)
                        }
                        vm.cacheId.userId = ''    
                    }else{
                        vm.statusTxt = '失敗'
                        console.log(response.status)
                        vm.statusSvg = 3
                        vm.cacheId.userId = ''
                    }
                })
            }else{
                window.alert('請輸入用戶id')
            }
        },
        addfriend(){
            const vm = this
            const api = 'http://localhost:8081/addFriends'
            vm.addfrienddata.hostId = vm.userloginDetail.userId
            vm.$http.post(api, vm.addfrienddata).then((response)=>{
                if(response.status === 200){
                    console.log(response)
                    this.$modal.hide('foundFriend')
                }else{
                    window.alsert('交友邀請失敗')
                }
            })
        }
    },
    created:function(){
        const vm = this
        const api = 'http://localhost:8081/friendsRequest'
        vm.$http.post(api, vm.userloginDetail).then((response)=>{
            if(response.status === 200){
                console.log(response)
                vm.friendRequestList = response.data.friendsRequest
            }else{
                // window.alsert('交友邀請失敗')
            }
        })
        
    }
}
</script>

<style lang="scss">
.userImg{
    width: 100px;
    height: 100px;
    background-size: cover;
}
@for $var from 1 to 9 {
    .userImg#{$var}{
        background-image: url(../../assets/userImg0#{$var}.jpg);
    }
}

.userImgnull, .userImgundefined{
    background-color: #ddd;
}
.flex_item{
    flex: 1;
}
.flex_1{
    flex:1
}
.flex_2{
    flex: 2;
}
</style>