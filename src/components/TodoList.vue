<template>
    
    <div>
        <transition-group name="list" tag="ui">
        <!-- ul>li*3 단축키 -->        
        <!-- props data를 store로 변경 -->
        <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
        <i class="removeBtn fas fa-trash-alt"></i>
        </span>
        </li>
        </transition-group>

    </div>
</template>

<script>
export default {
    // props: ['propsdata'],
    methods: {
        toggleComplete(todoItem, index) {            
            this.$emit('toggleItem', todoItem, index);
            // todoItem.completed = !todoItem.completed;
            // // 로컬스토리지 갱신
            // localStorage.removeItem(todoItem.item);
            // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        removeTodo(todoItem, index) {
            // 발행!
            // 이벤트를 발생시키고 이벤트버스로 전달함 ==> todoItem, index 를 같이 넘긴다.
            // app.vue에서 이벤트를 받아, app.vue에서 메서드를 실행시킨다.
            this.$emit('removeItem', todoItem, index);
            // console.log(todoItem, index);
            // localStorage.removeItem(todoItem);
            // // javascript 배열 메서드
            // this.todoItems.splice(index, 1);
        }
    }    
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>