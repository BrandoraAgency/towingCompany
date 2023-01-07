<template>
        <b-container fluid="">
            <b-row>
                <b-col>
                    <div class="filterHead">
                        <div class="headingF">
                            <h3>Filter</h3>
                        </div>
                    </div>
                    <form action="">
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <label for="dateFrom">Date From</label>
                                    <input type="text" name="datefrom" id="dateForm">
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="dateTo">Date To</label>
                                    <input type="text" name="dateto" id="dateTo">
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <div class="form-group">
                                    <label for="jobstatus">Job Status</label>
                                    <select name="jobstatus" id="jobstatus">
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="Representative">Representative</label>
                                    <select name="Representative" id="Representative">
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="po">PO #</label>
                                    <input type="number" name="po" id="po">
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="insurAcc">Insurance Account</label>
                                    <select name="insurAcc" id="insurAcc">
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="chargeStatus">Charged Status</label>
                                    <select name="chargeStatus" id="chargeStatus">
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col>
                                <div class="form-group">
                                    <label for="paymentStatus">Payment Status</label>
                                    <select name="paymentStatus" id="paymentStatus">
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <div class="submitbtn">
                                    <b-button variant="success" type="submit">Apply</b-button>
                                    <b-button>Close</b-button>
                                </div>
                            </b-col>
                        </b-row>
                    </form>
                </b-col>
            </b-row>
        </b-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>