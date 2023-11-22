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
    margin-top: 60px;
  }
  .reset-button{

  }

  </style>