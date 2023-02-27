<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="towingFHead">
          <div class="towingHeading">
            <h2>
              Towing Service
            </h2>
          </div>
          <div class="headDesc">
            <p>Dispatch FORM</p>
          </div>
        </div>
        <b-row>
          <b-col xs="6">
            <div class="jobtowing details">
              <div class="singledetail">
                <b-row>
                  <b-col>
                    <span>
                      Make
                    </span>
                  </b-col>
                  <b-col>
                    <span>
                      {{ ticketData.job.make }}
                    </span>
                  </b-col>
                </b-row>
              </div>
              <div class="singledetail">
                <b-row>
                  <b-col>
                    <span>
                      Model
                    </span>
                  </b-col>
                  <b-col>
                    <span>
                      {{ ticketData.job.model }}
                    </span>
                  </b-col>
                </b-row>
              </div>
              <div class="singledetail">
                <b-row>
                  <b-col>
                    <span>
                      Year
                    </span>
                  </b-col>
                  <b-col>
                    <span>
                      {{ ticketData.job.year }}
                    </span>
                  </b-col>
                </b-row>
              </div>
              <div class="singledetail">
                <b-row>
                  <b-col>
                    <span>
                      Vin No
                    </span>
                  </b-col>
                  <b-col>
                    <span>
                      {{ ticketData.job.vinNo }}
                    </span>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
        <form action="" class="creditForm" @submit.prevent="handleSubmit">
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Upload Picture" label-for="input-ca">
                <input type="file" id="imageUpload" accept="image/*" @change="handleImageUpload" multiple>
                <b-form-text id="password-help-block">
                  Upload Upto 10 Pictures
                </b-form-text>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="submitBtnForm">
                <button type="submit">Submit</button>
              </div>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import router from '../../router';

export default {
  mounted() {
    this.getjobDetails()
  },
  data() {
    return {
      files: [],
      id: this.$route.query.ticket,
      ticketData: {
        job: {}
      }
    }
  },
  methods: {
    handleImageUpload(event) {
      const images = event.target.files;
      if (images.length > 10) {
        // alert the user that the limit has been exceeded
        alert('You can select up to 10 images only!');
        // clear the selected files
        event.target.value = '';
      }
      this.files = images;
    },
    handleSubmit() {
      const formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files", file);
      }
      formData.append('ticket', this.ticketData.ticketNumber);
      formData.append('job', this.ticketData.job.id);
      formData.append('id', this.ticketData.id);
      console.log(this.files);
      axios.post(`${import.meta.env.VITE_LIVE}/dispatchMail`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((result) => {
        alert('send')
      }).catch((err) => {
        alert('not Send')

      });
    },
    getjobDetails() {
      axios.get(`${import.meta.env.VITE_LIVE}/ticket?ticketNumber=${this.id}`).then((res) => {
        console.log(res);
        this.ticketData = res.data
      }).catch((err) => {
        alert('ticket is expired');
        router.push('/')
      })
    }
  }
}
</script>

<style scoped></style>