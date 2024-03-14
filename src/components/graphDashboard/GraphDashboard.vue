<template>
  <div class="JobCompleted-container">
    <div class="inside">
      <div class="jobs" >
      <p>Completed Jobs : {{ totaljobs }}</p>
      <p>Cancelled Jobs : {{ cancelledJobs }}</p>
      <p>Pending Jobs : {{ pendingJobs }}</p>
    </div>
      <Line :data="data" :options="options" />

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

    <LineChart />
  </div>

  <div class="bar-chat">
    <TradeCountBarChart />
    <EnsuranceCompaniesBar />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "vue-chartjs";
import axios from "axios";
import LineChart from "./LineChart.vue";
import TradeCountBarChart from "./TradeCountBarChart.vue";
import EnsuranceCompaniesBar from "./EnsuranceCompaniesBar.vue";
let JobsDetails = [];
let totaljobs = 0;
let pendingJobs=0;
let cancelledJobs=0;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
    LineChart,
    TradeCountBarChart,
    EnsuranceCompaniesBar,
  },

  data() {
    return {
      data: {
        labels: [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
        datasets: [
          {
            label: "JOB'S COMPLETED",
            data: [12, 13, 14, 15, 16, 17, 18, 78, 3, 1, 23, 34],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: ['JOBS COMPLETED BY TOWING'], // Title indicating jobs completed
            font: {
              size: 18,
            },
          },
        },
      },
      filteredJobs: [],
      fromDate: "2023-12-01",
      toDate:"2024-03-01",
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    async getJobs() {
      try {
        const access = JSON.parse(localStorage.getItem("user_details")).role;
        console.log("thisis", access);
        const response = await axios.get(
          `${import.meta.env.VITE_LIVE}/jobs?role=${access}`
        );
        JobsDetails = response.data;

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    filterJobs() {
      console.log("this is ", this.fromDate, this.toDate);
      if (this.fromDate && this.toDate) {
        const from = new Date(this.fromDate);
        const to = new Date(this.toDate);
        this.pendingJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "pending" && jobDate <= to
          );
        }).length;
    this.cancelledJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "cancelled" && jobDate <= to
          );
        }).length;
        this.filteredJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "completed" && jobDate <= to
          );
        });
        this.totaljobs = this.filteredJobs.length;
        console.log("this isfilterjobs ", this.filteredJobs.length);
        this.updateChartData();
      }
    },
    updateChartData() {
      const startDate = new Date(this.fromDate);
      const endDate = new Date(this.toDate);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log("this is diffDays", diffDays);
      const labels = [];
      const data = [];
      if (diffDays <= 7) {
        for (let i = 0; i <= diffDays; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + i);
          labels.push(currentDate.toISOString().split("T")[0]);
          const jobsCompleted = this.filteredJobs.filter((job) => {
            const jobDate = new Date(job.date);
            return (
              jobDate.toISOString().split("T")[0] ===
              currentDate.toISOString().split("T")[0]
            );
          }).length;
          data.push(jobsCompleted);
        }
      } else {
        const currentYear = startDate.getFullYear();
        const currentMonth = startDate.getMonth();
        const monthsToShow = [];
        for (let i = 0; i <= diffDays; i++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + i);
          const yearMonth =
            currentDate.getFullYear() * 12 + currentDate.getMonth();
          if (!monthsToShow.includes(yearMonth)) {
            monthsToShow.push(yearMonth);
            labels.push(
              currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })
            );
            const jobsCompleted = this.filteredJobs.filter((job) => {
              const jobDate = new Date(job.date);
              return (
                jobDate.getFullYear() === currentDate.getFullYear() &&
                jobDate.getMonth() === currentDate.getMonth()
              );
            }).length;
            data.push(jobsCompleted);
          }
        }
      }
      this.data = {
        labels,
        datasets: [{ data }],
      };
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.JobCompleted-container {
  display: flex;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid gray;
  padding: 20px;
  /* border: 1px solid red; Adjust width as needed */
}
.inside {
  /* display: block; */
  display: flex;

  flex-direction: column;
  align-items: start;
  border-right: #ececec 1px solid ;
  width: 50%;
}
.bar-chat {
  display: flex;
  align-items: start;
  /* height: 20rem; */
  width: 100%;
  /* border: 1px solid blue; */
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
.jobs{
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 20px;
}
</style>
