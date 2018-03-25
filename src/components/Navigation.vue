<template>
  <nav>
    <h1 class="title">Title</h1>
    <div class="user-info">
      <span v-if="user" class="user-email">{{ user.email }}</span>
      <router-link to="/login" v-if="!user">Login</router-link>
      <router-link to="/signup" v-if="!user">Sign Up</router-link>
      <a href="#" @click="logout" v-if="user">Logout</a>
    </div>
  </nav>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'navigation',
    data: function() {
      return {}
    },
    computed: {
      user() {
        return this.$store.getters.getUser;
      }
    },
    methods: {
      logout: function() {
        firebase.auth()
          .signOut()
          .then(() => {
            this.$router.replace('login');
          }, function(error) {
            alert(error);
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    display: inline;
    color: white;
    font-size: 1.4em;
    margin: 0;
  }
  nav {
    color: white;
    position: relative;
    background: black;
    margin: 0;
    padding: 18px;
    top: 0;

    &:after {
      clear: both;
    }

    .user-info {
      float: right;
      margin-bottom: 15px;

      .user-email {
        font-size: 0.95em;
        border-right: solid 1.5px white;
        padding-right: 10px;
        margin-right: 10px;
      }

      &:after {
        clear: both;
      }
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
      font-size: 0.9em;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
</style>
