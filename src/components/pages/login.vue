<template>
    <div class="container">
        <div class="col-12 col-lg-4 m-auto">
            <div class="card">
                <div class="card-body">
                    <h1 class="mb-4">Hi there</h1>
                    <form @submit.prevent="signin">
                        <div class="form-group row">
                            <label class="col-sm-4" for="account">account</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="account" type="text" placeholder="account" v-model="user.account">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4" for="password">pass word</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="password" type="password" placeholder="password" v-model="user.password">
                            </div>
                        </div>

                        <div class="d-flex justify-content-between">
                            <a class="btn btn-outline-primary" href="#" @click="signup">sign up</a>
                            <button type="submit" class="btn btn-primary">login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            user:{
                account:'',
                password:''
            }
        }
    },
    methods:{
        signin(){
            const vm = this;
            const api = 'http://localhost:8081/logIn';
            vm.$http.post( api,this.user).then((response) => {
                console.log(response);
                if(response.status === 200){
                    console.log(response)
                    this.$emit('emitUserLogin',response.data)
                    vm.$router.push('/dashboard/friendboard')
                }else{
                    vm.statusTxt = '登入失敗'
                    console.log(response.status)
                    vm.statusSvg = 3
                }
            })
            // console.log(vm.user.account);
            // if(success){
                // vm.$router.push('/dashboard/friendboard');
            // }
        },
        signup(){
            const vm = this;
            vm.$router.push('/signup');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
