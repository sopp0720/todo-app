<template>
    <div>
        <span class="clearAllBtn" v-on:click="clearTodo">clear All</span>
    </div>
</template>

<script>
export default {
//scoped = 해당 컴포넌트에만 적용됨
  methods: {
    clearTodo: function() {
        // event만 발생시키고,
        // 실제 처리는 app.vue에서 함.
        this.$emit('clearAll')
        //localStorage.clear();
    }
  }
}
</script>


<style scoped>
.clearAllContainer {
width: 8.5rem;
height: 50px;
line-height: 50px;
background-color: white;
border-radius: 5px;
margin: 0 auto;
}
.clearAllBtn {
color: #e20303;
display: block;
}
</style>
