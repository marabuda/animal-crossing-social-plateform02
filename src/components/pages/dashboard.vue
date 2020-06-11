<template>
<div>
    <Navbar/>
    
    <h1>dashboard</h1>
    <router-view/>
</div>
    
</template>

<script>
import Navbar from '../Navbar';
export default{
    name: 'dashboard',
    components:{
        Navbar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
