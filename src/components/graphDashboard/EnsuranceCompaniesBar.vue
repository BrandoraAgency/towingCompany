<template>

    <div class="Trade-container">

      <Bar :data="barData" :options="barOptions" />
      <div class="info">
      <div  v-for="(label, index) in barData.labels" :key="index">
      <p>{{ label }}: {{ barData.datasets[0].data[index] }} jobs</p>
    </div>
  </div>
      <!-- <div class="filters">
      <button @click="filterDaily">Daily</button>
    <button @click="filterWeekly">Weekly</button>
    <button @click="filterMonthly">Monthly</button>
    <button @click="filterYearly">Yearly</button>
    </div>


      <div class="inputparentflexdiv">
        <div class="toandinputflexdiv">
          <p>From:</p>
          <input type="date" v-model="fromDate" @change="filterJobs" />
        </div>

        <div class="toandinputflexdiv">
          <p>To:</p>
          <input type="date" v-model="toDate" @change="filterJobs" />
        </div>
      </div> -->
    </div>
  </template>

  <script lang="ts">
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'
  import { Line, Bar } from 'vue-chartjs'
  import axios from 'axios'

  let JobsDetails = []

  ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend)

  export default {
    name: 'App',
    props:['fromDate','toDate'],

    components: {

      Bar,
    },
    computed: {
    dateRange() {
      return { fromDate: this.fromDate, toDate: this.toDate };
    },
  },
  watch: {
    dateRange: {
      handler() {
        this.filterJobs();
      },
      deep: true,
    },
    jobs() {
      this.filterJobs();
    },
  },
    data() {
      return {

        barData: {
          labels: ['COMPANY 1', 'COMPANY 2', 'COMPANY 3'],
          datasets: [{
            label: 'INSURANCE COMPANIES',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [10, 20, 30]
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,

              font: { size: 18 }
            },
            legend: { display: true }
          }
        },
        barOptions: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "JOBS COMPLETED BY INSURANCE COMPANIES",
              font: { size: 18 }
            },
            legend: { display: true }
          }
        },
        filteredJobs: [],
      //   fromDate: "2023-12-01",
      // toDate:"2024-03-01",
      }
    },
    mounted() {
      this.getJobs()
    },
    methods: {
      async getJobs() {
        try {
          const access = JSON.parse(localStorage.getItem("user_details")).role
          console.log("thisis", access)
          const response = await axios.get(`${import.meta.env.VITE_LIVE}/jobs?role=${access}`)
          JobsDetails = response.data
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      },
      filterDaily() {
      const today = new Date();
      this.fromDate = today.toISOString().split('T')[0];
      this.toDate = today.toISOString().split('T')[0];
      this.filterJobs();
    },
    filterWeekly() {
      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);
      this.fromDate = oneWeekAgo.toISOString().split('T')[0];
      this.toDate = today.toISOString().split('T')[0];
      this.filterJobs();
    },
    filterMonthly() {
      const today = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(today.getMonth() - 1);
      this.fromDate = oneMonthAgo.toISOString().split('T')[0];
      this.toDate = today.toISOString().split('T')[0];
      this.filterJobs();
    },
    filterYearly() {
      const today = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      this.fromDate = oneYearAgo.toISOString().split('T')[0];
      this.toDate = today.toISOString().split('T')[0];
      this.filterJobs();
    },
      filterJobs() {
        console.log("this is ", this.fromDate, this.toDate)
        if (this.fromDate && this.toDate) {
          const from = new Date(this.fromDate);
          const to = new Date(this.toDate);
          this.filteredJobs = JobsDetails.filter(job => {
            const jobDate = new Date(job.date);
            return jobDate >= from  && jobDate <= to;
          });
          console.log("this isfilterjobs ", this.filteredJobs)
          this.updateChartData()
        }
      },
      updateChartData() {
        const insuranceAccounts = {};

  // Initialize insurance accounts with completed jobs count as 0
  this.filteredJobs.forEach(job => {
    if (job.jobStatus === "completed" && job.issuranceAccount) {
      if (!insuranceAccounts[job.issuranceAccount]) {
        insuranceAccounts[job.issuranceAccount] = 0;
      }
      insuranceAccounts[job.issuranceAccount]++;
    }
  });

  // Convert insuranceAccounts object to labels and data for the bar chart
  const labels = Object.keys(insuranceAccounts);
  const data = Object.values(insuranceAccounts);

  this.barData = {
    labels,
    datasets: [{
      label: "JOBS COMPLETED BY INSURANCE COMPANIES",
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      data
    }]
};
        // Implement your logic to update chart data here
      }
    }
  }
  </script>

  <style scoped>
  *{
  margin: 0;
  padding:0;
}
  .Trade-container {
    width: 50%;
   padding: 20px;

    /* height: 20rem; */
  }
  .inputparentflexdiv {
  display: flex;
  gap: 2rem;
}

.toandinputflexdiv {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.inputparentflexdiv input {
  padding: 0.4rem 2rem;
  background-color: rgb(243, 242, 241);
  border: none;
  border-radius: 5px;
  outline: none;
}
.filters{
  display: flex;
  gap: 20px;
  /* justify-content: center; */
  /* margin-top: 20px; */
  padding: 20px;
  border-bottom: #ececec 1px solid ;
  width: 100%;
  /* border: 1px solid red; */
}
.filters button{
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f3f2f1;
  outline: none;
}
.info{
  display: flex;
  gap:20px;
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: center;
}

  </style>
