
<style scoped>
  a{
    margin-right: 10px;
  }
</style>

<template>
  <div id="app"> 
    <router-view></router-view>
    <router-link to="/">home</router-link>
    <router-link to="/hello">hello</router-link>
    <router-link to="/user/22">传个参2</router-link>
    <router-link to="/user/33">传个参3</router-link>
    <router-link to="/vuex">vuex</router-link>
  </div>
</template>