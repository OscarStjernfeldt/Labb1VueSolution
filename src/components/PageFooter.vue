<script setup lang="ts">

</script>

<template>
  <footer>
    <p>Example@email.com</p>
    <img src="/icons8-twitter-40.png" alt="twitter icon">
    <img src="/icons8-facebook-40.png" alt="facebook icon">
    <img src="/icons8-instagram-40.png" alt="instagram icon">
  </footer>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

footer {
  margin-top: 10px;
  display: flex;
  background: #FFF5E1;
  height: 45px;
  justify-content: space-evenly;
  border: #000000 solid 2px;
  min-width: 350px;
  border-radius: var(--border-radius);
}
</style>