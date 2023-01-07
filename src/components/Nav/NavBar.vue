<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/jobs" >Towing</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link exact-active-class="active" class="nav-link" to="/jobs" >Jobs List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  exact-active-class="active" class="nav-link" to="/jobs/approved" >Approved List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  exact-active-class="active" class="nav-link" to="/jobs/company" >Towing Companies</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  exact-active-class="active" class="nav-link" to="/jobs/stats" >Stats</router-link>
                    </li>
                </ul>
                <div class="userInfo">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Welcome Name
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

</script>

<style scoped>

</style>