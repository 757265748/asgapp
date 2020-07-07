import Vue from 'vue'
import App from './App'
import uniIcon from './components/uni-icon.vue'
import uniIcons from './components/uni-icons/uni-icons.vue'

Vue.component('uni-icons',uniIcons)
Vue.config.productionTip = false
Vue.prototype.$cloud = uniCloud;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
