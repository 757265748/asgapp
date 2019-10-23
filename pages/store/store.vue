<template>
	<view class="content">
		商城首页页面中转
	</view>
</template>

<script>
	export default {
		onLoad() {
			console.log('页面中转页');
			uni.redirectTo({
				url: 'index'
			});
		},
	}
</script>
