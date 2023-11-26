<template>
    <div class="side-box" :side="side"></div>
  </template>
  
  <script>
  export default {
    name: 'SideComponent',
    props: {
      side: String,
    },
    computed: {
      boxStyle() {
        return this.side === 'left'
          ? { marginRight: '10px' }
          : { marginLeft: '10px' };
      },
    },
  };
  </script>
  
  <style scoped>
  .side-box {
    border: 2px solid #df8666;
    background-color: #e6beaf;
    border-radius: 5px;
    width: 10%;
    min-height: 100%;
    margin-bottom: 5px;
  }
  </style>
  