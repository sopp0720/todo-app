import Vue from 'vue' 
import Vuex from 'vuex'


// use vue의 플러그인 기능
// vue를 사용하는 모든 영역에 사용한다고 정의함.
Vue.use(Vuex);


// Todo.vue
//this.$store

const storage = {
    fetch() {
        const arr = [];
        // 기존 CREATE
        if(localStorage.length > 0) {
            for (let i =0 ; i < localStorage.length ; i ++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }                
                //console.log(localStorage.key(i));
            }
        }
        return arr;
    },
    remove() {

    }

}

export const store = new Vuex.Store({
    state: {
        //headerText: 'TODO it!' --> test
        todoItems: storage.fetch(),
        todoItems2: storage.fetch()
    },
    mutations: {
    addOneItem(state, todoItem) {
        console.log('todoItem :'+todoItem);
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
        console.log(this); //원하는 대루 접근 안될걸~
    },
    removeOneItem(todoItem, index) {
        // console.log('removeItem :'+removeItem);
        // console.log('todoItem :'+todoItem);
        // console.log(todoItem, index);
        this.todoItems.splice(index, 1);        
        localStorage.removeItem(todoItem.item);
        // javascript 배열 메서드
        
    },

    }

})