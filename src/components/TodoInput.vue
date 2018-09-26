<template>
    <div class="inputBox shadow">
        <!-- 동적으로 vue instance에 저장하는 역할을 한다. -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- local storage에 저장한다. -->
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn" aria-hidden="true"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            너가 원하는거 여기에 재정의 가능함.
            -->            
            <h3 slot="header">
                <!-- 모달을 재정의함. 이게 slot의 기능 -->
                경고!
                <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
            </h3>   

            <h2 slot="body">
                todo를 입력해주세요!
            </h2>            

        </Modal>

    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
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
            } else {
                this.showModal = !this.showModal;
            }
            //localStorage.setItem(this.newTodoItem, obj);
            // data 영역도 접근가능함.
            // 같은 인스턴스를 가르키기 때문에 접근가능함.
            this.clearInput();
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    components: {
    //  input의 하위 컴포넌트는 모달이 된다.
    Modal: Modal

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


