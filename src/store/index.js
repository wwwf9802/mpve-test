// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count+=1;
      // const obj = state
      // obj.count += 1
    },
    decrement(state){
      state.count-=1;
      // const obj = state
      // obj.count -= 1
    },
    add(state,num){
      state.count+=Number(num);
    }
  },
  actions:{
    waitAdd({state,commit,dispatch},num){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('add',num);
        },3000)
      })
    }
  }
})

export default store
