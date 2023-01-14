import { createStore } from 'vuex'
export default createStore({
    state:{
        //states
        counter:0
    },
    mutations:{
        //method that change the state async code not work in mutation
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