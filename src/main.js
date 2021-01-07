// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'

// node_modules\popper.js\dist\popper.min.js
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js/dist/popper.min.js'

// node_modules\jquery\dist\jquery.js
// import $ from 'jquery'
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'

import './assets/index.css'
import './assets/font/font-1/iconfont.css'


// Vue.use(ElementUI)
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
}
