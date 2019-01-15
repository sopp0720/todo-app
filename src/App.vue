<template>
  <div id="app">
    <!-- <TodoInput v-on:"메서드이름"="하위 컴포넌트에서 발생시킨 이벤트 이름></TodoInput> -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTextOne="addTextEvent"></TodoInput>
    <TodoList v-bind:propsdata="addContext"
              v-on:removeOneContext="removeOneEvent"></TodoList>
    <TodoFooter v-on:clearAll="clearAllContext"></TodoFooter>

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
      addContext: [],
    }
  }, 
  created: function(){
    console.log('list create hoook');
    if(localStorage.length > 0) {
      for( var i = 0; i < localStorage.length ; i++ ) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
          console.log('here :'+22222);
          console.log(localStorage.getItem(localStorage.key(i)));
          this.addContext.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
          console.log('here :'+33333);
        }
      }
    }
  },
  methods: {
    addTextEvent: function(addContext) {
      // data의 addContext와 여기서 파라미터로 받는 addContext는 다르다!!!!!
      // *****실수 해결******
      // console.log('here :'+addContext);
      console.log(this.addContext); //this가 붙고 안붙고 차이? this면 object가 들어감...
      var obj = {completed: false, item: addContext};
      // this가 붙으면 object[]로 들어간다@@@@
      localStorage.setItem(addContext, JSON.stringify(obj));
      this.addContext.push(obj);
      // // console.log(obj);
    },
    removeOneEvent: function(context, index){
      console.log(context, index);
      this.addContext.splice(index, 1);
      localStorage.removeItem(context.item);
      // localStorage.removeItem(context.item)
      // // localStorage.removeItem(context); // not work..!
      // this.addContext.splice(index, 1);
    },
    clearAllContext: function(){
       localStorage.clear();
       this.addContext = [];  // 애를 안타...
       console.log(this.addContext);
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