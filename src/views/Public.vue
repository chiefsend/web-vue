<template>
  <main class="page projets-page">
    <section class="portfolio-block project-no-images">
      <div class="container">
        <div class="heading">
          <h2>Public shares</h2>
        </div>
        <div class="row">
          <div class="card special-skill-item border-0" v-if="loading">
            <div class="card-body">
              Loading...
            </div>
          </div>
          <div class="col-md-6 col-lg-4" v-else v-for="share in shares" v-bind:key="share.id">
            <div class="project-card-no-image">
              <h3>{{ share.name }}</h3>
              <h4><template v-if="share.expires"> Expires: {{ share.expires }}</template>
                <br><template v-if="share.download_limit">Download Limit: {{ share.download_limit }}</template></h4>
              <router-link class="btn btn-outline-primary btn-sm" role="button" v-bind:to="{ name: 'download', 'params': { 'id': share.id } }">Open</router-link>
              <div class="tags"><span class="text-muted">{{ humanFileSize(getTotalSize(share)) }}</span></div>
            </div>
          </div>
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
      loading: true
    };
  },
  created() {
    let vueThis = this;
    ax.get('shares').then(function (response) {
      vueThis.loading = false;
      vueThis.shares = response.data;
    });
  },
  methods: {
    getTotalSize(share) {
      let totalBytes = 0;
      share.files.forEach(file => {
        totalBytes += file.filesize;
      });
      return totalBytes;
    }
  }
}
</script>