<template>
  <div class="Markup-container">
    <p>Markup :{{ totalMarkup }}</p>
    <Line :data="data" :options="options" />
    <!-- <div class="filters">
      <button @click="filterDaily">Daily</button>
    <button @click="filterWeekly">Weekly</button>
    <button @click="filterMonthly">Monthly</button>
    <button @click="filterYearly">Yearly</button>
    </div>

    <div class="inputparentflexdiv">
      <div class="toandinputflexdiv">
        <p>From:</p>
        <input

          type="date"
          v-model="fromDate"
          @change="filterJobs"
          :min="minDate"
        />
      </div>

      <div class="toandinputflexdiv">
        <p>To:</p>
        <input type="date" v-model="toDate" @change="filterJobs" />
      </div>
    </div> -->
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

let JobsDetails = [];
let monthlyMarkup
let totalMarkup

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
  props:['fromDate','toDate'],
  components: {
    Line,
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
      minDate: "2023-6-01",
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
            label: "MARKUP'S",
            data: [12, 13, 14, 15, 16, 17, 18, 78, 3, 1, 23, 34],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "TOWING MARKUP'S", // Title indicating jobs completed
            font: {
              size: 18,
            },
          },
          Legend: {
            display: true,
          },
        },
      },
      filteredJobs: [],
      // fromDate: "2023-12-01",
      // toDate:"2024-03-01",
      totalMarkup: 0,
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
      this.totalMarkup = 0;
      console.log("this is ", this.fromDate, this.toDate);
      if (this.fromDate && this.toDate) {
        const from = new Date(this.fromDate);
        const to = new Date(this.toDate);

        this.filteredJobs = JobsDetails.filter((job) => {
          const jobDate = new Date(job.date);
          return (
            jobDate >= from && job.jobStatus == "completed" && jobDate <= to
          );
        });
        console.log("this isfilterjobs ", this.filteredJobs);
        this.filteredJobs.forEach((job) => {
      this.totalMarkup += job.amount - ((job.towingCompany && job.towingCompany.charged) !== null ? job.towingCompany.charged : 0);
    });
        this.updateChartData();

      }
    },
    updateChartData() {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const startDate = new Date(this.fromDate);
  const endDate = new Date(this.toDate);

  const labels = [];
  const data = [];

  if (endDate - startDate < 24 * 60 * 60 * 1000) {
    // If the selected range is less than a day
    labels.push(`${startDate.getDate()} ${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`);
    data.push(this.calculateMarkupForDay(startDate));
  } else if (endDate - startDate < 7 * 24 * 60 * 60 * 1000) {
    // If the selected range is less than a week
    for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
      labels.push(`${day.getDate()} ${monthNames[day.getMonth()]} ${day.getFullYear()}`);
      data.push(this.calculateMarkupForDay(new Date(day)));
    }
  } else if (endDate - startDate < 31 * 24 * 60 * 60 * 1000) {
    // If the selected range is less than a month
    for (let weekStart = new Date(startDate); weekStart <= endDate; weekStart.setDate(weekStart.getDate() + 7)) {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      labels.push(`${weekStart.getDate()} ${monthNames[weekStart.getMonth()]} ${weekStart.getFullYear()} - ${weekEnd.getDate()} ${monthNames[weekEnd.getMonth()]} ${weekEnd.getFullYear()}`);
      data.push(this.calculateMarkupForWeek(weekStart, weekEnd));
    }
  } else {
    // If the selected range is a month or more
    for (let monthStart = new Date(startDate); monthStart <= endDate; monthStart.setMonth(monthStart.getMonth() + 1)) {
      const monthEnd = new Date(monthStart);
      monthEnd.setMonth(monthStart.getMonth() + 1);
      monthEnd.setDate(monthEnd.getDate() - 1);
      labels.push(`${monthNames[monthStart.getMonth()]} ${monthStart.getFullYear()}`);
      data.push(this.calculateMarkupForMonth(monthStart.getMonth(), monthStart.getFullYear()));
    }
  }

  this.data = {
    labels,
    datasets: [{ data }],
  };
    },

  calculateMarkupForDay(date) {
    let dailyMarkup = 0;

    this.filteredJobs.forEach((job) => {
      const jobDate = new Date(job.date);
      if (jobDate.getFullYear() === date.getFullYear() && jobDate.getMonth() === date.getMonth() && jobDate.getDate() === date.getDate()) {
        dailyMarkup += job.amount - ((job.towingCompany && job.towingCompany.charged) !== null ? job.towingCompany.charged : 0);
      }
    });

    return dailyMarkup;
  },

    calculateMarkupForMonth(month, year) {
      const monthStart = new Date(year, month, 1);
      const monthEnd = new Date(year, month + 1, 0);
      let monthlyMarkup = 0;

      this.filteredJobs.forEach((job) => {
        const jobDate = new Date(job.date);
        if (jobDate >= monthStart && jobDate <= monthEnd) {
         monthlyMarkup +=
            job.amount - ((job.towingCompany && job.towingCompany.charged) !== null
          ? job.towingCompany.charged
          : 0);
        }
      });

      return monthlyMarkup;
    },

    calculateMarkupForWeek(startDate, endDate) {
      let weeklyMarkup = 0;

      this.filteredJobs.forEach((job) => {
        const jobDate = new Date(job.date);
        if (jobDate >= startDate && jobDate <= endDate) {
          weeklyMarkup +=
            job.amount - ((job.towingCompany && job.towingCompany.charged) !== null
          ? job.towingCompany.charged
          : 0);
        }
      });

      return weeklyMarkup;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Markup-container {
  width: 50%;
  padding: 20px;

  /* height: 20rem; */
  display: block;
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
</style>
