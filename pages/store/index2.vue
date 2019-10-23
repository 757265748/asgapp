<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view-tabbar class="tabbar" current=0 :tabs="tabs"></view-tabbar>
	</view>
</template>

<script>
	import viewTabbar from '../../components/uni-tabbar.vue'
	export default {
	data() {
		return {
			title: '商城',
			tabs: [{
				url:"index",
				type: "store",
				title: '商城',
				page:'store'
			},{
				url:"/pages/store/circle",
				type:"find",
				title:'商圈',
				page:'store'
			} ,
			{
				url:"/pages/store/customer",
				type:"bliaotian",
				title:' 客服',
				page:'store'
			} ,
			{
				url:"/pages/store/shopcar",
				type:"gouwuche",
				title:' 购物车',
				page:'store'
			} ,
			{
				url:"user",
				type:"user",
				title:' 我的',
				page:'index'
			} ]
		}
	},
	onLoad() {
		 
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
