<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/jobs">Towing</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link v-if="userRole === 'sales' || userRole === 'dispatch'" exact-active-class="active"
                            class="nav-link" to="/create">New Job</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="userRole === 'admin'" exact-active-class="active"
                            class="nav-link" to="/users">Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            v-if="userRole === 'admin' || userRole === 'accountant' || userRole === 'qc' || userRole === 'dispatch'"
                            exact-active-class="active" class="nav-link" to="/jobs">Jobs List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="userRole === 'admin' || userRole === 'accountant'" exact-active-class="active"
                            class="nav-link" to="/jobs/approved">Approved List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="userRole === 'admin' || userRole === 'dispatch'" exact-active-class="active"
                            class="nav-link" to="/jobs/company">Towing Companies</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="userRole === 'admin'" exact-active-class="active" class="nav-link"
                            to="/jobs/stats">Stats</router-link>
                    </li>
                </ul>
                <div class="userInfo">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Welcome {{ userRole }}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            userRole: JSON.parse(localStorage.getItem("user_details")) ? JSON.parse(localStorage.getItem("user_details")).role : '',
            user: JSON.parse(localStorage.getItem("user_details"))
        }
    },
    mounted() {
        console.log(this.$data.userRole);
    },
}
</script>

<style scoped>

</style>