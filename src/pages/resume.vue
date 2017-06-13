<template>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted() {
      this.$store.commit('changeLinkIndex', 3)
    }
  }
</script>

<style lang="scss" scoped>
  .jzxer {
    height: 666px;
  }
</style>
