<template>
  <NavBar />
  <div class="inputparentflexdiv">
    <div class="toandinputflexdiv">
      <p>From:</p>
      <input type="date" v-model="fromDate" @change="filterJobs" />
    </div>

    <div class="toandinputflexdiv">
      <p>To:</p>
      <input type="date" v-model="toDate" @change="filterJobs" />
    </div>
    <!-- <div class="filters"> -->

    <div class="allbtnsdiv">
      <button @click="filterDaily">Daily</button>
      <button @click="filterWeekly">Weekly</button>
      <button @click="filterMonthly">Monthly</button>
      <button @click="filterYearly">Yearly</button>
    </div>
    <!-- </div> -->
  </div>
  <div class="JobCompleted-container">
    <div class="inside">
      <div class="jobs">
        <p>Completed Jobs : {{ completedJobs }}</p>
        <p>Cancelled Jobs : {{ cancelledJobs }}</p>
        <p>Pending Jobs : {{ pendingJobs }}</p>
        <p>GOA jobs</p>:{{ goaJobs }}
        <p>Total Jobs : {{ totaljobs }}</p>
        <!-- <p>Total Jobs : {{ JobsDetails.length }}</p> -->
      </div>

      <Line :data="data" :options="options" />
    </div>

    <LineChart :fromDate="fromDate" :toDate="toDate" />
  </div>

  <div class="bar-chat">
    <TradeCountBarChart :fromDate="fromDate" :toDate="toDate" />
    <EnsuranceCompaniesBar :fromDate="fromDate" :toDate="toDate" />
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
import NavBar from "../Nav/NavBar.vue";
let JobsDetails = [];
let totaljobs = 0;
let pendingJobs = 0;
let cancelledJobs = 0;
let completedJobs = 0;
let goaJobs=0;

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
    NavBar,
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
            text: ["JOBS COMPLETED BY TOWING"], // Title indicating jobs completed
            font: {
              size: 18,
            },
          },
        },
      },
      filteredJobs: [],
      fromDate: "2023-12-01",
      toDate: "2024-03-01",
    };
  },
  mounted() {
    this.getJobs();
    this.setCurrentMonth();
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
    setCurrentMonth() {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.fromDate = firstDayOfMonth.toISOString().split('T')[0];
    this.toDate = lastDayOfMonth.toISOString().split('T')[0];
    this.filterJobs();
  },
  filterDaily() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  this.fromDate = yesterday.toISOString().split("T")[0];
  this.toDate = today.toISOString().split("T")[0];
  this.filterJobs();
},
    filterWeekly() {
      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);
      this.fromDate = oneWeekAgo.toISOString().split("T")[0];
      this.toDate = today.toISOString().split("T")[0];
      this.filterJobs();
    },
    filterMonthly() {
      const today = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(today.getMonth() - 1);
      this.fromDate = oneMonthAgo.toISOString().split("T")[0];
      this.toDate = today.toISOString().split("T")[0];
      this.filterJobs();
    },
    filterYearly() {
      const today = new Date();
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(today.getFullYear() - 1);
      this.fromDate = oneYearAgo.toISOString().split("T")[0];
      this.toDate = today.toISOString().split("T")[0];
      this.filterJobs();
    },
    filterJobs() {
      console.log("this is ", this.fromDate, this.toDate);
      if (this.fromDate && this.toDate) {
        const from = new Date(this.fromDate);
        const to = new Date(this.toDate);
        this.pendingJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return jobDate >= from && job.jobStatus == "pending" && jobDate <= to;
        }).length;
        this.cancelledJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "cancelled" && jobDate <= to
          );
        }).length;
        this.completedJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "completed" && jobDate <= to
          );
        }).length;
        this.filteredJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus !== "completed" && jobDate <= to
          );
        });
        this.goaJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "goa" && jobDate <= to
          );
        }).length;
        this.totaljobs = this.filteredJobs.length;
        // this.totaljobs = this.filteredJobs.length;

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
  /* height: 46vh; */
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
  border-right: #ececec 1px solid;
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
  align-items: center;
}

.toandinputflexdiv {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.inputparentflexdiv input {
  padding: 0.6rem 3rem;
  background-color: rgb(243, 242, 241);
  border: none;
  border-radius: 5px;
  outline: none;
}
.jobs {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 20px;
}
.filters {
  display: flex;
  gap: 20px;
  align-items: center;
  /* justify-content: ; */
  /* justify-content: center; */
  /* margin-top: 20px; */
  padding: 20px;
  border-bottom: #ececec 1px solid;
  width: 100%;
  /* border: 1px solid red; */
}

.allbtnsdiv {
  margin-left: 5rem;
}

.allbtnsdiv button {
  border: none;
  padding: 0.4rem 3rem;
  border-radius: 5px;
  margin-top: 1.5rem;
  margin-left: 1rem;
}
</style>
