import { createStore } from 'vuex'
export default createStore({
    state:{
        //states
        jobs:[],
        selectedJob:{}
    },
    mutations:{
        //method that change the state async code not work in mutation
        updateJob(state,jobs){
            console.log('commit');
            state.jobs=jobs
        }
    },
    actions:{
        //trigger mutation to change the state and also async code work in actions
    },
    getters:{
        //get data from state or filter data before delivering to the app
    },
    modules:{
        //different modules
    }
})