<template>
    <b-container fluid>
        <b-row>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col>
                            <div class="headText">
                                <h3>Towing Companies</h3>
                            </div>
                        </b-col>
                        <b-col>
                            <router-link class="btn" to="/users/create">New User</router-link>
                        </b-col>

                    </b-row>
                    <b-table-simple responsive>
                        <b-thead>
                          <b-tr>
                            <b-th>ID</b-th>
                            <b-th>Email</b-th>
                            <b-th>Role</b-th>
                          </b-tr>
                        </b-thead>
                        <b-tbody >
                          <b-tr v-for="user in users">
                            <b-th>{{user.id}}</b-th>
                            <b-td>{{user.email}}</b-td>
                            <b-td>{{user.role}}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                </b-col>
            </b-row>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                users:[]
            }
        },
        mounted() {
            this.getUsers()
        },
        methods: {
        async getUsers(){
            const jobs=axios.get(`http://localhost:3001/user`);
            Promise.all([jobs]).then((res)=>{
              this.$data.users=res[0].data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }, 
    }
</script>

<style scoped>

</style>