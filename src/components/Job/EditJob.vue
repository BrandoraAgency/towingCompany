<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="headText">
                    <h3>Edit Towing Job - Reference # {{ job.job ? job.job.id : 'd' }}</h3>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Date" label-for="input-date">

                                <b-form-input id="input-date" v-model="job.job.date" type="date" placeholder="Date"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Time" label-for="input-time">
                                <b-form-input id="input-time" v-model="job.job.time" type="time" placeholder="time"
                                    required></b-form-input>
                            </b-form-group>

                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Job Status" label-for="input-jStatus">
                                <b-form-select id="input-jStatus" @change="changeAmount"  v-model="job.job.jobStatus" :options="jobStatus"
                                    required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Agent" label-for="input-agent">
                                <b-form-input id="input-agent" v-model="job.job.agent" placeholder="John"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Representative" label-for="input-Rep">
                                <b-form-input id="input-Rep" v-model="job.job.representative" required></b-form-input>
                            </b-form-group>
                        </b-col>
                         <b-col>
                            <b-form-group id="input-group-1" label="Trade Name" label-for="input-trade">
                                <b-form-select id="input-trade" :options="tradeNames" v-model="job.job.Trade_Name" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="PO#" label-for="input-po">
                                <b-form-input id="input-po" placeholder="PO Number" v-model="job.job.poNo" type="text"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Provider ID" label-for="input-provider">
                                <b-form-input id="input-provider" v-model="job.job.providerID" placeholder="1234"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Insurance Account" label-for="input-insA">
                                <b-form-select id="input-insA" :options="IssAccount" v-model="job.job.issuranceAccount"
                                    placeholder="$" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Amount" label-for="input-amount">
                                <b-form-input id="input-amount" placeholder="$" v-model="job.job.amount"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Job Charged Date" label-for="input-icd">
                                <b-form-input id="input-icd" v-model="job.job.issChargedDate" placeholder="1234"
                                    type="date" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Job Time" label-for="input-insA">
                                <b-form-input id="input-insA" type="time" v-model="job.job.issChargedTime"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Charged" label-for="input-charged">
                                <b-form-select id="input-charged" v-model="job.job.charged_status" :options="Charged"
                                    required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="First Name" label-for="input-fname">
                                <b-form-input id="input-fname" v-model="job.job.firstName" placeholder="Name"
                                    type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Last Name" label-for="input-lname">
                                <b-form-input id="input-lname" placeholder="Name" v-model="job.job.lastName"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Email" label-for="input-lname">
                                <b-form-input id="input-lname" placeholder="Email" type="email" v-model="job.job.Email"
                                    ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Phone Number" label-for="input-po">
                                <b-form-input id="input-po" placeholder="Phone Number" v-model="job.job.phone" type="text"
                                    ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Year" label-for="input-year">
                                <b-form-input id="input-year" v-model="job.job.year" placeholder="2023" type="text"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Make" label-for="input-make">
                                <b-form-input id="input-make" v-model="job.job.make" placeholder="Make"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Model" label-for="input-model">
                                <b-form-input id="input-model" v-model="job.job.model" placeholder="Model"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Color" label-for="input-Color">
                                <b-form-input id="input-Color" v-model="job.job.color" placeholder="Color"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="VIN #" label-for="input-VN">
                                <b-form-input id="input-VN" v-model="job.job.vinNO" placeholder="Model"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="State" label-for="input-State">
                                <b-form-select id="input-State" v-model="job.job.state" :options="State"
                                    placeholder="Name" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Miles" label-for="input-Miles">
                                <b-form-input v-model="job.job.miles" id="input-Miles" placeholder="Miles"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Upsell Amount" label-for="input-State">
                                <b-form-input id="input-State" v-model="job.job.upSellAmount" placeholder="$"
                                    type="number" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="UpSell Charged" label-for="input-uscharged">
                                <b-form-select id="input-uscharged" v-model="job.job.upSellCharged"
                                    :options="upsellCharged" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <div class="headtext">
                                <h4>Towing Company Information</h4>
                            </div>
                            <b-row>
                                <b-col>
                                    <b-form-checkbox v-on:change="showCompanyForm" id="checkbox-1" name="checkbox-1"
                                        value="true" unchecked-value="false">
                                        Towing Company
                                    </b-form-checkbox>
                                </b-col>
                            </b-row>
                            <div class="companyform" v-if="show">
                                <b-row>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Pick up Location"
                                            label-for="input-puLoc">
                                            <b-form-input id="input-puLoc" v-model="job.jobCompany.pickUp"
                                                placeholder="123 street" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Drop off Location"
                                            label-for="input-puLoc">
                                            <b-form-input id="input-puLoc" v-model="job.jobCompany.dropoff"
                                                placeholder="123 street"></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Agent" label-for="input-cAgent">
                                            <b-form-input id="input-cAgent" v-model="job.jobCompany.Agent"
                                                placeholder="host" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Name" label-for="input-tname">
                                            <b-form-input id="input-tname" v-model="job.jobCompany.name"
                                                placeholder="Name" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Phone" label-for="input-tphone">
                                            <b-form-input id="input-tphone" v-model="job.jobCompany.company.phone"
                                                placeholder="000-00-00" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Contact"
                                            label-for="input-tcontact">
                                            <b-form-input id="input-tcontact" v-model="job.jobCompany.contact"
                                                placeholder="contact" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Zip" label-for="input-tZip">
                                            <b-form-input id="input-tZip" v-model="job.jobCompany.zipCode"
                                                placeholder="26000" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Charged"
                                            label-for="input-tcharged">
                                            <b-form-input id="input-tcharged" v-model="job.jobCompany.charged"
                                                placeholder="$" type="number" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Towing Charged Date"
                                            label-for="input-tphone">
                                            <b-form-input id="input-tphone" v-model="job.jobCompany.chargedDate"
                                                type="date" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col>
                                        <b-form-group id="input-group-1" label="Time" label-for="input-tcontact">
                                            <b-form-input id="input-tcontact" v-model="job.jobCompany.chargedTime"
                                                type="time" required></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4">
                                        <b-form-group id="input-group-1" label="Towing status"
                                            label-for="input-tstatus">
                                            <b-form-select id="input-tstatus" v-model="job.jobCompany.paymentStatus"
                                                :options="towingStatus" required></b-form-select>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="4">
                                        <b-form-group id="input-group-1" label="Email"
                                            label-for="input-tstatus">
                                            <b-form-input placeholder="Email" type="email" id="input-tstatus" v-model="job.jobCompany.Email"></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col cols="4">
                                        <b-form-group id="input-group-1" label="Notes" label-for="input-notes">
                                            <b-form-textarea rows="4" max-row="6" id="input-notes" v-model="job.jobCompany.Notes"
                                                placeholder="Notes" required></b-form-textarea>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="4">
                                        <b-form-group id="input-group-1" label="Address" label-for="input-notes">
                                            <b-form-input id="input-notes" v-model="job.jobCompany.address"
                                                placeholder="Address" ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                    <b-button @click="submitChanges" variant="primary">Submit</b-button>
                    <b-button v-if="role !== 'admin' && role !== 'accountant'" @click="addAssign" variant="primary">Assign to {{ passto }}</b-button>
                    <b-button v-if="(role === 'admin' || role === 'accountant' || role === 'qc') && !job.job.isApproved" @click="addApprove" variant="primary">Approve</b-button>
                    <b-button @click="back" variant="danger">Back</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script >
import axios from 'axios';
import router from '../../router';

export default {
    data() {
        return {
            tradeNames: ['Service Wise', 'Life Line', 'Best Choice', 'Delta'],
            id: this.$route.params.jobID,
            roles: [],
            goa:false,
            passto: JSON.parse(localStorage.getItem("user_details")).to,
            role: JSON.parse(localStorage.getItem("user_details")).role,
            jobStatus: [
                { value: null, text: 'Please Select Job Status' },
                { value: 'pending', text: 'Pending' },
                { value: 'completed', text: 'Completed' },
                { value: 'goa', text: 'GOA' },
                { value: 'cancelled', text: 'Cancelled' }
            ],
            upsellCharged: [
                { value: 'upsell', text: 'upsell' },
                { value: 'noupsell', text: 'No Upsell' },
                { value: 'pending', text: 'pending' },
                { value: 'submitted', text: 'submitted' }
            ],
            State: [
                {
                    text: "Alabama",
                    value: "AL"
                },
                {
                    text: "Alaska",
                    value: "AK"
                },
                {
                    text: "American Samoa",
                    value: "AS"
                },
                {
                    text: "Arizona",
                    value: "AZ"
                },
                {
                    text: "Arkansas",
                    value: "AR"
                },
                {
                    text: "California",
                    value: "CA"
                },
                {
                    text: "Colorado",
                    value: "CO"
                },
                {
                    text: "Connecticut",
                    value: "CT"
                },
                {
                    text: "Delaware",
                    value: "DE"
                },
                {
                    text: "District Of Columbia",
                    value: "DC"
                },
                {
                    text: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    text: "Florida",
                    value: "FL"
                },
                {
                    text: "Georgia",
                    value: "GA"
                },
                {
                    text: "Guam",
                    value: "GU"
                },
                {
                    text: "Hawaii",
                    value: "HI"
                },
                {
                    text: "Idaho",
                    value: "ID"
                },
                {
                    text: "Illinois",
                    value: "IL"
                },
                {
                    text: "Indiana",
                    value: "IN"
                },
                {
                    text: "Iowa",
                    value: "IA"
                },
                {
                    text: "Kansas",
                    value: "KS"
                },
                {
                    text: "Kentucky",
                    value: "KY"
                },
                {
                    text: "Louisiana",
                    value: "LA"
                },
                {
                    text: "Maine",
                    value: "ME"
                },
                {
                    text: "Marshall Islands",
                    value: "MH"
                },
                {
                    text: "Maryland",
                    value: "MD"
                },
                {
                    text: "Massachusetts",
                    value: "MA"
                },
                {
                    text: "Michigan",
                    value: "MI"
                },
                {
                    text: "Minnesota",
                    value: "MN"
                },
                {
                    text: "Mississippi",
                    value: "MS"
                },
                {
                    text: "Missouri",
                    value: "MO"
                },
                {
                    text: "Montana",
                    value: "MT"
                },
                {
                    text: "Nebraska",
                    value: "NE"
                },
                {
                    text: "Nevada",
                    value: "NV"
                },
                {
                    text: "New Hampshire",
                    value: "NH"
                },
                {
                    text: "New Jersey",
                    value: "NJ"
                },
                {
                    text: "New Mexico",
                    value: "NM"
                },
                {
                    text: "New York",
                    value: "NY"
                },
                {
                    text: "North Carolina",
                    value: "NC"
                },
                {
                    text: "North Dakota",
                    value: "ND"
                },
                {
                    text: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    text: "Ohio",
                    value: "OH"
                },
                {
                    text: "Oklahoma",
                    value: "OK"
                },
                {
                    text: "Oregon",
                    value: "OR"
                },
                {
                    text: "Palau",
                    value: "PW"
                },
                {
                    text: "Pennsylvania",
                    value: "PA"
                },
                {
                    text: "Puerto Rico",
                    value: "PR"
                },
                {
                    text: "Rhode Island",
                    value: "RI"
                },
                {
                    text: "South Carolina",
                    value: "SC"
                },
                {
                    text: "South Dakota",
                    value: "SD"
                },
                {
                    text: "Tennessee",
                    value: "TN"
                },
                {
                    text: "Texas",
                    value: "TX"
                },
                {
                    text: "Utah",
                    value: "UT"
                },
                {
                    text: "Vermont",
                    value: "VT"
                },
                {
                    text: "Virgin Islands",
                    value: "VI"
                },
                {
                    text: "Virginia",
                    value: "VA"
                },
                {
                    text: "Washington",
                    value: "WA"
                },
                {
                    text: "West Virginia",
                    value: "WV"
                },
                {
                    text: "Wisconsin",
                    value: "WI"
                },
                {
                    text: "Wyoming",
                    value: "WY"
                }
            ],
            IssAccount: [
                { value: null, text: 'Please Select Account' },
                { value: 'Geico', text: 'Geico' },
                { value: 'state farm', text: 'state farm' },
                { value: 'swoop', text: 'swoop' },
                { value: 'agero', text: 'agero' },
                { value: 'progressive', text: 'progressive' },
                { value: 'mercury', text: 'mercury' },
                { value: 'all state', text: 'all state' },
                { value: 'aaa', text: 'aaa' },
                { value: 'private', text: 'private' },
                { value: 'roadside', text: 'Roadside Protect' },
                { value: 'allied_dispatch', text: 'Allied Dispatch' },
                { value: 'nation_safe', text: 'Nation Safe Drivers' },
                { value: 'safe_travels', text: 'Safe Travels' },
                { value: 'ryders', text: 'Ryders' },
                { value: 'quest_towing', text: 'Quest Towing Services' },
                { value: 'safer_road', text: 'Safer Road Rescue' },
                { value: 'dmggo', text: 'DMGGO' },
            ],
            towingStatus: [
                { value: null, text: 'Please Select Status' },
                { value: 'paid', text: 'paid' },
                { value: 'notPaid', text: 'not Paid' },
            ],
            Charged: [
                { value: 'pending', text: 'pending' },
                { value: 'submitted', text: 'submitted' },
                { value: 'paid', text: 'paid' },
            ],
            show: false,
            job: {
                job: {},
                jobCompany: {
                    company: {
                    }
                },
            },
            oldJob: {}
        }
    },
    mounted() {
        this.getJobs()
    },
    methods: {
        changeAmount(e){
                if(e==='goa'){
                    if(!this.$data.goa)
                    {
                        this.$data.job.job.amount=this.$data.job.job.amount/2
                        this.$data.goa=true
                    }
                }
                else{
                    if(this.$data.goa){
                        this.$data.job.job.amount=this.$data.job.job.amount*2
                        this.$data.goa=false;
                    }
                }

        },
        back(){
            router.back()
        },
        addApprove(){
            this.$data.job.job.isApproved = true
            this.submitChanges()
        },
        addAssign() {
            this.$data.job.job.assignto = this.$data.passto
            this.submitChanges()
        },
        async submitChanges() {
            let payloadJob = {}
            let towinCompany =this.$data.job.job.towingCompany;
            delete this.$data.job.job.towingCompany;
            for (let key in this.$data.job.job) {
                if (this.$data.job.job[key] !== this.$data.oldJob.job[key]) {
                    console.log(key);
                    payloadJob[key] = this.$data.job.job[key];
                }
            }
            // for (let key in this.$data.job.jobCompany) {
            //     console.log(this.$data.job.jobCompany[key]);
            //     if (this.$data.job.jobCompany[key] !== this.$data.oldJob.job.towingCompany[key]) {
            //         payloadCompany[key] = this.$data.job.jobCompany[key];
            //     }
            // }
            const job_Payload = {
                job: payloadJob,
                id: this.$data.id
            }
            const company_Payload = {
                company: this.$data.job.jobCompany,
                id: this.$data.id
            }
            if (towinCompany !== null) {
                axios.all([
                    axios.put(`${import.meta.env.VITE_LIVE}/job`, job_Payload),
                    axios.put(`${import.meta.env.VITE_LIVE}/company`, company_Payload)
                ]).then(([jobres]) => {
                    alert('Job Updated')
                    router.push(`/jobs`)
                }).catch((err) => {
                    console.log('err');
                })
            }
            else {
                axios.all([
                    axios.put(`${import.meta.env.VITE_LIVE}/job`, job_Payload),
                    axios.post(`${import.meta.env.VITE_LIVE}/company`, company_Payload)
                ]).then(([jobres]) => {
                    alert('Job Updated')
                    router.push(`/jobs`)
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        showCompanyForm(e) {
            if (e === 'true') return this.$data.show = true
            this.$data.show = false
        },
        getJobs() {
            const jobs = axios.get(`${import.meta.env.VITE_LIVE}/editJob?id=${this.$data.id}`);
            Promise.all([jobs]).then((res) => {
                this.$data.goa=structuredClone(res[0].data).job.jobStatus==='goa'?true:false;
                this.$data.job = structuredClone(res[0].data);
                console.log(res[0].data);
                if (res[0].data.job.towingCompany) {
                    this.$data.job.jobCompany = structuredClone(res[0].data.job.towingCompany)
                    if(!this.$data.job.jobCompany.company)
                    {
                        this.$data.job.jobCompany.company= {}
                    }
                }
                else {
                    this.$data.job.jobCompany = {
                        company: {
                        }
                    };
                }
                this.$data.oldJob = structuredClone(res[0].data)
            }).catch((err) => {
                console.log(err);
            })
        },
    }
}
</script>

<style scoped>

</style>
