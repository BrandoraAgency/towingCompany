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
                        <span>
                            {{ job.poNo }}
                        </span>
                    </div>
                    <div class="singlJobstatus">
                        <span>
                            {{ job.jobStatus }}
                        </span>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="jobtowing details">

                    <!-- <div class="singledetail" v-for="(value, key, index) in job">
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
                                </div> -->
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Agent
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.agent }}
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
                                    {{ job.issuranceAccount }}
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
                                    {{ job.poNo }}
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
                                    {{ job.providerID }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Amount
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.amount }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    GOA
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.jobStatus === 'goa' ? job.amount : '' }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Insurance Time
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.issChargedTime }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Charged Status
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.charged_status }}
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
                                    {{ job.firstName }}
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
                                    {{ job.providerID }}
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
                                    {{ job.year }}
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
                                    {{ job.make }}
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
                                    {{ job.model }}
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
                                    {{ job.color }}
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
                                    {{ job.vinNO }}
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
                                    {{ job.state }}
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
                                    {{ job.miles }}
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
                                    {{ job.upSellAmount }}
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
                                    {{ job.upSellCharged }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="towingCompany heading">
                    <h4>
                        Towing Company Information
                    </h4>
                </div>
                <div class="jobtowing details">
                    <!-- <div class="singledetail" v-for="(value, key, index) in job.towingCompany">
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
                                </div> -->
                    <div class="singledetail">
                        <b-row>
                            <b-col>
                                <span>
                                    Drop Location
                                </span>
                            </b-col>
                            <b-col>
                                <span>
                                    {{ job.towingCompany.dropoff }}
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
                                    {{ job.towingCompany.Agent }}
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
                                    {{ job.towingCompany.name }}
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
                                    {{ job.towingCompany.zipCode }}
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
                                    {{ job.towingCompany.charged }}
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
                                    {{ job.towingCompany.chargedDate }}
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
                                    {{ job.towingCompany.pickUp }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="singledetail">
                        <b-row>
                            <b-col class="status">
                                <span>
                                    {{ job.towingCompany.paymentStatus }}
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
                                    {{ job.towingCompany.Notes }}
                                </span>
                            </b-col>
                        </b-row>
                    </div>
                </div>

            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="singleJobAction">
                    <div class="GnrtInvoice" v-if="role === 'admin' || role === 'accountant'">
                        <button @click="genPdf">
                            Generate Invoice
                        </button>
                    </div>
                    <div class="dltJob" v-if="role === 'admin' || role === 'accountant' || role === 'qc'">
                        <button @click="deleteJob">Delete</button>
                    </div>
                    <div class="appJob" v-if="role === 'admin' || role === 'accountant'">
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
                    <div class="singleImages" v-for="image in job.towImages">
                        <img :src="`${url}/serve/${image.src}`" alt="" srcset="">
                        <button @click="downloadImage(`${url}/serve/${image.src}`,image.src)">Download</button>
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
                    <div class="singleImages" v-for="receipt in job.towReceipts">
                        <img :src="`${url}/serve/${receipt.src}`" alt="" srcset="">
                        <button @click="downloadImage(`${url}/serve/${receipt.src}`,receipt.src)">Download</button>
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
                <b-table-simple responsive>
                    <b-thead>
                        <b-tr>
                            <b-th>ID</b-th>
                            <b-th>Date</b-th>
                            <b-th>Action</b-th>
                            <b-th>Agent</b-th>
                            <b-th>changes</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="job in items">
                            <b-td>{{ job.id }}</b-td>
                            <b-td>{{ job.date.split('T')[0] }}</b-td>
                            <b-td>{{ job.actions }}</b-td>
                            <b-td>{{ job.user }}</b-td>
                            <b-td>
                                <div class="changes">

                                    <span v-for="log in job.logChanges">
                                        {{ log.changes }}
                                    </span>
                                </div>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-col>
        </b-row>

</b-container>
</template>

<script>
import axios from 'axios';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import router from '../../router';
export default {
    data() {
        return {
            role: JSON.parse(localStorage.getItem('user_details')).role,
            url: import.meta.env.VITE_LIVE,
            id: this.$route.params.jobID,
            imageFile: "",
            receiptsFile: "",
            images: {},
            receipts: {},
            job: {
                towingCompany: {}
            },
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
            axios.post(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res);
                    alert('Image Uploaded')
                    this.getImage()
                })
                .catch(err => {
                    console.log(err);
                });
        },
        onreceiptFile() {
            const formData = new FormData();
            formData.append("file", this.$data.receiptsFile);  // appending file
            // sending file to the backend
            axios.post(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    this.getReceipt()
                    alert('Receipt Uploaded')
                })
                .catch(err => {
                    console.log(err);
                });
        },
        async getImage() {
            const images = axios.get(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`);
            // const receipts = axios.get(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`);
            Promise.all([images]).then((res) => {
                this.$data.job.towImages = res[0].data;
            }).catch((err) => {
                console.log(err);
            })
        },
        async getReceipt() {
            // const images = axios.get(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`);
            const receipts = axios.get(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`);
            Promise.all([receipts]).then((res) => {
                this.$data.job.towReceipts = res[0].data;
            }).catch((err) => {
                console.log(err);
            })
        },
        async getJobDetails() {
            const jobs = axios.get(`${import.meta.env.VITE_LIVE}/job?id=${this.$data.id}`);
            // const images = axios.get(`${import.meta.env.VITE_LIVE}/image?id=${this.$data.id}`);
            // const receipts = axios.get(`${import.meta.env.VITE_LIVE}/reciepts?id=${this.$data.id}`);
            Promise.all([jobs]).then((res) => {
                this.$data.job = res[0].data.job;
                this.$data.items = res[0].data.job.jobLogs;
                // this.$data.images = res[1].data;
                // this.$data.receipts = res[2].data;
                console.log(res[0].data.job);
                if (!res[0].data.job.towingCompany) {
                    this.$data.job.towingCompany = {}
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        async deleteJob() {
            const dltJob = axios.delete(`${import.meta.env.VITE_LIVE}/job?id=${this.$data.id}`);
            Promise.all([dltJob]).then((res) => {
                alert('Job Deleted Successfully')
                router.push('/jobs')
            }).catch((err) => {
                console.log(err);
                alert("Job is'nt Deleted ,Try again")
            })
        },
        async downloadImage(url, filename) {
            const response = await axios.get(url, { responseType: 'blob' });
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        async genPdf() {
            const url = `${import.meta.env.VITE_LIVE}/serve/invoice.pdf`
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
            const pdfDoc = await PDFDocument.load(existingPdfBytes)
            const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
            const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique)
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            const { width, height } = firstPage.getSize()
            firstPage.drawText('Allstate Towing Group', {
                x: 14,
                y: height - 130,
                size: 16,
                fontWeight: 800,
                font: helveticaBold,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('Address: 14429 Ventura Blvd #111, Sherman oaks ca 91423', {
                x: 14,
                y: height - 150,
                size: 12,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('213-592-0365', {
                x: 54,
                y: height - 168.8765,
                size: 12,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(`750` + this.$data.job.id || '00', {
                x: 70,
                y: height - 218,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.providerID || '00', {
                x: 48.3655,
                y: height - 236.5506,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(new Date().toLocaleString(), {
                x: 130.8687,
                y: height - 255.2025,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(new Date().toLocaleString(), {
                x: 695.2057,
                y: height - 95.8544,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.towingCompany.pickUp || 'NI', {
                x: 456.8571,
                y: height - 214.8655,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.towingCompany.dropoff || 'NI', {
                x: 440.8571,
                y: height - 242.2025,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('$' + this.$data.job.amount || '$', {
                x: 785.2104,
                y: height - 375.1693,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(`750` + this.$data.job.id || '00', {
                x: 755.0507,
                y: height - 68.8212,
                size: 12,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.year || 'NIL', {
                x: 45.5714,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.make || 'NIL', {
                x: 129.3571,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.model || 'NIL', {
                x: 222.1429,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.color || 'NIL', {
                x: 335.2857,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.vinNO ? this.$data.job.vinNO : '00', {
                x: 420.8571,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(this.$data.job.jobStatus == 'goa' ? 'GOA' : this.$data.job.miles, {
                x: 524.2143,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('1', {
                x: 674.3571,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText('$' + this.$data.job.amount || '$', {
                x: 758.7143,
                y: height - 324.9354,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            })
            firstPage.drawText(`88-4293801`, {
                x: 425.4286,
                y: height - 427.2211,
                size: 10,
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
table .changes {
    display: flex;
    flex-direction: column;
}
</style>