<script lang="ts" setup>
defineProps({
  title: {type: String, required: true},
  ingredients: {type: Array, required: true},
  img: {type: String, required: true},
})
</script>

<template>
  <article class="recipe">
    <div class="recipe-text">
      <h3 class="recipe-title">{{ title }}</h3>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
      </ul>
    </div>
    <img class="food-picture"
         :src="img"
         alt="burger image">
  </article>
</template>

<style scoped>
.recipe {
  text-align: center;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  height: 200px;
  min-width: fit-content;
  margin-top: 10px;
  border-radius: var(--border-radius);
  border: black solid 1px

}

.recipe-text {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.recipe-text ul {
  padding: 0;
  margin: 0 3vw;
  font-family: SansSerif, serif;
}

.recipe-title {
  margin: 0;
}

.food-picture {
  width: 100%;
  border-radius: var(--border-radius);
  max-width: 200px;
  border: black solid 1px
}
</style>