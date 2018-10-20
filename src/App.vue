<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-light" v-show="showNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'HelloWorld' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ListItem' }" class="nav-link">List Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AddItem' }" class="nav-link">Add Item</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showNav: '' 
    }
  },
  updated() {
    const routeNotAllowed = `${'Login'}.${'SignUp'}`
    this.showNav = routeNotAllowed.indexOf(this.$route.name) >= 0 ? false : true
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/toastr/build/toastr.min.css';

html {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  color: #41b883 !important;
  cursor: pointer;
}

nav {
  margin-bottom: 20px;
}

#nprogress .bar {
  background: #41b883 !important;
}

</style>