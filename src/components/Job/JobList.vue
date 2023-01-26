<template>
    <div>
        <Filter/>
        <div class="stats">
            <b-container fluid>
                <b-row>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Insurance Ammount
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                GDA Ammount
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Upsell Ammount
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Submitted Ammount
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Insurance Paid Ammount
                            </span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="singleStats">
                            <span>
                                Towing Ammount
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
                        <b-th>ID</b-th>
                        <b-th>S</b-th>
                        <b-th>Date</b-th>
                        <b-th>Agent</b-th>
                        <b-th>PO #</b-th>
                        <b-th>Insurance</b-th>
                        <b-th>Amount</b-th>
                        <b-th>GDA</b-th>
                        <b-th>Upsell</b-th>
                        <b-th>Charged</b-th>
                        <b-th>Status</b-th>
                        <b-th>State</b-th>
                        <b-th>Miles</b-th>
                        <b-th>Towing</b-th>
                        <b-th>Phone</b-th>
                        <b-th>Charge</b-th>
                        <b-th>Status</b-th>
                        <b-th>Notes</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="job in $store.state.jobs" v-on:click="selectJob(job.id)">
                        <b-td>{{job.id}}</b-td>
                        <b-td>Cell</b-td>
                        <b-td>{{job.date.split('T')[0]}}</b-td>
                        <b-td>{{job.agent}}</b-td>
                        <b-td>{{job.phone}}</b-td>
                        <b-td>{{job.issuranceAccount}}</b-td>
                        <b-td>{{job.amount}}</b-td>
                        <b-td>gda!!</b-td>
                        <b-td>{{job.upSellAmount}}</b-td>
                        <b-td>charged!!</b-td>
                        <b-td>status!!</b-td>
                        <b-td>{{job.state}}</b-td>
                        <b-td>{{job.miles}}</b-td>
                        <b-td>towing!!</b-td>
                        <b-td>Phone!!</b-td>
                        <b-td>{{job.charge_status}}</b-td>
                        <b-td>status!!</b-td>
                        <b-td>{{job.notes}}</b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-container>
    </div>
</template>

<script>
import Filter from './Filter.vue';
import axios from 'axios';
import router from '../../router';

export default {
    components: { Filter },
    data() {
        return {
           
        }
    },
    mounted() {
        this.getJobs()
    },
    methods: {
        async selectJob(id){
            router.push(`/jobs/${id}`)
        },
        async getJobs(){
            const access=JSON.parse(localStorage.getItem("user_details")).role
            const jobs=axios.get(`http://localhost:3001/jobs?role=${access}`);
            Promise.all([jobs]).then((res)=>{
               this.$store.commit('updateJob',res[0].data)
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
}
</script>

<style scoped>

</style>