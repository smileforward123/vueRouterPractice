// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueX from 'vueX'

Vue.config.productionTip = false

let store=new VueX.Store({
  state:{
    count:0 //数据：
  },
  getters:{
     getCount(state){
       return state.count; 
     }
     
  },
  mutations:{

    increment(state,price){
      console.log("111")
      console.log(state.count);
      console.log(price);
      state.count+=price;//增加;
      console.log(state.count);

    },
    decrement(state,price){
        console.log("222")
      state.count-=price;
      if(state.count<=0){
        state.count=0;
      }
      console.log(state.count);
    }
  },
  actions:{
    increase(context,price){
        context.commit("increment",price);
    },
    reduce(context,price){
       context.commit('decrement',price);
    }
  }




})
//store.commit('increment')

console.log(store.state.count) 
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router:router,
  store:store,
  template: '<App/>',
  components: { App }
})
