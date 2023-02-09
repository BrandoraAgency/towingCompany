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
            <b-tbody>
              <b-tr v-for="company in filterData">
                <b-th>{{ company.towingCompanies[0].name }}</b-th>
                <b-td>{{ company.towingCompanies[0].contact }}</b-td>
                <b-td>{{ company.phone }}</b-td>
                <b-td>{{ company.towingCompanies[0].zipCode }}</b-td>
                <td>
                  <input v-model="inputValue" @input="validateInput" />
                  <button @click="addrating(company.id)">Rate</button>
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
      inputValue: 0,
      filter: ''
    }
  },
  mounted() {
    this.getJobs()
  },
  computed: {
    filterData() {
      return this.companies.filter(item => {
        if (item.towingCompanies[0]) return this.filter === '' || item.towingCompanies[0].zipCode === null || item.towingCompanies[0].zipCode.includes(this.filter)
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
    async addrating(id){
      const rating={
        companyId:id,
        rating:this.inputValue,
        user:JSON.parse(localStorage.getItem('user_details')).userid
      }
      axios.post(`${import.meta.env.VITE_LIVE}/rating`, rating).then((res)=>{
        alert('done')
      })
    },
    validateInput() {
      if (this.inputValue < 0 || this.inputValue > 5) {
        this.inputValue = 0;
      }
    }
  },
}
</script>

<style scoped>

</style>