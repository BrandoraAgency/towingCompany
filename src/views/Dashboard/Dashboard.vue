<template>
    <div>
        <NavVue />
        <router-view></router-view>
    </div>
</template>
<script> 
import NavVue from '../../components/Nav/NavBar.vue';
import axios from 'axios';
import router from '../../router';

axios.defaults.withCredentials = true
export default {
    components: {
        NavVue
    },
    async mounted() {
        this.logged()
    },
    methods: {
        logged() {
            axios.get(`${import.meta.env.VITE_LIVE}/logged`).then((res) => {
            }).catch((err) => {
                router.push('/login')
            })
        }
    }
}
</script>

<style scoped>

</style>