<template>
    <div>
        <NavBar />
    </div>
</template>

<script>
import NavBar from '../components/Nav/NavBar.vue';
import axios from 'axios';
import router from '../router';

axios.defaults.withCredentials = true
export default {
    components: {
        NavBar
    },
    async mounted() {
         this.logged()
  },
    methods: {
        logged() {
            axios.get(`${import.meta.env.VITE_LIVE}/logged`).then((res) => {
                router.push('/')
            }).catch((err) => {
                router.push('/login')
            })
    }
    }
}
</script>

<style scoped>

</style>