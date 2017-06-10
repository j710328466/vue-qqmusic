<template>
  <div>
    <v-cd></v-cd>
    <v-event></v-event>
    <v-toplist></v-toplist>
    <v-taolist></v-taolist>
  </div>
</template>

<script>
  import newCD from './musicDis_c/newCD.vue'
  import event from './musicDis_c/event.vue'
  import topList from './musicDis_c/topList.vue'
  import taoList from './musicDis_c/taogeList.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      'v-cd': newCD,
      'v-event': event,
      'v-toplist': topList,
      'v-taolist': taoList
    }
  }
</script>

<style lang="scss">

</style>
