<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div class="container"><router-link class="navbar-brand logo" to="/">ChiefSend</router-link><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarNav"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" v-bind:to="{name: 'home'}">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" v-bind:to="{name: 'public'}">Public</router-link></li>
            <li class="nav-item"><router-link class="btn btn-outline-light" role="button" v-bind:to="{name: 'upload'}">Upload</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="page cv-page">
      <router-view />
    </main>
    <footer class="page-footer" style="padding: 10px 0px 20px;">
      <div class="container">
        <!-- TODO fix these with router links -->
        <div class="links"><router-link v-bind:to="{name: 'about'}">About</router-link><router-link v-bind:to="{name: 'privacy'}">Privacy</router-link></div>
        <div class="social-icons"><a href="https://github.com/chiefsend"><i class="icon ion-social-github"></i></a></div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
