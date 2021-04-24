<template>
  <main class="page cv-page">
    <section class="portfolio-block cv">
      <div class="container">
        <div class="heading">
          <h2>Download</h2>
          <h3></h3>
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
                    v-model="password"></div>
                <button class="btn btn-primary btn-lg d-block w-100" type="button"
                  v-on:click="loadShare(password)">Reload page</button>
              </div>
            </div>
          </div>
        </div>
        <div class="group" v-else>
          <ul class="list-group">
            <li class="list-group-item" v-for="file in files" v-bind:key="file.id">
              <span>{{ file.filename }}</span>
              <a class="btn btn-outline-primary float-end" type="button">
                <i class="fa fa-download"></i>
              </a>
            </li>
          </ul>
          <button class="btn btn-primary d-block w-100" type="button">Download All</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ax from "@/api"

export default {
  name: "Download",
  data() {
    return {
      loading: true,
      error: null,
      password: ''
    }
  },
  created() {
    this.loadShare('');
  },
  methods: {
    loadShare: function() {
      let vueThis = this;

      let id = this.$route.params.id;
      this.loading = true;
      this.error = null;
      ax.get(`/share/${id}`, {}, {
        auth: {
          username: id,
          password: vueThis.password
        }
      }).then(function (response) {
        vueThis.loading = false;
        vueThis.files = response.data.files;
      }).catch(function (error) {
        vueThis.loading = false;
        vueThis.error = error;
      });
    }
  }
}
</script>