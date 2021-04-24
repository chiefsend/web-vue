<template>
  <main class="page cv-page">
    <section class="portfolio-block cv">
      <div class="container">
        <div class="heading">
          <h2>Download</h2>
          <h3 v-if="name">{{ name }}</h3>
        </div>
        <div class="card special-skill-item border-0" v-if="loading">
          <div class="card-body">
            Loading...
          </div>
        </div>
        <div class="card bg-danger text-white" v-else-if="error != null">
          <div class="card-body text-center">
            <p>{{ error.response.data }}</p>

            <div class="row" v-if="error.response.status == 401">
              <div class="col text-center">
                <div class="mb-3">
                  <input class="form-control item" type="password" id="password" placeholder="Password"
                    v-model="password" v-on:keyup.enter="showShare()"></div>
                <button class="btn btn-primary btn-lg d-block w-100" type="button"
                  v-on:click="showShare()">Reload page</button>
              </div>
            </div>
          </div>
        </div>
        <div class="group" v-else>
          <ul class="list-group">
            <li class="list-group-item" v-for="file in files" v-bind:key="file.id">
              <span>{{ file.filename }}</span>
              <a class="btn btn-outline-primary float-end" type="button"
                v-on:click="download(`/share/${id}/attachment/${file.id}`)">
                <i class="fa fa-download"></i>
              </a>
            </li>
          </ul>
          <button class="btn btn-primary d-block w-100" type="button">Download all</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ax from "@/api";

export default {
  name: "Download",
  data() {
    return {
      loading: true,
      error: null,
      name: null,
      password: ''
    }
  },
  created() {
    this.showShare();
  },
  methods: {
    showShare: function() {
      let vueThis = this;

      let id = this.$route.params.id;
      this.id = id;
      this.loading = true;
      this.error = null;
      ax.get(`/share/${id}`, {
        auth: {
          username: id,
          password: this.password
        }
      }).then(function (response) {
        vueThis.loading = false;
        vueThis.name = response.data.name;
        vueThis.files = response.data.files;
      }).catch(function (error) {
        vueThis.loading = false;
        vueThis.error = error;
      });
    },
    download: function(url) {
      ax.get(url, { responseType: 'blob' }, {
        auth: {
          username: this.id,
          password: this.password
        }}).then(function (response) {
          console.log(response);
      });
    }
  }
}
</script>