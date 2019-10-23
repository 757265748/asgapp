<template>
	<!-- #ifdef APP-PLUS -->
	<!-- #endif -->
	<button @tap="test">btn</button>
</template>
<script>
// const bcPlugin = uni.requireNativePlugin('dahui-baichuan');
import registerLp1 from '@/api/user.js';
import uniSegmentedControl from '@/components/uni-segmented-control.vue';
export default {
	data() {
		return {
			phone: 15555555555
		};
	},
	onLoad() {
		uni.request({
			url: 'http://39.108.215.49/api/get/good/hotlist',
			method: 'get',
			success: function(res) {
				console.log(res.data);
			}
		});
	},
	components: {
		uniSegmentedControl
	},
	methods: {
		test(e) {
			registerLp1(15555555555).then(res => {
				console.log(res.query);
				// if (res.code) {
				// 	uni.switchTab({
				// 		url: '/pages/index/user1'
				// 	});
				// }
			});
			//location="https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://www.fpc98.com/web/smtoutside/waixielogin.aspx/&state=1212&view=web";
		}
	}
};
</script>

<style></style>
