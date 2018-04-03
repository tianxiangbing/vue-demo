<template>
  <div>
      {{message}}
      我的用户ID：{{ $route.params.id }}</div>
</template>

<script>
export default {
  name: 'User',
  props: {
    msg: String
  },
  data:()=>{
    return { message:"12344"}
  } ,
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to,from)
    }
  }
}
</script>
