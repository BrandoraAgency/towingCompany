<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="headText">
                    <h3>
                       {{company.towingCompanies ?company.towingCompanies[0].name:''}}
                    </h3>
                </div>
                <b-row>
                    <b-col>
                        <div class="jobtowing details">
                            <div class="singledetail">
                                <b-row>
                                    <b-col>
                                        <span>
                                            Zip
                                        </span>
                                    </b-col>
                                    <b-col>
                                        <span>
                                            {{company.towingCompanies ?company.towingCompanies[0].zipCode:''}}
                                        </span>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="singledetail">
                                <b-row>
                                    <b-col>
                                        <span>
                                            Rating
                                        </span>
                                    </b-col>
                                    <b-col>
                                        <span>
                                            {{company.ratings ?company.ratings[0].averageRating:''}}
                                        </span>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="singledetail">
                                <b-row>
                                    <b-col>
                                        <span>
                                            Phone Number
                                        </span>
                                    </b-col>
                                    <b-col>
                                        <span>
                                            {{company ?company.phone:''}}
                                        </span>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="singledetail">
                                <b-row>
                                    <b-col>
                                        <span>
                                            Address
                                        </span>
                                    </b-col>
                                    <b-col>
                                        <span>
                                            {{company.towingCompanies ?company.towingCompanies[0].address:''}}
                                        </span>
                                    </b-col>
                                </b-row>
                            </div>
                            </div>
                    </b-col>
                    <b-col>
                        <form action="" @submit.prevent="updateCompany">
                            <div class="jobtowing details">
                                <div class="singledetail">
                                    <b-row>
                                        <b-col>
                                            <span>
                                                Pricing
                                            </span>
                                        </b-col>
                                        <b-col>
                                            <div class="Form-group">
                                                <input type="number" v-model="company.pricing_range" name="" placeholder="$1 to $5" id="">
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="singledetail">
                                    <b-row>
                                        <b-col>
                                            <span>
                                                Winch Out Fee
                                            </span>
                                        </b-col>
                                        <b-col>
                                            <div class="Form-group">
                                                <input type="number" v-model="company.winch_out_fee" name="" placeholder="$ 0" id="">
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="singledetail">
                                    <b-row>
                                        <b-col>
                                            <span>
                                                Miles Fee
                                            </span>
                                        </b-col>
                                        <b-col>
                                            <div class="Form-group">
                                                <input type="number" v-model="company.miles_fee" name="" placeholder="$ 0" id="">
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="singledetail">
                                    <b-row>
                                        <b-col>
                                            <span>
                                                Hook Up Fee
                                            </span>
                                        </b-col>
                                        <b-col>
                                            <div class="Form-group">
                                                <input v-model="company.hookup_fee" type="number" name="" placeholder="$ 0" id="">
                                            </div>
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
                                            <div class="Form-group">
                                               <textarea v-model="company.notes" name="" id="" cols="30" rows="10"></textarea>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                                <div class="btn">
                                    <div class="editBtn">
                                        <button type="submit">Edit</button>
                                    </div>
                                    <div class="editBtn">
                                        <button type="button" @click="back">back</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import router from '../../router';
import {  toRaw } from 'vue'
export default {
    data() {
        return {
            company:{},
            id:this.$route.params.companyId
        }
    },
    mounted() {
        this.getCompany()
    },
    methods: {
        async updateCompany(){
            const company = structuredClone(toRaw(this.company));
            delete company.towingCompanies;
            delete company.ratings;
            axios.put(`${import.meta.env.VITE_LIVE}/singlecompany`, company).then((res)=> {
                alert('Company Updated')
                
            }).catch((err)=>{ 
            })
        },
        back(){
            router.push('/jobs/company')
        },
        async getCompany() {
            console.log(this.id);
            const company = axios.get(`${import.meta.env.VITE_LIVE}/singlecompany?id=${this.id}`);
            Promise.all([company]).then((res) => {
                this.$data.company = res[0].data;
                console.log(res[0].data);
            }).catch((err) => {
                console.log(err);
            })
        }
    },
}
</script>

<style scoped></style>