<template>
    <b-container>
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
                      <div class="filterInput">
                        <label for="">Filter By Number</label>
                        <input type="number" v-model="filter" name="" id="">
                      </div>
                    </b-col>
                  </b-row>
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
                          <b-tr v-for="company in filterData">
                            <b-th>{{company.name}}</b-th>
                            <b-td>{{company.contact}}</b-td>
                            <b-td>{{company.phone}}</b-td>
                            <b-td>{{company.zipCode}}</b-td>
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
          companies:[],
          filter:''
        }
    },
    mounted() {
        this.getJobs()
    },
    computed:{
      filterData(){
        return this.companies.filter(item=>
        (this.filter=== '' || item.zipCode.includes(this.filter))
        )
      }
    },
    methods: {
        async getJobs(){
            const jobs=axios.get(`${import.meta.env.VITE_LIVE}/company`);
            Promise.all([jobs]).then((res)=>{
              this.$data.companies=res[0].data;
              console.log(res[0].data);
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
    }
</script>

<style scoped>

</style>