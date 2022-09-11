<script setup lang="ts">
import router from "@/router";

function alertMessage() {
  router.push("/")
}
</script>

<template>
  <div class="center-login-header">
    <h1 class="login-header">Login</h1>
  </div>

  <div class="center-input-page">
    <form class="login_form" id="form">
      <label class="login_label" for="email">Email</label>
      <input class="input" type="email" id="email" name="email"
             placeholder="example@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
             minlength="5" title="Must contain a valid email" required>
      <label class="login_label" for="password">Password</label>
      <input class="input" type="password" id="password" placeholder="Password"
             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" minlength="8"
             title="Password must contain one uppercase, one lowercase and one number with minimum of eight cases"
             required>
      <div class="login_form_buttons">
        <input class="button" @click.prevent="alertMessage" type="submit"
               value="Login">
        <button class="button" onclick="window.location.href='register.html'" type="button"
                value="Register">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.center-login-header {
  display: flex;
  justify-content: center;
}

.login-header {
  --shadow-color: #d0d0d0;
  font-size: 120px;
  text-align: center;
  text-shadow: -3px -3px 0 var(--shadow-color), 3px -3px 0 var(--shadow-color),
  -3px 3px 0 var(--shadow-color), 3px 3px 0 var(--shadow-color);
  color: #000000;
  border-radius: var(--border-radius);
  border: #000000 solid 3px;
  background: #F8E3E2;
  min-width: 350px;
  padding: 32px;
  width: 76%;

}

.center-input-page {
  display: flex;
  justify-content: center;
}

.login_form {
  display: flex;
  flex-direction: column;
  padding: 2em;
  border-radius: var(--border-radius);
  border: #000000 solid 3px;
  width: 76%;
  margin-top: 2em;
  background: #fbf7f0;
  margin-bottom: 2em;
}

.login_form_buttons {
  margin: 1em;
  display: flex;
  justify-content: space-evenly;
}

.login_label {
  font-size: 1.5em;
  font-weight: bold;
  padding: 7px;
}

.input {
  height: 50px;
  font-size: 1em;
  padding-left: 10px;
  margin: 0.5%;
}

.button {
  width: 40%;
  height: 200%;
}
</style>