const storage = {
    fetch() {   //?
        const arr = [];
        

        if(localStorage.length > 0) {
          for( var i = 0; i < localStorage.length ; i++ ) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
                arr.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
            }
          }
        }
        return arr;
    }
};

const state = {
    addContexts : storage.fetch()
    // headerText: ' TODO Practice! '
};

//getters: getters,
const getters = {
    storedContexts(state){
        return state.addContexts;
    }
}; //축약가능
// getters: {
//     storedContexts(state) {
//         return state.addContexts;
//     }
// },
// 아래 값이 엄청 많아질경우 분리해야 보기 좋음... 
const mutations = {
     // event 발생해 state에 접근하도록 함. 
    addTextEvent(state, addContext) {
        var obj = {completed: false, item: addContext};
        localStorage.setItem(addContext, JSON.stringify(obj));
        state.addContexts.push(obj);
    },
    removeOneContext(state, payload) {
        //removeOneContext
        localStorage.removeItem(payload.context.item);
        state.addContexts.splice(payload.index, 1);
    },
    // togle!!!
    toggleOneContext(state, payload)  {
        // this.$store.commit('toggleOneContext', {context, index});
        //context.completed = !context.completed;
        state.addContexts[payload.index].completed = !state.addContexts[payload.index].completed;

        localStorage.removeItem(payload.context.item);
        localStorage.setItem(payload.context.item, JSON.stringify(payload.context));
    },

    clearAllContext(state) {
        localStorage.clear();
        state.addContexts = [];  
    }

};

export default {
    state,
    getters, 
    mutations
};
