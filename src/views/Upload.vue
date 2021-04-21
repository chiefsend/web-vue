<template>
  <div class="container pb-5">
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Upload</h1>
      <p class="lead">Here you can upload files up to 1000MB and share it instantly</p>
    </div>

    <div class="card shadow text-align=">
      <div class="card-header">
        <input class="form-control" v-model="uploadName" placeholder="Upload name (optional)">
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="file" class="form-control" aria-label="Upload files" required multiple>
        </div>
        <div class="row form-group pt-3">
          <div class="col-sm">
            <select class="form-select" v-model="timer">
              <option value="3">3 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="120">2 hours</option>
              <option value="360">6 hours</option>
              <option value="1440">1 day</option>
              <option value="10080">7 day</option>
              <option value="43200">1 day</option>
              <option value="-1">Forever</option>
            </select>
          </div>
          <div class="col-sm">
            <select class="form-select" v-model="downloadLimit">
              <option value="1">1 download</option>
              <option value="2">2 downloads</option>
              <option value="5">5 downloads</option>
              <option value="15">15 downloads</option>
              <option value="50">50 downloads</option>
              <option value="200">200 downloads</option>
              <option value="-1">Infinity</option>
            </select>
          </div>
        </div>
        <div class="row form-group pt-3">
          <div class="col-sm">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="isPublic" v-model="isPublic">
              <label class="form-check-label" for="Is Public">Is Public</label>
            </div>
          </div>
          <div class="col-sm">
            <input class="form-control" v-model="password" placeholder="Password (optional)">
          </div>
        </div>
        <div class="form-group pt-3 text-center">
          <button type="button" style="" v-on:click="upload()" class="btn btn-primary btn-lg btn-block">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ax from "@/api"

export default {
  name: "Upload",
  data() {
    return {
      uploadName: "",
      timer: "3",
      downloadLimit: "1",
      isPublic: false,
      password: ""
    };
  },
  methods: {
    upload: function() {
      console.log("kekw");
    }
  }
}
</script>

<style>

</style>
