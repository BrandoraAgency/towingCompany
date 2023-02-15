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
                <label for="">Filter By Zip</label>
                <input type="number" v-model="filter" name="" id="">
              </div>
            </b-col>
          </b-row>
          <b-table-simple responsive>
            <b-thead>
              <b-tr>
                <b-th>Name</b-th>
                <b-th>Phone</b-th>
                <b-th>Zip</b-th>
                <b-th>Rating</b-th>
              </b-tr>
            </b-thead> 
            <b-tbody>
              <b-tr v-for="(company,index) in filterData">
                <b-th>{{ company.towingCompanies.length>0?company.towingCompanies[0].name:''}}</b-th>
                <b-td>{{ company.phone }}</b-td>
                <b-td>{{ company.towingCompanies.length>0?company.towingCompanies[0].zipCode:''}}</b-td>
                <b-td>{{ company.ratings.length>0?company.ratings[0].averageRating:0}}</b-td>
                <td>
                  <div v-if='user_details.role==="admin"  || (company.ratings.length>0 ? !company.ratings[0].users.split(",").includes(`${user_details.userid}`):true)'>
                    <input v-model="inputValue[index]" @input="validateInput" type="number" />
                    <button @click="addrating(company.id,index)">Rate</button>
                  </div>
                </td>
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
      companies: [],
      inputValue: [],
      filter: '',
      ratedUser:[],
      user_details:JSON.parse(localStorage.getItem('user_details'))
    }
  },
  mounted() {
    this.getJobs()
  },
  computed: {
    filterData() {
      return this.companies.filter(item => {
        if (item) return this.filter === '' || item.towingCompanies[0].zipCode === null || item.towingCompanies[0].zipCode.includes(this.filter)
      }
      )
    }
  },
  methods: {
    async getJobs() {
      const jobs = axios.get(`${import.meta.env.VITE_LIVE}/company`);
      Promise.all([jobs]).then((res) => {
        this.$data.companies = res[0].data;
        console.log(res[0].data);
      }).catch((err) => {
        console.log(err);
      })
    },
    async addrating(id,index) {
      if(this.inputValue[index]>=0 && this.inputValue[index]<=5)
      {
        const rating = {
          companyId: id,
          rating: this.inputValue[index],
          user: JSON.parse(localStorage.getItem('user_details')).userid
        }
        axios.post(`${import.meta.env.VITE_LIVE}/rating`, rating).then((res) => {
          alert('Rated Successfully')
          this.getJobs()
        })
      }
      else{
        alert('Rate Between 0 to 5')
      }
    },
  },
}
</script>

<style scoped>

</style>