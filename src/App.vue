<template>
  <div id="app">
    <!-- <TodoInput v-on:"메서드이름"="하위 컴포넌트에서 발생시킨 이벤트 이름></TodoInput> -->
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTextOne="addTextEvent"></TodoInput>
    <TodoList v-bind:propsdata="addContext"
              v-on:removeOneContext="removeOneEvent"></TodoList>
    <TodoFooter></TodoFooter>
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
  data: function() {
    return {
      addContext: [],
    }
  }, 
  created: function(){
    console.log('list create hoook');
    if(localStorage.length > 0) {
      for( var i = 0; i < localStorage.length ; i++ ) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
          console.log(localStorage.getItem(localStorage.key(i)));
        //   this.addContext.push( JSON.parse(localStorage.getItem(localStorage.key(i))) );
        }
      }
    }
  },
  methods: {
    addTextEvent: function(addContext) {
      console.log('here :'+addContext);
      // var obj = {completed: false, item: this.addContext};
      // localStorage.setItem(this.addContext, JSON.stringify(obj));
      // this.addContext.push(obj);
      // // console.log(obj);
    },
    removeOneEvent: function(context, index){
      console.log(context, index);
      // localStorage.removeItem(context.item)
      // // localStorage.removeItem(context); // not work..!
      // this.addContext.splice(index, 1);
    }

  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoFooter' : TodoFooter,
    'TodoList' : TodoList,
    'TodoInput' : TodoInput
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
