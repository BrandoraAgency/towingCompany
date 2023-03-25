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
            <p>CREDIT CARD AUTHORIZATION FORM</p>
          </div>
        </div>
        <form action="" class="creditForm" @submit="onsubmit">
          <b-row>
            <b-col>
              <div class="secLabel">
                <h4>Share Location:</h4>
              </div>
              <div class="locBtn">
                <button type="button" @click="getLocation">Share Current Location</button>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="form-group">
                <label for="input-latitude">Latitude</label>
                <input type="text" v-model="data.latitude" name="input-latitude" placeholder="Latitude" id="input-latitude" />
              </div>
            </b-col>
            <b-col>
              <div class="form-group">
                <label for="input-long">Longitude</label>
                <input type="text" v-model="data.longitude" name="input-long" placeholder="Longitude" id="input-long" />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="secLabel">
                <h4>Personal Information:
                </h4>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="First Name:" label-for="input-fname">
                <b-form-input id="input-fname" v-model="data.firstName" placeholder="John" type="text"
                  required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-1" label="Last Name:" label-for="input-lname">
                <b-form-input id="input-lname" v-model="data.lastName" placeholder="Stewart" type="text"
                  required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Phone Number:" label-for="input-pn">
                <b-form-input id="input-pn" placeholder="(432)-134-3243" v-model="data.phoneNumber" type="text"
                  maxlength="14" @input="onPhoneNumberInput" required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-1" label="Email:" label-for="input-email">
                <b-form-input id="input-email" v-model="data.email" placeholder="abc@gmail.com" type="text"
                  required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Upload Photo ID-Front:" label-for="input-idF">
                <input type="file" id="input-idF" required @change="(e)=>{idf=e.target.files[0]}">
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-1" label="Upload Photo ID - Back:" label-for="input-idB">
                <input type="file" id="input-idB" required @change="(e)=>{idb=e.target.files[0]}">
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="secLabel">
                <h4>Towing Information:</h4>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Service" label-for="input-insA">
                <b-form-select :options="services" v-model="data.service" id="input-insA" required></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group v-if="data.service==='Tow'" id="input-group-1" label="Miles:" label-for="input-miles">
                <b-form-input id="input-miles" v-model="data.miles" placeholder="Miles" type="text"
                  required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="secLabel">
                <h4>Payment Information:</h4>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Cardholder Billing Address:" label-for="input-dhBA">
                <b-form-input id="input-dhBA" placeholder="1597 Snyder Avenue" type="text" v-model="data.billingAddress"
                  required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-1" label="Cardholder Billing Zip Code:" label-for="input-chzbc">
                <b-form-input id="input-chzbc" v-model="data.billingZip" placeholder=" 28052" type="text"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Payment Total Amount:" label-for="input-totalAmount">
                <b-form-input id="input-totalAmount" v-model="data.Amount" placeholder="$" type="text"
                  required></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="Upload Credit / Debit Card Front:" label-for="input-ca">
                <input type="file" name="" id="input-ca" required @change="(e)=>{cardf=e.target.files[0]}">
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-1" label="Upload Credit / Debit Card Back:" label-for="input-cb">
                <input type="file" name="" id="input-cb" required @change="(e)=>{cardb=e.target.files[0]}">
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="secLabel">
                <h4>Signature:</h4>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                * I Authorize to charge my credit / debit card for agreed upon service offered. I understand this purchase
                is final. If additional fees are needed for any reason we will request, to complete services. I understand
                ETA's are an estimate and can change. I understand I will not be refunded once services are provided.
                Please be advised that there will be a 50% to 100% cancellation charge of full amount quoted, included in
                cancellation fee charge based on service(s) requested if I choose to cancel. This is subject to change but
                will be enforced when cancellation is due to but not limited to GOA, changing of service provider, or not
                needing service after a driver has been dispatched, or dispute of ETA time given being extended due to
                matters out of our control.
              </b-form-checkbox>
              <span>There will be a $59 cancellation fee if any reason accrues and the client decides to cancel</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="signatureDiv">
                <button class="clearBtn" @click="clear" type="button">Clear</button>
                <label for="">Sign here</label>
                <Vue3Signature ref="signature1" :sigOption="option" :w="'100%'" :h="'400px'" :disabled="disabled"
                  class="example"></Vue3Signature>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="submitBtnForm">
                <button type="submit" v-bind:class="issubmit" v-bind:disabled="issubmit">Submit</button>
              </div>
            </b-col>
            <b-col>
              <div class="submitBtnForm" v-if="isErr">
              <span>
                Email Not Send
              </span>
              </div>
              <div class="submitBtnForm" v-else>
                <span>
                  Email Send
                </span>
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
import { ref , isProxy, toRaw } from 'vue'
export default {
  setup() {
    const option = {
      penColor: 'rgb(0, 0, 0)',
      backgroundColor: 'rgb(255,255,255)'
    }

    const signature1 = ref(null)

    const save = async (t) => {
      console.log(t)
      const imageDataUrl = signature1.value.save(t)
      const blob = await (await fetch(imageDataUrl)).blob();
      return blob;
      // const imageUrl = window.URL.createObjectURL(blob);
      // window.open(imageUrl, '_blank');
    }

    const clear = () => {
      signature1.value.clear()
    }
    return {
      option,
      signature1,
      save,
      clear
    }
  },
  data() {
    return {
      phoneNumber: '',
      services: [
        { value: 'Tow', text: 'Tow' },
        { value: 'Lock Out', text: 'Lock Out' },
        { value: 'Tire Change', text: 'Tire Change' },
        { value: 'Winch Out', text: 'Winch Out' },
        { value: 'Fuel Delivery (5 Gal.)', text: 'Fuel Delivery (5 Gal.)' }
      ],
      issubmit:false,
      isErr:false,
      data: {

      },
      idf:{},
      idb:{},
      cardf:{},
      cardb:{},
      sign:{},
    }
  },
  methods: {
    async onsubmit(e) {
      e.preventDefault();
      
      const formData = new FormData();
      const sign= await this.save();
      formData.append('longitude', this.data.longitude);
      formData.append('latitude', this.data.latitude);
      formData.append('firstName', this.data.firstName);
      formData.append('lastName', this.data.lastName);
      formData.append('phonenumber', this.data.phoneNumber);
      formData.append('email', this.data.email);
      formData.append('service', this.data.service);
      formData.append('miles', this.data.miles);
      formData.append('billAddress', this.data.billingAddress);
      formData.append('billZip', this.data.billingZip);
      formData.append('Amount', this.data.Amount);
      formData.append('idfront', this.idf);
      formData.append('idBack', this.idb);
      formData.append('cardFront', this.cardf);
      formData.append('cardBack', this.cardb);
      formData.append('sign',sign);
      this.$data.issubmit=true
      console.log(formData);
      axios.post(`${import.meta.env.VITE_LIVE}/email`, formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((result) => {
      this.$data.issubmit=false
      }).catch((err) => {
      this.$data.issubmit=false
      this.$data.isErr=true;
      });
    },
    onPhoneNumberInput(event) {
      // // Remove all non-digit characters from input value
      const rawValue = event.replace(/\D/g, '');

      // Apevent.target.valueply the phone number format (###) ###-####
      const formattedValue = rawValue.replace(/^(\d{0,3})?(\d{0,3})?(\d{0,4})?/, (match, p1, p2, p3) => {
        let parts = [];
        if (p1) parts.push(`(${p1})`);
        if (p2) parts.push(`${p2}-`);
        if (p3) parts.push(p3);
        let result = parts.join('');
        return result.substring(0, 14); // limit length to 14 characters
      });

      // Update the phone number value
      this.phoneNumber = formattedValue;
    },
    getLocation() {
      if (!("geolocation" in navigator)) {
        this.errorStr = 'Geolocation is not available.';
        return;
      }
      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(pos => {
        this.data.longitude = pos.coords.longitude;
        this.data.latitude = pos.coords.latitude;
      }, err => {
        console.log(err);
        alert('location issue')
      },{timeout:10000})
    }
  },
}
</script>

<style>
.submitBtnForm {
  margin: 10px 0px  45px 0px;
}
.signatureDiv {
  position: relative;
}
.signatureDiv canvas {
  border-radius: 18px;
  border: 2px solid #000;
}
button.clearBtn {
  right: 0px;
  top: 30px;
  position: absolute;
}

.signatureDiv .example {
  cursor: crosshair;
}
</style>