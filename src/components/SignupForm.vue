<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="submitForm" class="signup">
      <div class="input">
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="input">
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" @input="validatePassword" required>
      </div>
      <!-- Display password validation message -->
      <div v-if="!isPasswordValid" class="password-validation">
        Password is not valid. Please follow the conditions:
        <ul class="no-bullets">
          <li>At least 8 characters and less than 15 characters</li>
          <li>At least one uppercase alphabet character</li>
          <li>At least two lowercase alphabet characters</li>
          <li>At least one numeric value</li>
          <li>Should start with an uppercase alphabet</li>
          <li>Should include the character "_"</li>
        </ul>
      </div>
      <button type="submit" :disabled="!isPasswordValid" class="signup-button">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isPasswordValid: true,
    };
  },
  methods: {
    validatePassword() {
      // Password validation logic
      const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;

      this.isPasswordValid = regex.test(this.password);
    },
    submitForm() {
      // Your signup logic goes here
      console.log('Signup form submitted');
    },
  },
};
</script>
<style>
.signup {
  display: flex;
  flex-direction: column;
}
.input{
  margin: 5px;
}
.password-validation {
  margin-top: 5px;
}

.no-bullets {
  list-style-type: none;
}
.signup-button{

}
</style>