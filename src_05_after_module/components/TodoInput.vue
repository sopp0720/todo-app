<template>

      <div class="inputBox shadow">
        <input type="text" v-model="addContext" v-on:keyup.enter="addText">

        <span class="addContainer" v-on:click="addText">
            <i class="fas fa-plus addBtn"></i>
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
                const text = this.addContext.trim();
                this.$store.commit('addTextEvent', text);
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
