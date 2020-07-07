<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view-tabbar current="0" :tabs="tabs"></view-tabbar>
	</view>
</template>

<script>
	import viewTabbar from '../../components/uni-tabbar.vue'
	export default {
		data() {
			return {
				title:"学院首页",
				tabs: [{
						url: "index",
						type: "baokuan",
						title: '每日爆款',
						icon:'../../static/bar/home_off.png',
						page: 'school'
					}, {
						url: "/pages/school/pub-ma",
						type: "xuanchuan",
						title: '宣传素材',
						icon:'../../static/bar/home_off.png',
						page: 'school'
					},
					{
						url: "/pages/school/school-knowlege",
						type: "study",
						title: '知识学院',
						icon:'../../static/bar/home_off.png',
						page: 'school'
					},
					{
						url: "/pages/school/recommend",
						type: "xinyu",
						title: ' 每日心语',
						icon:'../../static/bar/home_off.png',
						page: 'school'
					},
					{
						url: "user",
						type: "user",
						title: ' 我的',
						icon:'../../static/bar/home_off.png',
						page: 'index'
					}
				],
				reloadFlag:false
			}
		},
		components: {
			viewTabbar,
		},
		onReady() {
			if(!uni.getStorageSync("reloadFlag")){
				this.reloadFlag=true;
				uni.setStorageSync("reloadFlag",true);
				setTimeout(()=>{
					uni.reLaunch({
						url: `/pages/school/index`
					});
				},100)
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
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
