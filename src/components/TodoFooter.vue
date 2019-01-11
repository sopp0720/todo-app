<template>
    <div>
        <button v-on:click="clearAllBton">clearAllBton</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearAllBton(){
            localStorage.clear();
        }
    }
}
</script>

<style>

</style>
