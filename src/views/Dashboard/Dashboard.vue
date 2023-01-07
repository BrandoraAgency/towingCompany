<template>
    <div>
        <NavVue/>
        <router-view></router-view>
    </div>
</template>

<script>
import NavVue from '../../components/Nav/NavBar.vue';
    export default {
        components:{
            NavVue
        }
    }
</script>

<style scoped>

</style>