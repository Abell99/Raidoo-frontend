// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


// import 'bootstrap'
// node_modules\popper.js\dist\popper.min.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.css'
import './assets/font/font-1/iconfont.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DefaultLayout from '~/layouts/Default.vue'

// import $ from 'jquery/dist/jquery.js'

// window.Popper = require('popper.js').default;
// require('jquery')

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.js'



// Vue.use(ElementUI)
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(ElementUI)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
}
