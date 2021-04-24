<template>
  <main class="page cv-page">
    <section class="portfolio-block cv">
      <div class="container">
        <div class="heading">
          <h2>Download</h2>
          <h3></h3>
        </div>
        <div class="group">
          <ul class="list-group">
            <li class="list-group-item"><span>datei-1.txt</span><button class="btn btn-outline-primary float-end" type="button"><i class="fa fa-download"></i></button></li>
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
    let id = this.$route.params.id;
    console.log(this.$route.params);
    ax.get(`/share/${id}`, {}, {
      auth: {
        username: "",
        password: ""
      }
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    return {
      id: id
    }
  }
}
</script>