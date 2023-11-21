<template>
    <header>
      <h1>BEST POSTS IN THE WORLD!</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link>
      </nav>
    </header>
  </template>

<style>
nav {
  float: left;
  padding: 0 10px;
}

nav a {
  text-transform: uppercase;
  font-size: .99em;
  align-items: center;
  text-decoration: none;
  padding: 15px 10px;
}

nav a:hover {
    background-color: #2B4570;
    color: #e1dbdc;
}

nav a.router-link-exact-active {
  font-weight: bold;
  
}

header {
    display: flex;
    flex-direction: column;
    padding-top: .9em;
    padding-bottom: .9em;
    border: 2px solid #df8666;
    background-color: #e6beaf;
    border-radius: 5px;
}
</style>