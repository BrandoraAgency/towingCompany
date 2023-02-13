<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-form @submit.prevent="onSubmit">
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-1" label="Email address:" label-for="input-email">
                                    <b-form-input id="input-email" v-model="form.email" type="email"
                                        placeholder="Enter email" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="First Name" label-for="input-first">
                                    <b-form-input id="input-first" v-model="form.firstName"
                                        placeholder="Enter First Name" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Last Name" label-for="input-last">
                                    <b-form-input id="input-last" v-model="form.lastName" placeholder="Enter last Name"
                                        required></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group id="input-group-3" label="Roles:" label-for="input-3">
                                    <b-form-select id="input-3" v-model="form.role" :options="roles"
                                        required></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-col>
                                    <b-form-group id="input-group-2" label="Password" label-for="input-pas">
                                        <b-form-input id="input-pass" v-model="form.password" type="password"
                                            placeholder="Enter Password" required></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-col>
                        </b-row>
                        <b-button type="submit" variant="primary">Create</b-button>
                        <b-button variant="danger">Back</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {},
            roles: [
                { value: 'accountant', text: 'accountant' },
                { value: 'qc', text: 'qc' },
                { value: 'dispatch', text: 'dispatch' },
                { value: 'sales', text: 'sales' }
            ],
        }
    },
    methods: {
        async onSubmit() {
            axios.post(`${import.meta.env.VITE_LIVE}/register`, this.$data.form).then((res) => {
                console.log(res);
                alert('User Created Successfully')
            }).catch((res) => {
                alert('User Not Created')
            })
        }
    },
}
</script>

<style scoped>

</style>