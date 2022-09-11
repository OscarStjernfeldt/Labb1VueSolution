<script setup lang="ts">

</script>

<template>
  <div class="center-content">
    <footer>
      <p>Example@email.com</p>
      <img src="/icons8-twitter-40.png" alt="twitter icon">
      <img src="/icons8-facebook-40.png" alt="facebook icon">
      <img src="/icons8-instagram-40.png" alt="instagram icon">
    </footer>
  </div>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.center-content {
  display: flex;
  justify-content: center;
}

footer {
  margin-top: 10px;
  display: flex;
  background: #FFF5E1;
  height: 45px;
  justify-content: space-evenly;
  border: #000000 solid 2px;
  min-width: 350px;
  width: 81%;
  border-radius: var(--border-radius);
}
</style>