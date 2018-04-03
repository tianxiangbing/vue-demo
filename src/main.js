import Vue from 'vue'
import App from './App.vue'
//路由
import VueRouter from "vue-router";
import Home from './pages/Home';
import Hello from './pages/Hello';
import User from './pages/User';
import Vuex1 from './pages/Vuex-Demo-1';
//vuex
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
    ,minus(state){
      state.count--;
    }
  },
  actions:{
    increment(context){
      context.commit('increment')
    },
    minusAsync({commit}){
      setTimeout(()=>{
        commit('minus')
      },4000)
    }
  }
});

Vue.config.productionTip = true
Vue.use(VueRouter)
let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/hello',
      component: Hello
    },
    { path: '/user/:id', component: User },
    { path: '/vuex', component: Vuex1 }
  ]
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')