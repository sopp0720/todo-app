<template>
  <div id="app">
    <!-- <TodoInput v-on:"메서드이름"="하위 컴포넌트에서 발생시킨 이벤트 이름></TodoInput> -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
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