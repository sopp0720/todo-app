<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성 "></TodoList> -->
    <TodoList v-bind:propsdata="todoItems" 
            v-on:removeItem="removeOneItem" 
            v-on:toggleItem="toggleOneItem" ></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data: function(){
    return {
      todoItems: []
    }
  },
    // instance가 생성되자 마자 호출되는 hook
  created: function() {
      if(localStorage.length > 0) {
          for (var i = 0; i < localStorage.length ; i++ ) {
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  // string 으로 던지기 때문에 parse시킨다. 
                  //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  methods: {
    addOneItem: function(todoItem) {
      console.log("app component : "+todoItem); 
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      console.log(todoItem, index);
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
      // 특정 index 하나 지우는 javascript api
    },
    // 안티패턴, 하위 컴포넌트에서 다시 데이터를 보내는 모양.
    toggleOneItem: function(todoItem, index) {
      // todoItem.completed = !todoItem.completed;  
      // 이벤트 버스를 내려서 (내가 이해한걸론 todoList안에 이벤트버스를 내린다는 말 같음..)  
      // 컴포넌트간의 경계를 명확하게 한다. 
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // 실제 로컬 스토리지에 저장하는 부분.
      // update하는게 없어서 해당 item을 지우고, 바뀐걸 저장한다. 
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoFooter' : TodoFooter,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput,
  }  
}
</script>

<style>
/* 하위 컴포넌트 까지 영향을 준다 */
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
