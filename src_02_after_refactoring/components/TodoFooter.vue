<template>
    <div>
        <button v-on:click="clearAll">clearAllBton</button>
    </div>
</template>

<script>

export default {
    methods: {
        clearAll(){
            // localStorage.clear();
            this.$emit("clearAll");
        }
    }
}
</script>

<style>

</style>
