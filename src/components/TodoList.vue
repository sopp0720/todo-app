<template>
  <div>
    <li v-for="(context, index) in propsdata" v-bind:key="context.item">
      <!-- context.completed = false ==> class안먹임 -->

      <!-- checkbox에만 class먹이는 동작 -->
      <i class="fal fa-check" v-bind:class="{checkBtnCompleted: context.completed}"
      v-on:click="toggleComplete(context, index)"></i>
      {{ context.item }} 

      <!-- 아래처럼 하면 전체 글에 class먹이는거 -->
      <!-- <span v-bind:class="{checkBtnCompleted: context.completed}"> {{ context.item }}  </span> -->
      
      <button v-on:click="removeOne(context, index)">removeOne</button>
    </li>
  </div>

</template>

<script>
export default {
  props: ["propsdata"],
  data: function() {
    return {
      addContext: [],
      // item: {
      //   message : 1,
      //   message : 2
      // }
    }
  }, 
  methods: {
    removeOne(context, index){
      //console.log(context, index);
      // localStorage.removeItem(context.item)
      // // localStorage.removeItem(context); // not work..!
      // this.addContext.splice(index, 1);
      this.$emit('removeOneContext', context, index);
    },
    toggleComplete(context, index){
       console.log("toggleComplete :"+context, index); 
       context.completed = !context.completed;
       localStorage.removeItem(context.item);
       localStorage.setItem(context.item, JSON.stringify(context));
       

    }
  },

}
</script>

<style scope>
  .checkBtnCompleted {
    color:red;
  }
/* .textCompleted {
  text-decoration: line-through;
  color: red;
} */
</style>
