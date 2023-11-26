<template>
      <div v-for="post in postList" :key="post.id">
        <PostComponent :post="post" />
      </div>
  <button class="reset-button" v-on:click="ResetLikes">Reset likes</button>
  </template>
  
  <script>
  import PostComponent from '@/components/PostComponent.vue';

export default {
  components: {
    PostComponent,
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
  methods: {
    ResetLikes: function (){
      this.$store.commit("ResetLikes")
    }
    },
};
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .reset-button {
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

.reset-button:hover {
  background-color: #2980b9;
}

  </style>