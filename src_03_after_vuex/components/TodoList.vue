<template>
  <div>
    <li v-for="(context, index) in this.$store.state.addContexts" v-bind:key="context.item">
      <i class="fal fa-check" v-bind:class="{checkBtnCompleted: context.completed}"
      v-on:click="toggleComplete(context, index)"></i>
      {{ context.item }} 
      <button v-on:click="removeOne(context, index)">removeOne</button>
    </li>
  </div>

</template>

<script>

export default {
  methods: {
    removeOne(context, index){
      // this.$emit('removeOneContext', context, index);
      this.$store.commit('removeOneContext', {context, index});
    },
    toggleComplete(context, index){
      //  context.completed = !context.completed;
      //  localStorage.removeItem(context.item);
      //  localStorage.setItem(context.item, JSON.stringify(context));
        this.$store.commit('toggleOneContext', {context, index});

    }
  },

}
</script>

<style scope>
  .checkBtnCompleted {
    color:red;
  }
/* .textCompleted {
>>>>>>> 5196c9bd56f5b85bbeb88a0bab9fca870c08cc48
  text-decoration: line-through;
  color: red;
} */
</style>
