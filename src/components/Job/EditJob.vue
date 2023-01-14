<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="headText">
                    <h3>Edit Towing Job - Reference #</h3>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form @submit="onSubmit" @reset="onReset" b-if="show">
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Date" label-for="input-date">
                                <b-form-input id="input-date" type="date" placeholder="Date"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Time" label-for="input-time">
                                <b-form-input id="input-time" type="time" placeholder="time" required></b-form-input>
                            </b-form-group>

                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Job Status" label-for="input-jStatus">
                                <b-form-select id="input-jStatus" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Agent" label-for="input-agent">
                                <b-form-input id="input-agent" placeholder="John"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Agent" label-for="input-Rep">
                                <b-form-select id="input-Rep" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="PO#" label-for="input-po">
                                <b-form-select id="input-po" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Provider ID" label-for="input-provider">
                                <b-form-input id="input-provider" placeholder="1234" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Insurance Ammount" label-for="input-insA">
                                <b-form-select id="input-insA" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Amount" label-for="input-amount">
                                <b-form-input id="input-amount" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Insurance Charged Date" label-for="input-icd">
                                <b-form-input id="input-icd" placeholder="1234" type="date" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Insurance Amount" label-for="input-insA">
                                <b-form-input id="input-insA" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Charged" label-for="input-charged">
                                <b-form-select id="input-charged" required></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="First Name" label-for="input-fname">
                                <b-form-input id="input-fname" placeholder="Name" type="input" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Last Name" label-for="input-lname">
                                <b-form-input id="input-lname" placeholder="Name" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Year" label-for="input-year">
                                <b-form-input id="input-year" placeholder="2023" type="input" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Make" label-for="input-make">
                                <b-form-input id="input-make" placeholder="Make" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Model" label-for="input-model">
                                <b-form-input id="input-model" placeholder="Model" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Color" label-for="input-Color">
                                <b-form-input id="input-Color" placeholder="Color" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="VN #" label-for="input-VN">
                                <b-form-input id="input-VN" placeholder="Model" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Status" label-for="input-State">
                                <b-form-select id="input-State" placeholder="Name" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Miles" label-for="input-Miles">
                                <b-form-input id="input-Miles" placeholder="Miles" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Upsell Amount" label-for="input-State">
                                <b-form-input id="input-State" placeholder="Number" type="number"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="UpSell Charged" label-for="input-uscharged">
                                <b-form-select id="input-uscharged" required></b-form-select>
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
                                    <b-form-checkbox id="checkbox-1" name="checkbox-1" value="accepted"
                                        unchecked-value="not_accepted">
                                        Towing Company
                                    </b-form-checkbox>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Pick up Location" label-for="input-puLoc">
                                        <b-form-input id="input-puLoc" placeholder="123 street" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Drop off Location" label-for="input-puLoc">
                                        <b-form-input id="input-puLoc" placeholder="123 street" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Agent" label-for="input-cAgent">
                                        <b-form-input id="input-cAgent" placeholder="host" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Name" label-for="input-tname">
                                        <b-form-input id="input-tname" placeholder="Name" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Phone" label-for="input-tphone">
                                        <b-form-input id="input-tphone" placeholder="000-00-00" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Contact" label-for="input-tcontact">
                                        <b-form-input id="input-tcontact" placeholder="contact" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Zip" label-for="input-tZip">
                                        <b-form-input id="input-tZip" placeholder="26000" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Charged" label-for="input-tcharged">
                                        <b-form-input id="input-tcharged" placeholder="Name" type="number" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Towing Charged Date" label-for="input-tphone">
                                        <b-form-input id="input-tphone" type="date" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group id="input-group-1" label="Time" label-for="input-tcontact">
                                        <b-form-input id="input-tcontact" placeholder="contact" type="time" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="4">
                                    <b-form-group id="input-group-1" label="Towing status" label-for="input-tstatus">
                                        <b-form-select id="input-tstatus" required></b-form-select>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="4">
                                    <b-form-group id="input-group-1" label="Notes" label-for="input-notes">
                                        <b-form-input id="input-notes" placeholder="Notes" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>

<style scoped>

</style>