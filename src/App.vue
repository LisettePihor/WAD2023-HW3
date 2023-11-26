<template>
  <div id="app">
    <HeaderComponent />
    <div class="app-container">
      <div class="main-container">
        <SideComponent side="left" />
        <div class="posts-container">
          <router-view />
        </div>
        <SideComponent side="right" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SideComponent from './components/SideComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SideComponent,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2B4570;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-container {
  display: flex;
  flex: 1;
}

.main-container {
  display: flex;
  flex: 1;
}

.posts-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
