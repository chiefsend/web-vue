<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand"><h1>ChiefSend</h1></a>
        <div class="navbar-nav">
          <router-link class="nav-link" active-class="active" to="/">Upload</router-link>
          <router-link class="nav-link" active-class="active" to="/public">Public</router-link>
          <router-link class="nav-link" active-class="active" to="/privacy">Privacy</router-link>
          <router-link class="nav-link" active-class="active" to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
