<template>
    <div class="container-fluid mx-4">
        <div class="row">
            <div class="col-3">
                <div v-if="userdetailEditing == true">
                    <form >
                        <input class="w-100 form-control mb-2" id="name" type="text" placeholder="島民姓名" v-model="backupUserInfo.username" required>
                        <input class="w-100 form-control mb-2" id="islandname" type="text" placeholder="island name" v-model="backupUserInfo.islandname" required>
                        <select class="w-100 form-control mb-2" name="fruit" id="fruit" v-model="backupUserInfo.fruit" required>
                            <option value="0">蘋果</option>
                            <option value="1">橘子</option>
                            <option value="2">梨子</option>
                            <option value="3">桃子</option>
                            <option value="4">櫻桃</option>
                        </select>
                        <textarea class="w-100 form-control mb-2" name="intro" id="intro" v-model="backupUserInfo.intro" cols="30" rows="10" ></textarea>
                        <button class="btn btn-link" @click="cancleEditing">取消</button>
                        <button class="btn btn-primary">送出</button>
                    </form>
                </div>
                <div v-else>
                    <div>
                        img
                    </div>
                    <p>{{this.userloginDetail.username}}</p>
                    <p>{{this.userloginDetail.islandname}}</p>
                    <div :class="fruitClass"></div>
                    <div class="userIntro">
                        {{this.userloginDetail.intro}}
                    </div>
                    <button class="btn btn-outline-primary" @click="DetailEditHandler()">
                        編輯個人資訊
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cacheUserInfo:{},
            backupUserInfo:{
                username:'',
                islandname:'',
                fruit:'',
                intro:''
            },
            userdetailEditing: true,
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
        }
    },
    methods:{
        DetailEditHandler(){
            const vm = this
            vm.userdetailEditing = true
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
            // vm.$http.post( api, vm.backupUserInfo).then((response) => {
            //     console.log(response);
            //     if(response.status === 200){
                    
            //     }else{
            //         vm.statusTxt = '註冊失敗'
            //         console.log(response.status)
            //         vm.statusSvg = 3
            //     }
            // })
        }
    }
}
</script>

<style>
.fruit{
    width: 50px;
    height: 50px;
}
.fruitApple{
    background: red;
}
.fruitOrange{
    background: orange;
}
.fruitPear{
    background: #5ff;
}
.fruitPeach{
    background: palevioletred;
}
.fruitCherry{
    background: #a33;
}

</style>