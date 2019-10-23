<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view-tabbar current="0" class="tabbar"   :tabs="tabs"></view-tabbar>
	</view>
</template>

<script>
	import viewTabbar from '../../components/uni-tabbar.vue'
	export default {
		data() {
			return {
				title:"首页",
				tabs: [{
						url: "index",
						type: "bliaotian",
						title: '聊天',
						page: 'chat'
					}, {
						url: "/pages/chat/friend-circle",
						type: "find",
						title: '朋友圈',
						page: 'chat'
					},
					{
						url: "/pages/chat/group",
						type: "tuandui",
						title: ' 团队',
						page: 'chat'
					},
					{
						url: "/pages/chat/mail-list",
						type: "txl",
						title: ' 通讯录',
						page: 'chat'
					},
					{
						url: "user",
						type: "user",
						title: ' 我的',
						page: 'index'
					}
				]
			}
		},
		components: {
			viewTabbar,
		},
	}
</script>

<style scoped>
	.content {
		text-align: center;
		height: 100vh;
	}

	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;

	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
