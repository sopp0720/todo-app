<template>
    <div class="inputBox shadow">
        <!-- 동적으로 vue instance에 저장하는 역할을 한다. -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- local storage에 저장한다. -->
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem !== '') {
                //var obj = {completed: false, item: this.newTodoItem};                
                //localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                //this.$emit(메서드, 인자)
                this.$emit('addItem', this.newTodoItem);
                this.clearInput();
            }
            //localStorage.setItem(this.newTodoItem, obj);
            // data 영역도 접근가능함.
            // 같은 인스턴스를 가르키기 때문에 접근가능함.
            this.clearInput();
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0; 
  /* 테두리의 둥그스름함 */
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}

</style>


