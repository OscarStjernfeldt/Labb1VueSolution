<script setup lang="ts">

</script>

<template>
  <div class="search-bar">
    <form class="example">
      <label for="search"></label>
      <input type="text" placeholder="Search.." name="search" id="search">
      <button type="submit"><img src="./images/icons8-search-24.png" alt="search icon">
      </button>
    </form>
  </div>
  <div class="news">
    <h2>
      NEW RECIPES
    </h2>
  </div>
</template>

<style scoped>

.search-bar {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.example input[type=text] {
  padding: 15px;
  font-size: 17px;
  background: #f1f1f1;
  width: 90%;
  border-radius: var(--border-radius);
}

.example button {
  margin: 0 0 0 10px;
  background: #319DA0;
  border-radius: 100%;
  height: 64px;
  width: 64px;
  cursor: pointer;
}

.example button:hover {
  background: #FFD39A;
}

.example {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  min-width: 350px;
}

.example::after {
  content: "";
  clear: both;
  display: table;
}

.news {
  display: flex;
  justify-content: center;
  background: #FFF5E1;
  border-radius: var(--border-radius);
  margin-top: 10px;
  width: 100%;
  border: solid black 2px
}

</style>