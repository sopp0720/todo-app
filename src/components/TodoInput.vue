<template>
    <div>
       <input type="text" v-model="addContext" v-on:keyup.enter="addText">
       <button v-on:click="addText">add button</button>
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
