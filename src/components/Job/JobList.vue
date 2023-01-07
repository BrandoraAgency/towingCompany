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
                    <b-tr>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                    </b-tr>
                    <b-tr>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                        <b-td>Cell</b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-container>
    </div>
</template>

<script>
import Filter from './Filter.vue';

export default {
    components: { Filter }
}
</script>

<style scoped>

</style>