import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new vuex.Store({

    state: {
        egg : 100
    },
    getters: {
        originEgg(state){
            return state.egg;
        },
        doubleEgg(state){
            return state.egg  * 2;
        },
        tripleEgg(state){
            return state.egg  * 3;
        }
    }

})