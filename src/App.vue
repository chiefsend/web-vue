<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div class="container"><a class="navbar-brand logo" href="landing.html">ChiefSend</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarNav"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- TODO fix these with router links -->
            <li class="nav-item"><a class="nav-link" href="landing.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="public.html">Public</a></li>
            <li class="nav-item"><a class="btn btn-outline-light" role="button" href="upload.html">Upload</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="page cv-page">
      <router-view />
    </main>
    <footer class="page-footer" style="padding: 10px 0px 5px;">
      <div class="container">
        <!-- TODO fix these with router links -->
        <div class="links"><a href="/about">About</a><a href="/privacy">Privacy</a></div>
        <div class="social-icons"><a href="https://github.com/chiefsend"><i class="icon ion-social-github"></i></a></div>
      </div>
    </footer>
  </div>
</template>
