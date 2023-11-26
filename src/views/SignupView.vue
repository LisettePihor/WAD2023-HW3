<template>
  <div class="signup-container">
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";

export default ({
  components: {
    SignupForm
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.signup-container {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  border: 2px solid #df8666;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  background-color: #eadedc;
}

.signup-button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 25%;
  margin: 0 auto;
}

.signup-button:hover {
  background-color: #2980b9;
}
</style>