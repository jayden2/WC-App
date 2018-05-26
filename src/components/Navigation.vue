<template>
  <nav>
    <div class="container">
      <h1 class="title">World Cup 2018</h1>
      <div class="sub-nav">
        <router-link class="btn btn-primary" to="/dashboard/ladder" v-if="user">Ladder</router-link>
        <router-link class="btn btn-primary" to="/dashboard/selections" v-if="user">Game Selections</router-link>
      </div>
      <div class="user-info">
        <span v-if="user" class="user-email">{{ user.displayName }}</span>
        <router-link to="/login" v-if="!user">Login</router-link>
        <router-link to="/signup" v-if="!user">Sign Up</router-link>
        <a href="#" @click="logout" v-if="user">Logout</a>
      </div>
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
  .container {
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .title {
    color: white;
    font-size: 1.4em;
    font-weight: bold;
  }
  nav {
    color: white;
    background: black;
    padding: 18px;

    .sub-nav {
      button {
        background: #3589bb;
        padding: 10px 40px;

        &:hover,
        &:focus {
            background: darken(#3589bb, 5%);
        }
      }
    }

    .user-info {
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
