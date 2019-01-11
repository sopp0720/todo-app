import Vue from 'vue'
import App from './App.vue'
// import { store } from './store/store'
// {} 가 없으면 모듈에서 해당 객체 name만 가져옴 ex) import name from "module-name"; ==> name
// {} 가 있으면 export된 모듈에서 멤버의 이름만 가져온다는 뜻. ex) import { member } from "module-name";



new Vue({  
  el: '#app',
  // store,
  render: h => h(App)
})
