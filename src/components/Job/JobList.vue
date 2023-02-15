<template>
    <div>
        <b-container fluid="">
            <b-row>
                <b-col>
                    <div class="filterHead">
                        <b-row>
                            <b-col>
                                <div class="headingF">
                                    <h3>Filter</h3>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="downloadCsv">
                                    <button @click="download">Download CSV</button>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <form action="">
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <label for="dateFrom">Date From</label>
                                    <input type="date" v-model="filter.start" name="datefrom" id="dateForm">
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="dateTo">Date To</label>
                                    <input type="date" v-model="filter.end" name="dateto" id="dateTo">
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-1" label="Job Status" label-for="input-issAcc">
                                    <b-form-select id="input-issAcc" v-model="filter.jobStatus" :options="jobStatus"
                                        required></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="po">PO #</label>
                                    <input type="number" name="po" v-model="filter.po" id="po">
                                </div>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-1" label="Insurance Account" label-for="input-issAcc">
                                    <b-form-select id="input-issAcc" v-model="filter.issAcc" :options="IssAccount"
                                        required></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-chrgedStatus" label="Charged Status"
                                    label-for="input-chrgedStatus">
                                    <b-form-select id="input-chrgedStatus" v-model="filter.charged" :options="Charged"
                                        required></b-form-select>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </form>
                </b-col>
            </b-row>
        </b-container>
        <div class="stats" v-if="role === 'admin' || role === 'accounting'">
            <b-container fluid>
                <b-row>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Insurance Amount
                            </span>
                            <span>
                                ${{ issuranceStats.amount }}
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                GOA Amount
                            </span>
                            <span>
                                {{ issuranceStats.goa }}
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Upsell Amount
                            </span>
                            <span>
                                {{ issuranceStats.upAmount }}
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Submitted Amount
                            </span>
                            <span>
                                {{ issuranceStats.SAmount }}
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Insurance Paid Amount
                            </span>
                            <span>
                                {{ issuranceStats.paid }}
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Towing Amount
                            </span>
                            <span>
                                {{ issuranceStats.towing }}
                            </span>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container fluid>
            <b-table-simple responsive>
                <b-thead>
                    <b-tr>
                        <b-th>Action</b-th>
                        <b-th>ID</b-th>
                        <b-th>S</b-th>
                        <b-th>Date</b-th>
                        <b-th>Agent</b-th>
                        <b-th>PO #</b-th>
                        <b-th>Insurance</b-th>
                        <b-th>Amount</b-th>
                        <b-th>GOA</b-th>
                        <b-th>Upsell</b-th>
                        <b-th>Charged</b-th>
                        <b-th>State</b-th>
                        <b-th>Miles</b-th>
                        <b-th>Towing</b-th>
                        <b-th>Charge</b-th>
                        <b-th>Status</b-th>
                        <b-th>Notes</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    {{ filteredData.length==0?
                        "Jobs are Empty"
                        : 
                    ''
                    }}
                    <b-tr v-for="job in filteredData">
                        <b-td v-on:click="selectJob(job.id)">
                            <font-awesome-icon icon="edit" />
                        </b-td>
                        <b-td>{{ job.id }}</b-td>
                        <b-td>Cell</b-td>
                        <b-td>{{ job.date.split('T')[0] }}</b-td>
                        <b-td>{{ job.agent }}</b-td>
                        <b-td>{{ job.phone }}</b-td>
                        <b-td>{{ job.issuranceAccount }}</b-td>
                        <b-td>${{ job.amount }}</b-td>
                        <b-td>{{ job.jobStatus==='goa' ? '$'+job.amount :'' }} </b-td>
                        <b-td>{{ job.upSellAmount? '$'+job.upSellAmount:'' }}</b-td>
                        <b-td> <span class="tstatus">{{ job.jobStatus }}</span>  </b-td>
                        <b-td>{{ job.state }}</b-td>
                        <b-td>{{ job.miles }}</b-td>
                        <b-td>{{job.towingCompany? job.towingCompany.name:''}}</b-td>
                        <b-td>{{ job.towingCompany? '$'+job.towingCompany.charged:''}}</b-td>
                        <b-td><span class="tstatus">{{ job.towingCompany?job.towingCompany.paymentStatus :'' }}</span> </b-td>
                        <b-td>{{job.towingCompany?job.towingCompany.Notes:'' }}</b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../../router';
import { downloadCSV } from './DownloadCSV';
export default {
    data() {
        return {
            role: JSON.parse(localStorage.getItem("user_details")).role,
            joblist: [],
            filter: {
                start: '',
                end: '',
                jobStatus: '',
                po: '',
                issAcc: '',
                charged: ''
            },
            jobStatus: [
                { value: null, text: 'Please Select Job Status' },
                { value: 'pending', text: 'Pending' },
                { value: 'completed', text: 'Completed' },
                { value: 'goa', text: 'GOA' },
                { value: 'cancelled', text: 'Cancelled' }
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
            Charged: [
                { value: 'pending', text: 'pending' },
                { value: 'submitted', text: 'submitted' },
            ],
        }
    },
    mounted() {
        this.getJobs()
    },
    computed: {
        filteredData() {
            return this.joblist.filter(item =>
                (this.filter.start === '' || new Date(item.date) >= new Date(this.filter.start)) &&
                (this.filter.end === '' || new Date(item.date) <= new Date(this.filter.end)) &&
                (this.filter.jobStatus === '' || item.jobStatus === this.filter.jobStatus) &&
                (this.filter.po === '' || item.providerID.includes(this.filter.po)) &&
                (this.filter.issAcc === '' || item.issuranceAccount.includes(this.filter.issAcc)) &&
                (this.filter.charged === '' || item.charged_status === this.filter.charged)
            )
        },
        issuranceStats() {
            let s = {};
            s.amount = 0;
            s.SAmount = 0;
            s.goa = 0;
            s.paid = 0
            s.upAmount = 0
            s.towing = 0;
            this.filteredData.map(item => {
                s.amount += item.amount
                if(item.jobStatus==='goa'){
                    s.goa += item.amount

                }
                if (item.charged_status === 'submitted') {
                    s.SAmount += item.amount;
                }
                s.upAmount += item.upSellAmount,
                s.paid +=item.towingCompany? item.towingCompany.paymentStatus==='paid'? item.towingCompany.charged:0:0
                s.towing += item.towingCompany ? item.towingCompany.charged : 0
            })
            console.log(s);
            return s;
        },
    },
    methods: {
        async selectJob(id) {
            router.push(`/jobs/${id}`)
        },
        async getJobs() {
            const access = JSON.parse(localStorage.getItem("user_details")).role
            const jobs = axios.get(`${import.meta.env.VITE_LIVE}/jobs?role=${access}`);
            Promise.all([jobs]).then((res) => {
                this.$data.joblist = res[0].data;
                console.log(res[0].data);
            }).catch((err) => {
                console.log(err);
            })
        },
        download(){
            downloadCSV(this.$data.joblist)
        }
        
    },
}
</script>

<style>
span.tstatus {
    text-transform: uppercase;
}
</style>