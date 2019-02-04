 // event 발생해 state에 접근하도록 함. 
const addTextEvent = (state, addContext) => {
    var obj = {completed: false, item: addContext};
    localStorage.setItem(addContext, JSON.stringify(obj));
    state.addContexts.push(obj);
}

const removeOneContext = (state, payload) => {
    //removeOneContext
    localStorage.removeItem(payload.context.item);
    state.addContexts.splice(payload.index, 1);
}

// togle!!!
const toggleOneContext = (state, payload) => {
    // this.$store.commit('toggleOneContext', {context, index});
    //context.completed = !context.completed;
    state.addContexts[payload.index].completed = !state.addContexts[payload.index].completed;

    localStorage.removeItem(payload.context.item);
    localStorage.setItem(payload.context.item, JSON.stringify(payload.context));
}

const clearAllContext = (state) => {
    localStorage.clear();
    state.addContexts = [];  
}

// 각각 export라고 쓰기보단 아래처럼.. 
export { addTextEvent, removeOneContext, toggleOneContext, clearAllContext } 
