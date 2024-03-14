<template>
    <div class="Trade-container">

      <!-- <Line :data="data" :options="options" /> -->
<div>

</div>
      <Bar :data="barData" :options="barOptions" />
      <div class="inputparentflexdiv">
        <div class="toandinputflexdiv">
          <p>From:</p>
          <input type="date" v-model="fromDate" @change="filterJobs" />
        </div>

        <div class="toandinputflexdiv">
          <p>To:</p>
          <input type="date" v-model="toDate" @change="filterJobs" />
        </div>
      </div>
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
    components: {

      Bar,
    },
    data() {
      return {

        barData: {
          labels: ['COMPANY 1', 'COMPANY 2', 'COMPANY 3'],
          datasets: [{
            label: "TRADE NAME'S",
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
              text: 'JOBS COMPLETED BY TRADE NAME',
              font: { size: 18 }
            },
            legend: { display: true }
          }
        },
        filteredJobs: [],
        fromDate: "2023-12-01",
      toDate:"2024-03-01",
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
      filterJobs() {
        console.log("this is ", this.fromDate, this.toDate)
        if (this.fromDate && this.toDate) {
          const from = new Date(this.fromDate);
          const to = new Date(this.toDate);
          this.filteredJobs = JobsDetails.filter(job => {
            const jobDate = new Date(job.date);
            return jobDate >= from  && job.jobStatus == "completed"&&jobDate <= to;
          });
          console.log("this isfilterjobs ", this.filteredJobs)
          this.updateChartData()
        }
      },
      updateChartData() {
        const tradeNames = {}; // Object to store completed jobs count by trade name

this.filteredJobs.forEach(job => {
  const tradeName = job.Trade_Name !=null?job.Trade_Name:""; // Trim whitespace from trade name
  tradeNames[tradeName] = (tradeNames[tradeName] || 0) + 1; // Increment count for trade name
});

// Convert trade names object to arrays for labels and data
const labels = Object.keys(tradeNames);
const data = Object.values(tradeNames);
console.log("this is labels", labels);
console.log("this is data", tradeNames);

this.barData = {
  labels,
  datasets: [{
    label: 'Completed Jobs by Trade Name',
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
    border-right : #ececec 1px solid;
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
  </style>
