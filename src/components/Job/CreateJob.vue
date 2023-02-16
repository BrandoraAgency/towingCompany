<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <b-form @submit.prevent="createJob">
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Date" label-for="input-date">
                                <b-form-input id="input-date" v-model="newJob.date" type="date" placeholder="Date"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Time" label-for="input-time">
                                <b-form-input id="input-time" v-model="newJob.time" type="time" placeholder="time"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Agent" label-for="input-agent">
                                <b-form-input id="input-agent" v-model="newJob.agent" placeholder="John"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="PO#" label-for="input-po">
                                <b-form-input id="input-po" v-model="newJob.poNo" placeholder="1234"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Issurance Account" label-for="input-isamount">
                                <b-form-select id="input-isamount" v-model="newJob.issuranceAccount"
                                    :options="IssAccount" placeholder="John" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Amount" label-for="input-Amount">
                                <b-form-input id="input-Amount" v-model="newJob.amount" type="number"
                                    placeholder="amount" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="First Name" label-for="input-fname">
                                <b-form-input id="input-fname" v-model="newJob.firstName" placeholder="Name" type="text"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Last Name" label-for="input-lname">
                                <b-form-input id="input-lname" v-model="newJob.lastName" placeholder="Name"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Year" label-for="input-year">
                                <b-form-input id="input-year" v-model="newJob.year" placeholder="2023" type="text"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Make" label-for="input-make">
                                <b-form-input id="input-make" v-model="newJob.make" placeholder="Make"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Model" label-for="input-model">
                                <b-form-input id="input-model" v-model="newJob.model" placeholder="Model"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Color" label-for="input-Color">
                                <b-form-input id="input-Color" v-model="newJob.color" placeholder="Color"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="VIN #" label-for="input-VN">
                                <b-form-input id="input-VN" v-model="newJob.vinNO" placeholder="Model"
                                    ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="State" label-for="input-State">
                                <b-form-select id="input-State" v-model="newJob.state" :options="State"
                                    required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Miles/Service Type" label-for="input-Miles">
                                <b-form-input id="input-Miles" v-model="newJob.miles" placeholder="Miles"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Notes" label-for="input-notes">
                                <b-form-textarea id="input-notes" v-model="newJob.notes" placeholder="Notes"
                                    ></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-button type="submit" variant="primary">Assign to Dispatch</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
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
            ],
            roles: [],
            newJob: {

            }
        }
    },
    mounted() {
       
    },
    methods: {
        async createJob() {
            this.$data.newJob.assignto = "dispatch"
            await axios.post(`${import.meta.env.VITE_LIVE}/job`, this.$data.newJob).then((res) => {
                alert('created')
                this.$data.newJob = {}
            }).catch((err) => {

            })
        }
    }
}
</script>

<style scoped>

</style>