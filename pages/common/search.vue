<template>
	<view class="content">
		<!-- <nav-bar title="搜索" color="#ffffff" background="#ff0000" ></nav-bar> -->
		<view class="search-container">
			<view class="title">搜索</view>
		</view>
		<view class="search-box">
			<view class="wrap">
				<view class="placeholder">
					<uni-icon type="search" color="#b5b5b5" size="18"></uni-icon>
					<input @confirm='submit' placeholder="搜索商品关键字" @input='_getinput' :value="value" />
				</view>
				<uni-icon @click="clear" v-if="isShow" type="clear" color="#b5b5b5" size="18"></uni-icon>
			</view>
		</view>
		<view class="container">
			<view class="search-title">大家都在搜</view>
			<view class="all-search-wrap">
				<tag-item :tag="tag" @onchange="onTap" color='#ff0000' v-for="(tag, hottagindex) in hottags" :key="hottagindex"></tag-item>
			</view>
			<view class="history">
				<view class="history-title">
					<view class="search-title">搜索历史</view>
					<uni-icon type="delete" size="14" color="#ccc" @click="clearsearch"></uni-icon>
				</view>
				<view class="all-search-wrap">
					<tag-item :tag="tag" @onchange="onTap" v-for="(tag, hindex) in tags" :key="hindex"></tag-item>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import tagItem from '@/components/tag.vue'
	export default {
		data() {
			return {
				value: '',
				isShow: false,
				hottags: ["母婴", "美妆", "家电", "数码", "羊毛衫"],
				tags: ["母婴", "美妆", "家电", "数码", "羊毛衫"],
			}
		},
		components: {
			navBar,
			tagItem
		},
		onLoad() {
			this.tags = uni.getStorageSync('historysearch') || [];
		},
		methods: {
			clearsearch() {
				let that = this;
				if (this.tags.length == 0) return
				uni.showModal({
					title: '温馨提示',
					content: '确定要删除历史搜索记录？',
					success: function(res) {
						if (res.confirm) {
							that.tags = [];
							console.log('清楚后的tags', that.tags)
							uni.setStorageSync('historysearch', that.tags);
							uni.showToast({
								title: '删除成功',
								icon: 'success'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			submit(e) {
				this.value = e.detail.value.trim();
				this.uptags(this.value);
				uni.navigateTo({
					url: `/pages/common/search-detail?keyword=${this.value}`
				})
			},
			uptags(value) {
				if (this.tags.indexOf(this.value) != -1) {
					return;
				}
				if (this.tags.length == 10) {
					this.tags.pop();
					this.tags.unshift(this.value);
				} else {
					this.tags.unshift(this.value);
				}
				uni.setStorageSync('historysearch', this.tags);
			},
			_getinput(e) {
				this.value = e.detail.value.trim();
				if (this.value) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			},
			clear() {
				console.log('清楚');
				this.value = ''
				this.isShow = false;
			},
			onTap(value) {
				console.log('aaac', value)
				this.value = value
				this.isShow = true
				this.submit({
					detail: {
						value,
					}
				})
				// console.log(value)
			},
		}
	}
</script>
<style lang="less" scoped>
	.search-box {
		width: 100%;
		height: 102upx;
		border-bottom: 1px solid #f8f8f8;

		.wrap {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			margin: 10px auto 0 auto;
			width: 75%;
			height: 50upx;
			padding: 10upx;
			border: 1px solid #eee;
			border-radius: 10upx;
		}

		.placeholder {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 0 auto;
			width: 100%;

		}
	}

	.search-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f8f8f8;
		width: calc(100% - 40upx) 100%;
		line-height: 30upx;
		background: #fff;
		padding: 30upx 20upx 20upx 20upx;
		margin-top: 40upx;
		z-index: 999;
		display: block;
		text-align: center;
	}

	.container {
		width: 96%;
		margin: 0 auto;
	}

	.search-title {
		span {
			margin-top: 30rpx;
			color: #000;
			font-size: 30rpx;
			font-weight: 700;
		}
	}

	.all-search-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		margin-top: 30rpx;
	}

	.search-tag {
		margin: 10rpx 20rpx;
		padding: 10rpx 20rpx;
		border-radius: 5px;
		/* margin-top:20rpx;  */
		font-size: 16rpx;
		color: #333;
		font-weight: 600;
		background: #f0f0f0;
	}

	.history {
		margin-top: 50rpx;

		.history-title {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-right: 80rpx;
		}
	}
</style>
