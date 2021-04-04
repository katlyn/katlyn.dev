import Vue from 'vue'
import App from './App.vue'

import './assets/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#now-playing')

const colors = [
  'peach',
  'strawberry',
  'cantaloupe',
  'banana',
  'watermelon',
  'mint',
  'water',
  'ube'
  // 'tapioca'
]

const color = colors[Math.floor(Math.random() * colors.length)]
document.documentElement.style.setProperty('--accent', `var(--${color})`)
