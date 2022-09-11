import recipesJSON from "@/assets/recipe.json";
import type {iRecipe} from "@/interfaces/iRecipe";

const allRecipes: iRecipe[] = recipesJSON as iRecipe[];

export function getAllRecipes() {
    return allRecipes;
}

export function getFeaturedRecipes() {
    return allRecipes.filter(recipe => recipe.featured === true);
}