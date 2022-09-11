<script setup lang="ts">
import RecipeListItem from "@/components/RecipeListItem.vue";
import type {iRecipe} from "@/interfaces/iRecipe";
import {getAllRecipes, getFeaturedRecipes} from "@/repository/RecipeRepository";
import type {Ref} from "vue";
import {onBeforeMount, ref} from "vue";

const props = defineProps({
  featuredOnly: {type: Boolean, required: false}
})

const recipes: Ref<iRecipe[]> = ref([]);

onBeforeMount(() => {
  if (props.featuredOnly) {
    recipes.value = getFeaturedRecipes();
  } else {
    recipes.value = getAllRecipes();
  }
})
</script>

<template>
  <section class="recipes">
    <RecipeListItem v-for="(recipe,index) in recipes" :key="index" v-bind="recipe"/>
  </section>
</template>

<style scoped>
.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>