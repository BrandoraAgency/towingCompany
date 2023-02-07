

<template>
  <div>
    <div class="towingLogin">
      <b-container>
        <b-row>
          <b-col>
            <div class="headLogin">
              <div class="headingtext">
                <h2>Towing</h2>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>

            <div class="loginForm">
              <form action="" @submit.prevent="login">
                <div class="form-group">
                  <label for="email" >Email</label>
                  <input type="email" @keydown="loginChange" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" @keydown="loginChange" name="password" id="password" placeholder="******" required>
                </div>
                <div class="form-submit">
                  <b-button type="submit">Login</b-button>
                </div>
              </form>
              <div class="passerr" v-if="this.$data.loginInvalid">
                <span>
                    Invalid Password or Email
                </span>
            </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from '../../router';
export default{
  data() {
    return {
      loginInvalid:false
    }
  },
  methods:{
  loginChange(){
    console.log('done');
    if(this.$data.loginInvalid){
      this.$data.loginInvalid=false
    }
  },
  login(e){
    const email=e.target[0].value;
    const password=e.target[1].value;
    const body={
      email:email,
      password:password
    }
    axios.post(`${import.meta.env.VITE_LIVE}/login`,body).then((res)=>{
      console.log('done');
      localStorage.setItem('user_details',JSON.stringify(res.data))
     router.push('/')
    }).catch((err)=>{
      this.$data.loginInvalid=true;
      console.log(err);
    })
  }
  }
}
</script>
<style scoped>

</style>
