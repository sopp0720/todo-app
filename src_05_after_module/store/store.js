import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters' // 각각의 속성을 파일로 빼냄... 
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp: todoApp
    }
});