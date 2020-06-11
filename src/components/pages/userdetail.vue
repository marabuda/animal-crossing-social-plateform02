<template>
    <div class="container-fluid mx-4">
        <div class="row">
            <div class="col-3">
                <template v-if="userdetailEditing == true">
                    editing!!
                </template>
                <template v-else>
                    <div>
                        img
                    </div>
                    <p>{{userdetail.user[0].name}}</p>
                    <p>{{userdetail.user[0].isIlandname}}</p>
                    <div :class="fruitClass"></div>
                    <div class="userIntro">
                        {{userdetail.user[0].intro}}
                    </div>
                    <button class="btn btn-outline-primary" @click="DetailEditHandler()">
                        編輯個人資訊
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text: 'ajskhjljaknsj',
            userdetail:{
                "status": 200,
                "message": "OK",
                user:[
                    {
                        "userId": 0,
                        "name": "string",
                        "islandname": "string",
                        "fruit": 0,
                        "intro": "string",
                        "provide": [
                            {
                            "objname": "string",
                            "objid": 0,
                            "comment": "string",
                            "addlist": [
                                "name",
                                "name"
                            ],
                            "listorder": Boolean,
                            "deadline": Number,
                            "deadlinecheck": Boolean
                            },
                            {
                            "objname": "string",
                            "objid": 1,
                            "comment": "string",
                            "addlist": [
                                "name",
                                "name"
                            ],
                            "listorder": Boolean,
                            "deadline": Number,
                            "deadlinecheck": Boolean
                            }
                        ],
                        "seek": [
                            {
                            "objname": "string",
                            "objid": 0,
                            "comment": "string",
                            "addlist": [
                                "name",
                                "name"
                            ],
                            "listorder": Boolean,
                            "deadline": Number,
                            "deadlinecheck": Boolean
                            },
                            {
                            "objname": "string",
                            "objid": 1,
                            "comment": "string",
                            "addlist": [
                                "name",
                                "name"
                            ],
                            "listorder": Number
                            }
                        ]
                    }
                ]
                
            },
            userdetailEditing: false,
        }
    },
    computed:{
        fruitClass:function () {
            const vm = this;
            let fruitNum = this.userdetail.user[0].fruit,
                fruitClass = '';
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
            return [ 'fruit' , fruitClass];
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