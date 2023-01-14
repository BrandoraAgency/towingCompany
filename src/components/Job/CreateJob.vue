<template>
    <b-container fluid>
        <b-row>
            <b-col>
                <b-form @submit="onSubmit" b-if="show">
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
                        <b-col>
                            <b-form-group id="input-group-1" label="Agent" label-for="input-agent">
                                <b-form-input id="input-agent" placeholder="John"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="PO#" label-for="input-po">
                                <b-form-input id="input-po" placeholder="1234" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Issurance Amount" label-for="input-isamount">
                                <b-form-input id="input-isamount" placeholder="John"
                                    required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Amount" label-for="input-Amount">
                                <b-form-input id="input-Amount" placeholder="amount" required></b-form-input>
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
                            <b-form-group id="input-group-1" label="State" label-for="input-State">
                                <b-form-select id="input-State" placeholder="Name" required></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="input-group-1" label="Miles/Service Type" label-for="input-Miles">
                                <b-form-input id="input-Miles" placeholder="Miles" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group id="input-group-1" label="Notes" label-for="input-notes">
                                <b-form-textarea id="input-notes" placeholder="Notes" required></b-form-textarea>
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
    }
    }
</script>

<style scoped>

</style>