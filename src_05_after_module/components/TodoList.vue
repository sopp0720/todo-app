<template>
  <div>
    <li v-for="(context, index) in this.addContexts" v-bind:key="context.item">
      <i class="fal fa-check" v-bind:class="{checkBtnCompleted: context.completed}"
      v-on:click="toggleComplete({context, index})"></i>
      {{ context.item }} 
      <button v-on:click="removeOne({context, index})">removeOne</button>
    </li>
  </div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeOne: 'removeOneContext', // 템플릿에서 호출부분: store에서 호출 부분 , 
                                    // 인자값을 넘기지 않아도 암묵적으로 넘긴다!!!!, 단 인,자 1개로 넘기도록 {} 씌우기

      toggleComplete: 'toggleOneContext'                                    
    }),

    // removeOne(context, index) {
    //   // this.$emit('removeOneContext', context, index);
    //   this.$store.commit('removeOneContext', {context, index});
    // },
    // toggleComplete(context, index) {
    //   //  context.completed = !context.completed;
    //   //  localStorage.removeItem(context.item);
    //   //  localStorage.setItem(context.item, JSON.stringify(context));
    //     this.$store.commit('toggleOneContext', {context, index});

    // }
  },
  computed: {
      // template 안은 깔끔히 표현 --> vue 권고 사항.
      //return this.$store.getters.storedContexts;  
      // 배열 리터럴은 ...mapGetters
      ...mapGetters({
        addContexts: 'storedContexts' //이렇게 쓰는건 실제 컴포넌트를 사용하는 것과 다를 경우임.
      })
  }
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
