<template>
    <div>
        <!-- <li v-for=""></li> -->
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <!-- 동적으로 값에 따라 class를 추가하거나 뺀다. v-bind 강력함. -->
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                v-on:click="toggleComplete(todoItem, index)"></i>
                 <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span> 

                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>

        </ul>

    </div>

</template>

<script>

export default {
    data: function(){
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            // 특정 index 하나 지우는 javascript api
            this.todoItems.splice(index, 1);
            // slice와의 차이가 있음!
        },
        toggleComplete: function(todoItem, index) {
            console.log(todoItem);
            todoItem.completed = !todoItem.completed;
            
            // 실제 로컬 스토리지에 저장하는 부분.
            // update하는게 없어서 해당 item을 지우고, 바뀐걸 저장한다. 
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },
    // instance가 생성되자 마자 호출되는 hook
    created: function() {
        console.log('list created hook ');
        if(localStorage.length > 0) {
            for (var i = 0; i < localStorage.length ; i++ ) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    // string 으로 던지기 때문에 parse시킨다. 
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

                  // this.todoItems.push(localStorage.key(i));  
                }
            }
        }
    }
}
</script>



<style scoped>
/* 이 컴포넌트에만 해당되는 스타일 */
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
