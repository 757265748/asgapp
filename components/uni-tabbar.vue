<template>
	<view class="content">
		<view v-if="tabs.length > 0" class="wrap" v-for="(item , index) in tabs" :key="index" @click="jump(item.page,item.url,index)">
			<!-- <uni-icons type="chat" color="#fff" size="25" style="z-index:999" :color="current == index? '#ff0000' : '#707070'" /> -->
			<image class="animation-scale-up" :src="item.icon" mode="aspectFit"></image>
			<text :class="current == index? 'txt on' :'txt' ">{{item.type}}</text>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	//自定义tabbar 
	export default {
		components:{
			uniIcons
		},
		props: {
			tabs: {
				type: Array
			},
			current: {
				type: String
			}
		},
		data() {
			return {
				activeindex: 0,
			}
		},
		onLoad() {
			this.activeindex = this.current;
		},

		methods: {
			jump(page, url, index) {
				console.log('跳转路径', url, index, this.current);
				if (url == 'user' || url == 'index') {
					uni.reLaunch({
						url: `/pages/${page}/${url}`
					});
					return
				}
				console.log(url)
				uni.redirectTo({
					url: `./${url}`
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	image{
		width: 60upx;
		height: 60upx;
	}
	.content {
		background: #555555;
		position: fixed !important;
		z-index: 999 !important;
		left: 0 !important;
		bottom: 0px !important;
		right: 0 !important;
		display: flex !important;
		flex-direction: row !important;
		justify-content: space-around !important;
		align-items: center !important;
		text-align: center !important;
		height: 56px !important;
		width: 100% !important;
		padding: 4upx 0;
		border-top: 1upx solid #ccc !important;
		background: #fff;

		.wrap {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items:center;
			.txt {
				font-size: 10px;
				color: #707070;
			}

			.on {
				color: #ff0000;
			}
			.icon{
				 
			}
		}

	}
</style>
