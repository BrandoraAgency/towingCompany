<template>
    <b-container fluid>
        <b-row>
            <b-row>
                <b-col>
                    <div class="headText">
                        <h3>Towing Companies</h3>
                    </div>
                    <b-table-simple responsive>
                        <b-thead>
                          <b-tr>
                            <b-th>Name</b-th>
                            <b-th>Contact</b-th>
                            <b-th>Phone</b-th>
                            <b-th>Zip</b-th>
                          </b-tr>
                        </b-thead>
                        <b-tbody >
                          <b-tr v-for="company in companies">
                            <b-th>lorem</b-th>
                            <b-td>Cell</b-td>
                            <b-td>Cell</b-td>
                            <b-td>Cell</b-td>
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
          companies:[]
        }
    },
    mounted() {
        this.getJobs()
    },
    methods: {
        async getJobs(){
            const jobs=axios.get(`${process.env.REACT_APP_live_url}/company`);
            Promise.all([jobs]).then((res)=>{
              this.$data.companies=res[0].data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
    }
</script>

<style scoped>

</style>