<template>
  <div>
      计数器：
      {{count}}
      <button  v-on:click="add">点+</button>
      <button  v-on:click="minus">点-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods:{
      add(){
        //   this.$store.dispatch('increment');
        this.increment();
      },
      minus(){
          this.$store.dispatch('minusAsync');
      },
      ...mapActions(['increment'])
  }
}
</script>

