<template >
    <div class="container-fluied mx-4">
        <div class="row">
            <div class="col-12 display-1 text-secondary" v-if="isNoFriend">
                {{nofriendTxt}}
            </div>
            <div class="col-3" v-for="item in userloginFriendboard" :key="item.userId">
                <div class="card">
                    <div class="card-body">
                        <p>
                            <b>
                                {{item.name}}
                            </b>  
                        </p>
                        <ul class="list-group border_provide mb-2">
                            <li class="list-group-item border_provide" v-for="item in item.provide" :key="item.objid">
                                {{item.objname}}
                            </li>
                        </ul>
                        <ul class="list-group border_provide">
                            <li class="list-group-item border_seek" v-for="item in item.seek" :key="item.objid">
                                {{item.objname}}
                            </li>
                        </ul>
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
            nofriendTxt: '你沒有朋友 :('
        };
    },
    props:[
        'userloginFriendboard'
    ],
    computed:{
        isNoFriend: function(){
            const vm = this,
                  friendNum = vm.userloginFriendboard.length
            // friendNum === 0 ? (return true) : ('');
            // if (friendNum === 0) {
            //     return true
            // }else{
            //     return false
            // }
            return (friendNum === 0 ? true : false)
        }
    },
    methods:{
        getFriendBoard(){
            const api = `path`,
                  vm = this;
            console.log(api);
        }
    },
    created(){
        this.getFriendBoard();
    }
}
</script>