<template>
    <section>
    <div class="post">
      <img class="profile_icon" src="../assets/profile_icon.png" alt="Profile Icon">
      <p class="date">{{ post.date}}</p>
      <img class="image" :src="post.image" alt="Post Image :(">
      <h3 class="comment-box"> @{{ post.username }}: "{{ post.content }}"</h3>
      <img class="like" src="../assets/likeButton.png" alt="Like Icon" v-on:click="IncreaseLikes(post.id)">
      <p class="like-count">{{post.likeCount}} Likes</p>
    </div>
    </section>
  </template>
  
  <script>
  export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
    methods:{
      IncreaseLikes: function (postID) {
        this.$store.commit("IncreaseLikes",postID)
      },
    }
};

  </script>
  
  <style>
  section{
    display: flex;
    width: 100%;
    min-height: 100%;
    margin-bottom: 5px;
    margin-left: 10px; 
    flex-direction: column;
    align-items: center;
}
  .post{
    background-color: #eadedc;
    border: 2px solid #e7c1b3;
    border-radius: 5px;
    width: 75%; 
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.username{
    text-align: left;
}
.user-info {
  display: flex;
  align-items: center; 
  margin-bottom: 10px; 
}

.comment-box{
    text-align: left;
    padding-top: 50px;
    position: relative;
}

.image{
    margin-top: 80px; 
    object-fit: cover;
    max-width: 100%;
    max-height: 80%;
}

.profile_icon{
    position: absolute;
    height: 50px;
    width: 50px;
    top:5px;
    left:0;
    padding: 5px 10px;
}

.like{
    padding-top: 10px;
    height: 50px;
    width: 50px;
}

.date{
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
}
.like-count{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
}
  </style>