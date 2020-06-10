<template>
    <div class="container">
        <div class="col-12 col-lg-6 m-auto">
            <div class="card">
                <div class="card-body">
                    <h1 class="mb-4">Sign up Right now</h1>
                    <form action="post">
                        <div class="form-group row">
                            <label class="require col-sm-4" for="account">account</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="account" type="text" placeholder="account" v-model="user.account">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="require col-sm-4" for="password">pass word</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="password" type="password" placeholder="password" v-model="user.password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="require col-sm-4" for="name">name</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="name" type="text" placeholder="島民姓名" v-model="user.name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="require col-sm-4" for="islandName">island name</label>
                            <div class="col-sm-8">
                                <input class="w-100 form-control" id="islandName" type="text" placeholder="island name" v-model="user.isIlandname">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="require col-sm-4" for="password">fruit</label>
                            <div class="col-sm-8">
                                <select class="w-100 form-control" name="fruit" id="fruit" v-model="user.fruit">
                                    <option value="0">蘋果</option>
                                    <option value="1">橘子</option>
                                    <option value="2">梨子</option>
                                    <option value="3">桃子</option>
                                    <option value="4">櫻桃</option>
                                    <option value="5" selected disabled>島嶼自產水果</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4" for="password">intro</label>
                            <div class="col-sm-8">
                                <textarea class="w-100 form-control" name="intro" id="intro" cols="30" rows="10" v-model="user.intro"></textarea>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between">
                            <a class="btn btn-outline-primary" href="#" @click.prevent="backTologin">login</a>
                            <a class="btn btn-primary" href="#" @click="signup">sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
        user:{
            account:'',
            password:'',
            name:'',
            isIlandname:'',
            fruit:0,
            intro:''
        }
    }
  },
  methods:{
    signup(){
        const vm = this;
        console.log(vm.user.fruit);
        // if(success){
            vm.$router.push('/login');
        // }
    },
    backTologin(){
        const vm = this;
        console.log(vm.user.account, vm.user.fruit);
        vm.$router.push('/login');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
