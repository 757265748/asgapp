import Vue from 'vue'
import App from './App'
import uniIcon from './components/uni-icon.vue'

Vue.component('uni-icon',uniIcon)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
