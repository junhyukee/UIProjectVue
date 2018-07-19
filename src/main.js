// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Project component for home page
Vue.component('display-project', {
  props: ['project', 'index'],
  template: `<div class="project">
            <div class="main-image">
              <img v-bind:src="project.desktopImage" v-bind:alt="project.alt" class="d-image">
              <img v-bind:src="project.mobileImage" v-bind:alt="project.alt" class="m-image">
              <div class="title" v-bind:class="{ 'left-title': index%2 === 1 }">
                <h3>{{ project.title }}</h3>
              </div>
            </div>
            <div class="project-content">
              <p> {{ project.content }} </p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
          </div>`
})

// Location component for footer
Vue.component('display-location', {
  props: ['location'],
  template: `<div class="location">
          <h3>{{ location.name }}</h3>
          <p v-html='location.address'>
          </p>
        </div>`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
