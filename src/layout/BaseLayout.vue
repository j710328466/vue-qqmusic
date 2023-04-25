<template>
    <div>
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script setup>
  import Header from '@/components/Header/index.vue'
  import Footer from '@/components/Footer/index.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>