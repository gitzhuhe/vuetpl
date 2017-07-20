// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import headerTpl from './components/header'
import list from './components/list.vue'
import { Loadmore } from 'mint-ui'
import 'mint-ui/lib/Loadmore/style.css'

console.log(Loadmore.name)
Vue.component(Loadmore.name, Loadmore)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#header',
  data: {
    list: [1, 2, 3, 4, 5, 56, 6, 7, 78, 8, 9, 90, 0, 11, 1, 2, 3, 4, 5, 56, 6, 7, 78, 8, 9, 90, 0, 11]
  },
  mounted: function () {
  },
  template: '<headerTpl/>',
  components: { headerTpl }
})
new Vue({
  el: '#list',
  template: '<list/>',
  components: { list }
})
