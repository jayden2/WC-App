<template>
  <div class="sign-up">
      <h3>Create Account</h3>
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <p class="error">{{ message }}</p>
      <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'signUp',
    data: function() {
      return {
        email: '',
        password: '',
        message: ''
      }
    },
    methods: {
      signUp: function() {        
        firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.$router.replace('dashboard');
          },
          (error) => {
            this.message = error.message;
          }
        );
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sign-up {
    margin-top: 40px;
    text-align: center;
  }
  .error {
    margin: 0;
    font-size: 0.85em;
    color: red;
  }
  h3 {
    font-size: 1.6em;
  }
  input {
    margin: 10px 0;
    width: 50%;
    padding: 12px;
    line-height: 1.3;

    &:focus {
      border: solid 1px black;
    }
  }
  button {
    color: #fff;
    background: #3589bb;
    border: none;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 50px;
    width: 50%;
    cursor: pointer;

    &:hover,
    &:focus {
      background: darken(#3589bb, 5%);
    }
  }
  p {
    margin-top: 40px;
    font-size: 1em;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
