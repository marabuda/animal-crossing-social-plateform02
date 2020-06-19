<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div>
                    img
                </div>
                <p>au/6y400</p>
                <p>{{id}}</p>
                <form action="post">
                    <div class="input-group mb-2">
                        <input class=" form-control" id="idFriend" type="text" placeholder="用id搜尋" required>
                        <div class="input-group-append">
                            <span class="input-group-text">?</span>
                        </div>  
                    </div>
                </form>
                <ul class="list-unstyled">
                    <li><a href="#">好友列表</a></li>
                    <li><a href="#">新的交友邀請</a></li>
                </ul>
            </div>
            <div class="col-8">
                {{nofriendTxt}}
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            nofriendTxt: '你沒有朋友 :(',
            id: `ID: ${this.userloginDetail.userId}`
        }
    },
    props:[
        'userloginDetail'
    ],
    methods:{

    }
}
</script>

<style>

</style>