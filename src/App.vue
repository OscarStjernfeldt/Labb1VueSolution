<script setup lang="ts">
import {RouterView} from 'vue-router'
import PageFooter from "./components/PageFooter.vue"
import PageHeader from "./components/PageHeader.vue"
</script>

<template>
  <header>
    <PageHeader/>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <PageFooter/>
  </footer>
</template>

<style scoped>

</style>
