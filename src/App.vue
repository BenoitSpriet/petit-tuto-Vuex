<template>
    <div id="nav">
      <router-link to="/"><img src="@/assets/home_black_24dp.svg" alt="back home"></router-link>
      Post-it
      <router-link to="/create"> <img src="@/assets/note_add_white_24dp.svg" alt="create new post button"></router-link>
    </div>
    <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

* {
  margin : 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: white;
  list-style: none;
  z-index: 100;
}

button {
  cursor: pointer;
  background-color: transparent;
  border : 2px solid rgb(255, 255, 255, 0.5);
  color: rgb(255, 255, 255, 0.5);

  padding: 0.4rem 1rem;
  font-size: 3rem;
  border-radius: 1rem;
}

html {
  background: url(https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80) no-repeat top/cover;
}

#app {
  margin: 0.5rem;
}

#nav {
  padding: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  display: flex;
  justify-content: space-between;

  background-color: rgb(255, 255, 255, 0.1);
  // border: solid 1px rgb(255, 255, 255, 0.8);
}

#nav p {
  color: white;
  opacity: 0.7;
  font-size: 2rem;
}
</style>
