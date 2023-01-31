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
                                    {{ key }}
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ value }}
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
                        <button @click="genPdf">
                            Generate Invoice
                        </button>
                    </div>
                    <div class="dltJob">
                        <button>Approve</button>
                    </div>
                    <div class="edtJob">
                        <router-link :to="{ path: id + '/edit' }" class="btn">Edit</router-link>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="headText">
                    <h4>
                        Tow Images
                    </h4>
                </div>
                <div class="images">
                    <div class="singleImages" v-for="image in images">
                        <img :src="`${url}/serve/${image.src}`" alt="" srcset="">
                    </div>
                </div>
                <div class="upldBtn">
                    <div class="file-upload">
                        <input type="file" @change="onImageChange" />
                        <button @click="onimageFile" class="upload-button" :disabled="!this.$data.imageFile">Upload
                            file</button>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="headText">
                    <h4>
                        Tow Reciepts
                    </h4>
                </div>
                <div class="images">
                    <div class="singleImages" v-for="receipt in receipts">
                        <img :src="`${url}/serve/${receipt.src}`" alt="" srcset="">
                    </div>
                </div>
                <div class="upldBtn">
                    <div class="file-upload">
                        <input type="file" @change="onReceiptChange" />
                        <button @click="onreceiptFile" class="upload-button" :disabled="!this.$data.receiptsFile">Upload
                            file</button>
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
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
export default {
    data() {
        return {
            url: import.meta.env.VITE_LIVE,
            id: this.$route.params.jobID,
            imageFile: "",
            receiptsFile: "",
            images: {},
            receipts: {},
            job: {},
            items: []
        }
    },
    mounted() {
        this.getJobDetails()
    },
    methods: {
        onImageChange(e) {
            const image = e.target.files[0]; // accessing file
            this.imageFile = image;
        },
        onReceiptChange(e) {
            const receipt = e.target.files[0]; // accessing file
            this.receiptsFile = receipt;
        },
        onimageFile() {
            const formData = new FormData();
            formData.append("file", this.$data.imageFile);  // appending file

            // sending file to the backend
            axios.post(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`, formData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        onreceiptFile() {
            const formData = new FormData();
            formData.append("file", this.$data.receiptsFile);  // appending file

            // sending file to the backend
            axios.post(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`, formData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        async getJobDetails() {
            const jobs = axios.get(`${import.meta.env.VITE_LIVE}/job?id=${this.$data.id}`);
            const images = axios.get(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`);
            const receipts = axios.get(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`);
            Promise.all([jobs, images, receipts]).then((res) => {
                this.$data.job = res[0].data;
                console.log(res);
                this.$data.images = res[1].data;
                this.$data.receipts = res[2].data;
            }).catch((err) => {
                console.log(err);
            })
        },
        async genPdf() {
            const url = `${import.meta.env.VITE_LIVE}/serve/invoice.pdf`
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
            const pdfDoc = await PDFDocument.load(existingPdfBytes)
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            const { width, height } = firstPage.getSize()
            firstPage.drawText('Address: 14429 Ventura Blvd #111, Sherman oaks ca 91423', {
                x: 12,
                y: height - 140,
                size: 8,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('213-592-0365', {
                x: 12,
                y: height - 150,
                size: 8,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            const pdfBytes = await pdfDoc.save()
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'file.pdf';
            link.click();
            console.log(pdfBytes);
        }
    },
}
</script>   
<style scoped>

</style>