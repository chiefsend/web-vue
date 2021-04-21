<template>
  <main class="page contact-page">
    <section class="portfolio-block contact">
      <div class="container">
        <div class="heading">
          <h2>Upload</h2>
        </div>
        <form class="shadow-lg">
          <div class="progress" v-if="uploadProgress > 0">
            <div class="progress-bar bg-primary progress-bar-animated" v-bind:aria-valuenow="uploadProgress"
              aria-valuemin="0" aria-valuemax="100" v-bind:style="'width: ' + uploadProgress + '%;'">
              {{ uploadProgress }}%</div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3"><label class="form-label" for="name">Share Name</label><input class="form-control item" type="text" id="name" placeholder="Name"></div>
            </div>
          </div>
          <div class="row">
            <div class="col"><input class="form-control" type="file"></div>
          </div>
          <div class="row">
            <div class="col">
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
            <div class="col">
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
          <div class="row">
            <div class="col">
              <div class="form-check"><input class="form-check-input" type="checkbox" id="isPublic" v-model="isPublic"><label class="form-check-label" for="isPublic">Public</label></div>
            </div>
            <div class="col"><input class="form-control" type="password" placeholder="Password ..." v-model="password"></div>
          </div>
          <div class="row">
            <div class="col"><button class="btn btn-primary btn-lg d-block w-100" type="button" v-on:click="upload()">Upload</button></div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <!-- <button class="btn btn-outline-secondary" data-bs-toggle="collapse" aria-expanded="false" aria-controls="settings" data-bs-target="#settings" type="button">Additional Settings</button> -->
                <button class="btn btn-outline-secondary" type="button" v-on:click="extraCollapsed = !extraCollapsed">Additional Settings</button>
                <div class="collapse" v-bind:class="{ show: extraCollapsed }" id="settings">
                  <span>Emails</span><button class="btn btn-outline-primary btn-sm border rounded-circle" type="button" v-on:click="addEmail()"><i class="fa fa-plus"></i></button>
                  <ul class="list-group">
                    <li class="list-group-item" v-for="(email, index) in emails" v-bind:key="index">
                      <div class="input-group">
                        <input class="form-control" type="email" v-model="emails[index]">
                        <button class="btn btn-outline-primary" type="button" v-on:click="removeEmail(index)" v-bind:disabled="emails.length <= 1">
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
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
      password: "",
      emails: [""],
      extraCollapsed: false,
      uploadProgress: 0
    };
  },
  methods: {
    upload: function() {
      console.log("kekw");
      this.uploadProgress++;
    },
    addEmail: function() {
      this.emails.push("");
    },
    removeEmail: function(index) {
      if(this.emails.length > 1) {
        this.emails.splice(index, 1);
      }
    }
  }
}
</script>

<style>

</style>
