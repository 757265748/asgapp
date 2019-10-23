<template>
	<view class="content">
		聊天首页页面中转
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log('页面中转页');
			uni.reLaunch({
				url: '/pages/chat/index' 
			});
		},
	}
</script>