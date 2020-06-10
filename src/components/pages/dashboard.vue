<template>
<div>
    <Navbar/>
    <div class="container">
        <div class="col-12 col-lg-4 m-auto">
            <h1>dashboard</h1>
            <router-view/>
        </div>
    </div>
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
