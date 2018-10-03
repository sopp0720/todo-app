<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:"메서드이름"="하위 컴포넌트에서 발생시킨 이벤트 이름></TodoInput> -->
    <!-- <TodoInput v-on:addItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
          v-on:removeItem="removeOneItem" 
          v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput'
// es5 기준
// var mycomponent = {
//   tempalte : '<div>my component</div>'
// }
// new Vue({
//   el: '',
//   component: {
//     'my-component' : my-component
//   }
// })
export default {  
    // es6 향상된 리터럴. 
    // 메서드 속성을 괄호로만 표현할 수 있다.
    // data() : function()
  data() {
    return {
      //todoItems: []
    }
  },
  // TODO : 아래 세개를 mutation으로 바꾸기.
  methods: { //mutations
    
    //app이 액션수행, 컴포넌트는 프레젠테이션 역할
    // 
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item:todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },    
    removeOneItem(todoItem, index) {
      // console.log('removeItem :'+removeItem);
      // console.log('todoItem :'+todoItem);
      // console.log(todoItem, index);
      this.todoItems.splice(index, 1);
      console.log(this.todoItem);
      localStorage.removeItem(todoItem.item);
      // javascript 배열 메서드
      
    },
    toggleOneItem(todoItem, index){
      // todoItem.completed = !todoItem.completed; ==> 안티패턴 , 곧바로 접근하는거 xx      
      // 컴포넌트 경계를 명확하게 하는 방법으로 표현 (아래)
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬스토리지 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      //기존 배열도 초기화 하기
      this.todoItems = [];
    }
  },
//   created() {
//         if(localStorage.length > 0) {
//             for (let i =0 ; i < localStorage.length ; i ++) {
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                     //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                     this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }                
//                 //console.log(localStorage.key(i));
//             }
//         }
//   },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoFooter,
    TodoList,
    TodoInput
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style:groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>