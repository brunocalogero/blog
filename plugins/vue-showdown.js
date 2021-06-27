import Vue from 'vue'
import VueShowdown from 'vue-showdown'

Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: true,
  },
})

// import Vue from 'vue'
// import { VueShowdownPlugin } from 'vue-showdown'

// Vue.component('vue-showdown', VueShowdownPlugin)