<template>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">森友交易平台</a>
    </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    signout(){
      const vm = this;
      vm.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
