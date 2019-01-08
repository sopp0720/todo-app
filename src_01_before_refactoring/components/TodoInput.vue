<template>
    <div class="inputBox shadow">
    <!-- input action을 넣는다. -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">

        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
            <!-- <i class="far fa-plus-square addBtn"></i> -->
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
            //this는 같은 instance를 가르킨다.
            if(this.newTodoItem !== '') {
                // 아래처럼 키밸류를 구분한다. 
                var obj = {completed: false, item: this.newTodoItem};
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();  
            } else { 
                alert('no input value!');
            }
            //this.clearInput();
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
