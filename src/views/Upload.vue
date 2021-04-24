<template>
  <main class="page contact-page">
    <section class="portfolio-block contact">
      <div class="container">
        <div class="heading">
          <h2>Upload</h2>
        </div>
        <form class="shadow-lg" v-if="!uploaded">
          <div class="progress" v-if="uploadProgress != null">
            <div class="progress-bar bg-primary progress-bar-animated" v-bind:aria-valuenow="uploadProgress"
              aria-valuemin="0" aria-valuemax="100" v-bind:style="'width: ' + uploadProgress + '%;'"
              v-bind:disabled="uploadProgress != null">
              {{ uploadProgress }}%</div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3"><label class="form-label" for="name">Share Name</label>
                <input class="form-control item" type="text" id="name" placeholder="Name (optional)"
                  v-bind:disabled="uploadProgress != null"></div>
            </div>
          </div>
          <div class="row">
            <div class="col"><input type="file" class="form-control" id="files" ref="files"
              multiple required v-on:change="files = $refs.files.files" v-bind:disabled="uploadProgress != null"></div>
            <div class="text-danger" v-if="filesError != null">
              {{ filesError }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <select class="form-select" v-model="timer" v-bind:disabled="uploadProgress != null">
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
              <select class="form-select" v-model="downloadLimit" v-bind:disabled="uploadProgress != null">
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
              <div class="form-check"><input class="form-check-input" type="checkbox" id="isPublic" v-model="isPublic"
                v-bind:disabled="uploadProgress != null">
                <label class="form-check-label" for="isPublic">Public</label></div>
            </div>
            <div class="col"><input class="form-control" type="password" placeholder="Password ..." v-model="password"
              v-bind:disabled="uploadProgress != null"></div>
          </div>
          <div class="row">
            <div class="col"><button class="btn btn-primary btn-lg d-block w-100" type="button" v-on:click="upload()"
              v-bind:disabled="uploadProgress != null">Upload</button></div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <button class="btn btn-outline-secondary" type="button" v-on:click="collapseEmails()"
                  v-bind:disabled="uploadProgress != null">Additional Settings</button>
                <div class="collapse" v-bind:class="{ show: extraCollapsed }" id="settings">
                  <span>Emails</span>
                  <button class="btn btn-outline-primary btn-sm border rounded-circle" type="button" v-on:click="addEmail()"
                    v-bind:disabled="uploadProgress != null"><i class="fa fa-plus"></i></button>
                  <ul class="list-group">
                    <li class="list-group-item" v-for="(email, index) in emails" v-bind:key="index">
                      <div class="input-group">
                        <input class="form-control" type="email" v-model="emails[index]" v-bind:disabled="uploadProgress != null">
                        <button class="btn btn-outline-primary" type="button" v-on:click="removeEmail(index)"
                          v-bind:disabled="emails.length <= 1 || uploadProgress != null">
                          <i class="fa fa-minus"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row" v-if="errorMsg">
            <div class="col">
              <div class="card bg-danger text-white">
                <div class="card-body">
                  {{ errorMsg }}
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="card" v-else>
          <div class="card-body">
            <p>Die Dateien wurded nun hochgeladiert</p>
            <div class="row">
              <div class="col"><router-link class="btn btn-primary btn-lg d-block w-100" role="button"
                v-bind:to="{ name: 'download', params: { id: shareID } }">Show download</router-link></div>
            </div>
            <div class="row">
              <div class="col"><button class="btn btn-danger btn-lg d-block w-100" type="button" v-on:click="reset()">Upload new file</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ax from "@/api"

export default {
  name: "Upload",
  data() {
    return {
      uploadName: "",
      files: [],
      filesError: null,
      timer: "3",
      downloadLimit: "1",
      isPublic: false,
      password: "",
      emails: [""],
      extraCollapsed: false,
      uploadProgress: null,
      uploaded: false,
      errorMsg: ""
    };
  },
  methods: {
    reset: function() {
      Object.assign(this.$data, this.$options.data());
    },
    upload: function() {
      // check if user has selected at least one file
      if(this.files.length == 0) {
        this.filesError = 'You have to select at minimum one file.';
        return;
      }
      this.filesError = null;

      // doing actual upload process
      let vueThis = this;
      vueThis.uploadProgress = 0;
      let data = {
        'name': vueThis.uploadName,
        'is_public': vueThis.isPublic,
        'emails': vueThis.emails.filter(email => email != '')
      }

      // check if a password has been set
      if(vueThis.password != '') {
        data['password'] = vueThis.password;
      }

      // check if there is a download limit on this file
      if(vueThis.downloadLimit != '-1') {
        data['download_limit'] = parseInt(vueThis.downloadLimit);
      }

      // decide if the file should be kept forever
      if(vueThis.timer == '-1') {
        data['IsTemporary'] = true;
      } else {
        let expires = new Date();
        expires.setMinutes(expires.getMinutes() + parseInt(vueThis.timer));
      }

      ax.post('/shares', data).then(function (response) {
        vueThis.shareID = response.data.id;

        let promises = [];
        let lastUploadStatus = [];
        let currUploadStatus = 0, totalFileSize = 0;

        vueThis.files.forEach((file, index) => {
          let formData = new FormData();
          formData.append('file', file);

          promises.push(ax.post(`/share/${vueThis.shareID}/attachments`,
            formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: function(progressEvent) {
                currUploadStatus -= lastUploadStatus[index];
                currUploadStatus += progressEvent.loaded;
                lastUploadStatus[index] = progressEvent.loaded;

                vueThis.uploadProgress = Math.round((currUploadStatus * 100) / totalFileSize);
              }
            }));
          lastUploadStatus.push(0);
          totalFileSize += file.size;
        });

        Promise.all(promises).then(function() {
          ax.post(`/share/${vueThis.shareID}`).then(function () {
            vueThis.uploaded = true;
          }).catch(function (error) {
            vueThis.errorMsg = error;
          });
        }).catch(function (error) {
          vueThis.errorMsg = error;
        });
      }).catch(function (error) {
        vueThis.errorMsg = error;
      });
    },
    collapseEmails: function() {
      if(this.extraCollapsed) {
        this.emails = [""]
      }
      this.extraCollapsed = !this.extraCollapsed;
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
