<template>
    <b-container>
        <b-row>
            <b-col cols="6">
                <div class="towingRef">
                    <h4>
                        Towing Job Details - Reference #
                    </h4>
                </div>
            </b-col>
            <b-col cols="6">
                <div class="row_flex">
                    <div class="poNumber">
                        <span>
                            PO#
                        </span>
                    </div>
                    <div class="singlJobstatus">
                        <span>
                            Pending
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="jobtowing details">

                    <div class="singledetail" v-for="(value, key, index) in job.job">
                        <b-row>
                            <b-col>
                                <span>
                                    {{key}}
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{value}}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Agent
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Insurance Account
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    PO#
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    Contact
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Provider ID:
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Ammount
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    GDA
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Insurance
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Charged
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    First Name
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Last Name
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
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
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Make
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
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
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Color
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    VIN#
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    State
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Miles
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Upsell
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Charged
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div> -->
                </div>
            </b-col>
            <b-col>
                <div class="towingCompany heading">
                    <h4>
                        Towing Company Information
                    </h4>
                </div>
                <div class="jobtowing details">
                    <div class="singledetail" v-for="(value, key, index) in job.jobCompany">
                        <b-row>
                            <b-col>
                                <span>
                                    Pick up Location
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Drop Location
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Agent
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Name
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    Contact
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Zip:
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Charged
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Company charged date
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Pick up Location
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col class="status">
                                <span>
                                    Paid
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Notes
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    data
                                </span>
                            </b-col>
                        </b-row>
                    </div> -->
                </div>

            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="datecreated">
                    <span>12/20/2022 12:00am</span>
                </div>
            </b-col>
            <b-col>
                <div class="singleJobAction">
                    <div class="GnrtInvoice">
                        <button>
                            Generate Invoice
                        </button>
                    </div>
                    <div class="dltJob">
                        <button>Approve</button>
                    </div>
                    <div class="edtJob">
                        <router-link :to="{path: id+'/edit'}" class="btn">Edit</router-link>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h4>
                    Towing Job Log - Reference # 
                </h4>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-table striped hover :items="items"></b-table>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        id: this.$route.params.jobID,
        job:{},
        items:[]
      }
    },
    mounted() {
        this.getJobDetails()
    },
    methods: {
        async getJobDetails(){
            const jobs=axios.get(`http://localhost:3001/job?id=${this.$data.id}`);
            Promise.all([jobs]).then((res)=>{
                this.$data.job=res[0].data;
            }).catch((err)=>{
                console.log(err);
            })
        }
    },
  }
</script>

<style scoped>

</style>