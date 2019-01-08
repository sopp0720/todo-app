import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for (var i =0 ; i < localStorage.length ; i ++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }                
                //console.log(localStorage.key(i));
            }
        }

    }    
};

export const store = new Vuex.Store({
    state: {
    //    headerText: 'TODO it!'
        todoItems: storage.fetch()
    }
});