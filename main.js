import Vue from 'vue'
import App from './App'
import uniIcon from './components/uni-icon.vue'
import Json from './Json' //测试用数据
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

Vue.prototype.$api = {json};
Vue.component('uni-icon',uniIcon)
Vue.config.productionTip = false
Vue.prototype.$cloud = uniCloud;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
