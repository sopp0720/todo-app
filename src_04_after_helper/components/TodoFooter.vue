<template>
    <div>
        <button v-on:click="clearAll">clearAllBton</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations ({
            clearAll: 'clearAllContext'
        }),
        // clearAll(){
        //     // localStorage.clear();
        //     //this.$emit("clearAll");
        //     this.$store.commit("clearAllContext");
        // }
    }
}
</script>

<style>

</style>
