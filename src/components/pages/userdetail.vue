<template>
<div>
    <modal name="userImgDetail">
        <ul class="list-unstyled userImgSelect">
            <li v-for="(item, key) of userImgOption" class="userImgOption" :class="key" :key="item" @click="editUserImg(item)">
                <!-- <div :class="key"></div> -->
            </li>
        </ul>
    </modal>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-3 col-lg-4">
                <div v-if="userdetailEditing == true">
                    <form >
                        <div>
                            <label :class="userImgClass" for="userImg" @click.prevent="modalOpen()">
                                <input class="userImg_input" type="text" id="userImg">
                            </label>
                        </div>
                        <input class="w-100 form-control mb-2" id="name" type="text" placeholder="島民姓名" v-model="backupUserInfo.username" required>
                        <input class="w-100 form-control mb-2" id="islandname" type="text" placeholder="island name" v-model="backupUserInfo.islandname" required>
                        <select class="w-100 form-control mb-2" name="fruit" id="fruit" v-model="backupUserInfo.fruit" required>
                            <option value="0">蘋果</option>
                            <option value="1">橘子</option>
                            <option value="2">梨子</option>
                            <option value="3">桃子</option>
                            <option value="4">櫻桃</option>
                        </select>
                        <textarea class="w-100 form-control mb-2" name="intro" id="intro" v-model="backupUserInfo.intro" cols="30" rows="5" ></textarea>
                        <button class="btn btn-link" @click="cancleEditing">取消</button>
                        <button class="btn btn-primary" @click.prevent="detailSend()">送出</button>
                    </form>
                </div>
                <div v-else>
                    <div>
                    </div>
                    <p>{{userloginDetail.username}}</p>
                    <p>{{userloginDetail.islandname}}</p>
                    <div :class="fruitClass"></div>
                    <div class="userIntro">
                        {{userloginDetail.intro}}
                    </div>
                    <button class="btn btn-outline-primary" @click="DetailEditHandler()">
                        編輯個人資訊
                    </button>
                </div>
            </div>
            <!-- provide -->
            <div class="col-12 col-md-4">
                <p>
                    提供
                </p>
                <ul >
                    <li></li>
                </ul>
                <!-- <button class="btn btn-outline-primary btn_outline_provide w-100" @click="addProvide">+</button> -->
                <button class="btn btn-outline-primary btn_outline_provide w-100" v-if="!userProvideEditing" @click="addProvide">+</button>
                <div class="card provide" v-if="userProvideEditing">
                    <div class="card-body">
                        <input class="form-control mb-2" type="text" id="seekObjname" placeholder="物品名稱">
                        <textarea class="form-control mb-2" name="seekComment" id="seekComment" cols="30" rows="10" placeholder="備註"></textarea>
                        <div class="form-check ml-1 mb-2">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">優先顯示(限三筆)
                            </label>
                        </div>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn_outline_provide" @click="cancleAddProvide">取消</button>
                            <button class="btn btn_provide" @click="sendAddProvide">送出</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- seek -->
            <div class="col-12 col-md-4">
                <p>
                    尋找
                </p>
                <ul >
                    <li></li>
                </ul>
                <button class="btn btn-outline-primary btn_outline_seek w-100" v-if="!userSeekEditing" @click="addSeek">+</button>
                <div class="card seek" v-if="userSeekEditing">
                    <div class="card-body">
                        <input class="form-control mb-2" type="text" id="seekObjname" placeholder="物品名稱">
                        <textarea class="form-control mb-2" name="seekComment" id="seekComment" cols="30" rows="10" placeholder="備註"></textarea>
                        <div class="form-check ml-1 mb-2">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" value="">優先顯示(限三筆)
                            </label>
                        </div>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn_outline_seek" @click="cancleAddSeek">取消</button>
                            <button class="btn btn_seek" @click="sendAddSeek">送出</button>
                        </div>
                    </div>
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
            userdetailEditing: false,
            userProvideEditing: true,
            userSeekEditing:false,
            cacheUserInfo:{},
            cacheAddSeek:{

            },
            backupUserInfo:{
                username:'',
                islandname:'',
                fruit:'',
                intro:''
            },
            
            userImg:1,
            userImgOption:{
                userImg1:1,
                userImg2:2,
                userImg3:3,
                userImg4:4,
                userImg5:5,
                userImg6:6,
                userImg7:7,
                userImg8:8
            }
        }
    },
    props:[
        'userloginDetail'
    ],
    computed:{
        fruitClass:function () {
            const vm = this
            let fruitNum = Number(this.userloginDetail.fruit),
                fruitClass = ''
            if ( fruitNum === 0) {
                fruitClass = 'fruitApple'
            }else if( fruitNum === 1){
                fruitClass = 'fruitOrange'
            }else if( fruitNum === 2){
                fruitClass = 'fruitPear'
            }else if( fruitNum === 3){
                fruitClass = 'fruitPeach'
            }else if( fruitNum === 4){
                fruitClass = 'fruitCherry'
            }
            return [ 'fruit','mb-2' , fruitClass]
        },
        userImgClass:function () {
            const vm = this
            let userImgNum = vm.userImg,
                userImgClass = `userImg${userImgNum}`
           
            return [ 'userImg_label','pointer', userImgClass]
        }
    },
    methods:{
        DetailEditHandler(){
            const vm = this
            vm.userdetailEditing = true
            vm.backupUserInfo.userId = vm.userloginDetail.userId
            vm.backupUserInfo.username = vm.userloginDetail.username
            vm.backupUserInfo.islandname = vm.userloginDetail.islandname
            vm.backupUserInfo.fruit = vm.userloginDetail.fruit
            vm.backupUserInfo.intro = vm.userloginDetail.intro
        },
        cancleEditing(){
            const vm = this
            vm.userdetailEditing = false
            vm.backupUserInfo.username = ''
            vm.backupUserInfo.islandname = ''
            vm.backupUserInfo.fruit = ''
            vm.backupUserInfo.intro = ''
        },
        detailSend(){
            const vm = this
            const api = 'http://localhost:8081/updateUser'
            vm.$http.post( api, vm.backupUserInfo).then((response) => {
    
                if(response.status === 200){
                    console.log(response)
                    this.$emit('edit-userdetail',response.data)
                }else{
                    vm.statusTxt = '註冊失敗'
                    console.log(response.status)
                    vm.statusSvg = 3
                }
            })
            vm.userdetailEditing = false
        },
        modalOpen(){
            this.$modal.show('userImgDetail')
        },
        editUserImg(item){
            this.userImg = item
            console.log(item)
            this.$modal.hide('userImgDetail')
        },
        addProvide(){
            this.userProvideEditing = true
        },
        cancleAddProvide(){
            this.userProvideEditing = false
        },
        sendAddProvide(){
            let user = '2'
        },
        addSeek(){
            this.userSeekEditing = true
        },
        cancleAddSeek(){
            this.userSeekEditing = false
        },
        sendAddSeek(){
            let user = '2'
        },
        
        
    }
}
</script>

<style lang="scss">
.fruit{
    width: 50px;
    height: 50px;
}
.fruitApple{
    background: url(../../assets/apple.jpg);
}
.fruitOrange{
    background: url(../../assets/orange.jpg);
}
.fruitPear{
    background: url(../../assets/pear.jpg);
}
.fruitPeach{
    background: url(../../assets/peach.jpg);
}
.fruitCherry{
    background: url(../../assets/cherry.jpg);
}

.userImg_label{
    width: 100px;
    height: 100px;
    background-size: cover;
    &:hover{
        box-shadow: 0 0 0 0.2rem rgba(130,117,255,0.25);
    }
}

@for $var from 1 to 9 {
    .userImg#{$var}{
        background-image: url(../../assets/userImg0#{$var}.jpg);
    }
}
.userImgSelect{
    display: grid;
    grid-template-columns: repeat(4, 1fr) ;
    grid-auto-rows: 40%;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: 90%;
}
.userImgOption{
    display: inline-block;
    width: auto;
    background-size: cover;
}
.userImg_input{
    opacity: 0;
}
</style>