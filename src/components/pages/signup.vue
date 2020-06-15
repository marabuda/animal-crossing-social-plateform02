<template>
    <div class="container">
        <div class="col-12 col-lg-6 m-auto">
            <div class="card">
                <div class="card-body" v-if="form">
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
                <div class="card-body" v-else>
                    <div class="status">
                        <!-- loading -->
                        <div v-if="statusSvg === 1" class="status_svg loadingRotate">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" class="svg-inline--fa fa-spinner fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#8275FF" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                            </svg>
                        </div>
                        <!-- success -->
                        <div v-if="statusSvg === 2" class="status_svg">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#20c997" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                        </div>
                        
                        <!-- faild -->
                        <div v-if="statusSvg === 3" class="status_svg">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                                <path fill="#FF5656" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                            </svg>
                        </div>
                    </div>
                    {{statusTxt}}
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
        form: true,
        //1 loading,2 sucess, 3 faild
        statusSvg: 1,
        statusTxt: '',
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
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const api = '/signUp';
        vm.statusTxt = '註冊中';
        vm.form = false;
        vm.$http.post(proxyurl + api,this.user).then((response) => {
            console.log(response);
            if(response.status === 200){
                vm.statusTxt = '註冊成功'
                vm.statusSvg = 2
            }else{
                vm.statusTxt = '註冊失敗'
                console.log(response.status)
                vm.statusSvg = 3
            }
        })
        // if(success){
            // vm.$router.push('/login');
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
.status_svg{
    width: 50%;
    margin: auto;
}
</style>
