<template>

    <!-- <div class="appvue">
       <input type="text" v-model="addContext" v-on:keyup.enter="addText">
       <button class="addContainer" v-on:click="addText">add button</button>
    </div> -->
      <div class="inputBox shadow">
    <!-- input action을 넣는다. -->
        <input type="text" v-model="addContext" v-on:keyup.enter="addText">

        <span class="addContainer" v-on:click="addText">
            <i class="fas fa-plus addBtn"></i>
            <!-- <i class="far fa-plus-square addBtn"></i> -->
        </span>
    </div>
</template>

<script>

export default {
    data: function(){
        return {
            addContext: ""
        }
    }, 
    methods: {
        addText: function(){
            if(this.addContext !== ''){
                // console.log('test!');
                //this.$emit('이벤트 이름', 인자1, 인자2, ...);
                // 안돼... 
                console.log('this.addContext :'+ typeof this.addContext)
                this.$emit('addTextOne', this.addContext);
                this.clearInput();
            } else {
                alert('no input!');
            }
        },
        clearInput(){
            this.addContext = '';
        }
    }
}
</script>

<style>


</style>
