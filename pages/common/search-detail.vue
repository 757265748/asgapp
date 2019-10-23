<template>
	<view class="content">
		<nav-bar title="搜索" color="#ffffff" background="#ff0000" @back="back"></nav-bar>
		<view class="search-box">
			<view class="wrap">
				<view class="placeholder">
					<uni-icon type="search" color="#b5b5b5" size="18"></uni-icon>
					<input @confirm='submit' placeholder="搜索商品关键字" @input='_getinput' :value="keyword" />
				</view>
				<uni-icon @click="clear" v-if="isShow" type="clear" color="#b5b5b5" size="18"></uni-icon>
			</view>
		</view>
		<view class="container">
			<product-list :productList="result" table='yhq_goods'></product-list>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import productList from '@/components/product-list.vue'
	import uniLoadMore from '@/components/uni-load-more.vue'
	import {
		getKeyWord
	} from "@/api/goods"
	export default {
		data() {
			return {
				isShow: false,
				result: null,
				keyword: '',
				page: 1,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
			}
		},
		components: {
			navBar,
			productList,
			uniLoadMore
		},
		onLoad(option) {
			this.keyword = option.keyword;
			this.getData();
		},
		//到底加载更多
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let ret = getKeyWord(this.keyword, this.page, );
			ret.then(res => {
				if (res.code == 200) {
					if (res.result.length == 0) {
						this.loadingType = 3;
						return
					}
					this.result = this.result.concat(res.result);
					this.page++;
					this.loadingType = 0;
				} else {
					this.loadingType = 3;
					uni.showToast({
						title: '没有更多了',
						icon:'none'
					})
					return
				}
			})
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			getData() {
				uni.showLoading({
					title: '搜索中'
				})
				let ret = getKeyWord(this.keyword);
				ret.then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.code == 200) {
						this.result = res.result;
						console.log('搜索结果', this.result);
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			submit(e) {
				this.keyword = e.detail.value.trim();
				this.getData()
			},
			_getinput(e) {
				this.keyword = e.detail.value.trim();
				if (this.keyword) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			},
			clear() {
				this.keyword = ''
				this.isShow = false;
			},
			onTap(value) {
				this.keyword = value
				this.isShow = true
				// console.log(value)
			},
		}
	}
</script>
<style lang="less" scoped>
	.search-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 102upx;
		border-bottom: 1px solid #f8f8f8;
		margin-top: 120upx;
		background: #fff;
		z-index: 999;
		.wrap {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			margin:10upx  auto 0 auto;
			width: 75%;
			height: 50upx;
			padding: 10upx;
			border: 1px solid #eee;
			border-radius: 10upx;
			background: #fff;
		}

		.placeholder {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 0 auto;
			width: 100%;

		}
	}

	.container {
		width: 96%;
		margin: 102px auto 0 auto;
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
