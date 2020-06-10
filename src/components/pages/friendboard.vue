<template>
    <div>
        123
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[],
        };
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