<template>
	<view class="nav" :style="{background:background}">
		<view class="back" @click="back" style="width: 30px;">
			<uni-icon type='arrow-left' size="20" :color="color" ></uni-icon>
		</view>
		<view class="title" :style="{color:color}">{{title}}</view>
	</view>
</template>
<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#333'
			},
			background: {
				type: String,
				default: "#fff"
			},
			title: {
				type: String,
				default: "爱省购"
			}
		},
		methods: {
			back() {
				this.$emit('back')
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		height: 100upx;
		padding-top: 30upx;
		border-bottom: 1px solid #f8f8f8;
		z-index: 99;
		width: 100%;
		.back {
			width: 30px!important;
			float: left;
		}

		.title {
			margin: 0 auto;
			// color: #333;
			font-size: 30upx;
			font-weight: 600;
		}
	}
</style>
