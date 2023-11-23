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
          <li v-if="!hasMinLength">At least 8 characters and less than 15 characters</li>
          <li v-if="!hasUpperCase">At least one uppercase alphabet character</li>
          <li v-if="!hasLowerCase">At least two lowercase alphabet characters</li>
          <li v-if="!hasNumeric">At least one numeric value</li>
          <li v-if="!startsWithUpperCase">Should start with an uppercase alphabet</li>
          <li v-if="!hasUnderscore">Should include the character "_"</li>
        </ul>
      </div>
      <button type="submit" :disabled="!isPasswordValid" class="signup-button">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    hasLowerCase: function() {
      const lowerCaseCount = (this.password.match(/[a-z]/g) || []).length;
      return lowerCaseCount >= 2;
    },
    hasMinLength: function() {
      return this.password.length >= 8 && this.password.length < 15;
    },
    hasNumeric: function () {
      return /\d/.test(this.password);
    },
    hasUnderscore: function () {
      return /_/.test(this.password);
    },
    hasUpperCase: function () {
      return /[A-Z]/.test(this.password);
    },
    startsWithUpperCase: function () {
      return /^[A-Z]/.test(this.password);
    },
  },
  data() {
    return {
      username: '',
      password: '',
      isPasswordValid: true,
    };
  },
  methods: {
    validatePassword() {
      // Combine the individual conditions to determine overall password validity
      this.isPasswordValid =
          this.hasMinLength &&
          this.hasUpperCase &&
          this.hasLowerCase &&
          this.hasNumeric &&
          this.startsWithUpperCase &&
          this.hasUnderscore;
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

.input {
  margin: 5px;
}

.password-validation {
  margin-top: 5px;
}

.no-bullets {
  list-style-type: none;
}

.signup-button {

}
</style>