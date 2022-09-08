<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="content">
      <div class="topnav" id="myTopnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="#search">Search</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <div class="dropdown">
          <button class="dropbtn">Categories
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <RouterLink to="/meat">Meat</RouterLink>
            <RouterLink to="/chicken">Chicken</RouterLink>
            <RouterLink to="/fish">Fish</RouterLink>
            <RouterLink to="/vegetarian">Vegetarian</RouterLink>
            <RouterLink to="/desert">Desert</RouterLink>
            <RouterLink to="/allergy">Allergy</RouterLink>
          </div>
        </div>
        <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
      </div>
      <div class="logo-background">
        <h1>LOGO</h1>
      </div>
    </header>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

h1 h2 h3 {
  font-family: Serif, serif;
}

.main-background {
  background: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  min-width: 350px;
}

.content {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
}

.topnav {
  overflow: hidden;
  background-color: #781C68;
  min-width: 350px;
  border: black solid 1px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.active {
  background-color: #319DA0;
  color: white;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.topnav a:hover, .dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.logo-background {
  text-align: center;
  padding-top: 15px;
  background: #FFF5E1;
  min-width: 350px;
  height: 100px;
  color: #000000;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  border: black solid 1px
}
</style>