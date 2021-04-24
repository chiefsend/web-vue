<template>
  <main class="page landing-page">
    <section class="portfolio-block block-intro">
      <div class="container">
        <div class="about-me">
          <p>ChiefSend is a......</p>
          <router-link class="btn btn-outline-primary" role="button" to="/upload">Upload Files</router-link>
        </div>
      </div>
    </section>
    <section class="portfolio-block call-to-action border-bottom" style="padding-top: 0 px;">
      <div class="container">
        <div class="input-group">
          <span class="input-group-text">Already have a Share?</span>
          <input class="form-control" type="text" v-model="alreadyID" v-on:keyup.enter="openShare()">
          <button class="btn btn-primary" type="button" v-on:click="openShare()">Open Share</button>
        </div>
      </div>
    </section>
    <section class="portfolio-block skills">
      <div class="container">
        <div class="heading">
          <h2>Features</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0"><i class="icon ion-ios-star-outline"></i></div>
              <div class="card-body">
                <h3 class="card-title">Simple</h3>
                <p class="card-text">Just upload your files and share them with you firend via link</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0"><i class="icon ion-locked"></i></div>
              <div class="card-body">
                <h3 class="card-title">Anonymous</h3>
                <p class="card-text">You don't need an account to use ChiefSend.<br>Also no user data will be collected</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card special-skill-item border-0">
              <div class="card-header bg-transparent border-0"><i class="icon ion-ios-gear-outline"></i></div>
              <div class="card-body">
                <h3 class="card-title">Admin Panel</h3>
                <p class="card-text">If you host ChiefSend yourself, you will find a powerful admin panel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio-block website gradient">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-5 offset-lg-1 text">
          <h3>Host ChiefSend yourself</h3>
          <p>ChiefSend is open source. Find the GitHub repo below to get started.</p>
        </div>
        <div class="col-md-12 col-lg-5">
          <div class="portfolio-laptop-mockup">
            <div class="screen">
              <div class="screen-content" style="background: url(&quot;github.png&quot;) no-repeat;background-size: contain;"></div>
            </div>
            <div class="keyboard"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </main>
</template>

<script>
import router from '@/router';

export default {
  name: 'Home',
  data() {
    return {
      alreadyID: ''
    }
  },
  methods: {
    openShare: function() {
      router.push({ name: 'download', params: { id: this.alreadyID }});
    }
  }
}
</script>
