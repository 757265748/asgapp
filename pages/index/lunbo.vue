<template>
	<view class="index-content">
		<view class="uni-tab-bar">
			<scroll-view class="list" scroll-y @scrolltolower="loadMore" @touchstart="touchmove($event)">
				<block v-for="(newsitem,index2) in newsitems" :key="index2">
					<media-list :options="newsitem"></media-list>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import dividLine from '@/components/line.vue';
	import scrollIndex from '@/components/scroll-index.vue';
	import mediaList from '@/components/mediaList.vue'
	import goodList from '@/components/good-list.vue'
	import uniLoadMore from '@/components/uni-load-more.vue';
	import goTop from '@/components/go-top.vue';
	import uniIcon from '@/components/uni-icon.vue';
	import uniGrid from '@/components/uni-grid.vue';
	import {
		getGoodsList,
		getRecommend,
		getHotListGood,
		getCTK,
		getOtherGood,
		exisitCollection
	} from '@/api/goods.js'
	export default {
		components: {
			dividLine,
			scrollIndex,
			mediaList,
			goodList,
			uniLoadMore,
			goTop,
			uniIcon,
			uniGrid
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				isShow: false,
				page: 1,
				newsitems: new Object(),
				loadingType: 0,
				loadingTitle: "正在玩命加载...",
				mask: true,
				//条件筛选
				active: 0,
				isup: 3,
				sorts: new Object(),
				isDefault: true, //默认排序
				isTotal_sales: 0, //销量排序
				isTk_rate: 0, //佣金排序
				isPrice: 0, //价格排序
				sortTabFixed: false,
				pages: new Array(),
				type: "",
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title:option.type
			})
			this.type = option.type;
			uni.showLoading({
				title: "正在玩命加载..."
			})
			//初始化数据
			this.newsitems=option.goods;
			setTimeout(function() {
				uni.hideLoading()
			}, 2000)
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if (e.index == 0) {
				uni.navigateTo({
					url: '/pages/index/board'
				})
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.switchTab({
				url: '/pages/common/search'
			})
		},
		methods: {
			touchmove(e) {
				console.log(uni.getStorageSync("nextPage" + this.type));
				if (!uni.getStorageSync("nextPage" + this.type)) {
					this.page++;
					console.log(this.page);
					getGoodsList({
						page: this.page,
						type: this.type
					}).then(res => {
						//this.newsitems[index].data = this.newsitems[index].data.concat(res.result);
						uni.setStorageSync("nextPage" + this.type, res.result);
						
						if (res.result < 10) {
							this.loadingType = 2;
							return;
						}
					})
				}
			},
			loadMore(e) {
				setTimeout(() => {
					console.log(this.newsitems);
					console.log(this.newsitems.concat(uni.getStorageSync("nextPage" + this.type)));
					this.newsitems = this.newsitems.concat(uni.getStorageSync("nextPage" + this.type));
					uni.removeStorageSync("nextPage" + this.type);
				}, 300);
			},
			randomfn() {
				getGoodsList({
					page: this.page,
					type: this.type
				}).then(res => {
					console.log(res);
					this.newsitems = res.result;
				});
			}
		},
	}
</script>

<style lang="less" scoped>
	.fixed {
		position: fixed;
		z-index: 9;
		top: 0;
	}

	// 条件筛选
	.screen-wrap {
		height: 30upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20upx 0;
		background: #fff;

		.jg-wrap {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}

	.list {
		margin-bottom: 140px;
	}

	.double-tap {
		position: fixed;
		bottom: 0;
		left: 0;
		background: #333333;
		width: 60px;
		height: 60px;
	}

	.index-content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		// 公告栏
		// 		.bulletin-board {
		// 			width: calc(100% -20upx);
		// 			padding: 0 10upx;
		// 		}

		// 查找
		.search-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f8f8f8;
			width: calc(100% - 40upx) 100%;
			line-height: 30upx;
			background: #FC1F3F;
			padding: 30upx 20upx 20upx 20upx;
			/* #ifdef APP-PLUS */
			height: 60px;
			/* #endif */
			/* #ifdef H5 */
			height: 20px;
			/* #endif */
			display: block;
			text-align: center;
		}


		.swiper-box {
			// display: none;
			width: calc(100% - 20upx);
			border-radius: 10upx;

			// min-height: 200upx;
			.item {
				border-radius: 10upx;
			}

			.swiper-img {
				width: 100%;
				border-radius: 10upx;
			}
		}

		.index-swiper {
			flex: 1;
			width: 100%;
			height: calc(100% - 100upx);
		}

		// 20大类样式
		.classification-container {

			width: calc(100% - 20upx);
			padding: 10upx;

			.item {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: row;
				text-align: center;
				font-size: 20upx;
			}

		}
	}

	// 框架样式复写
	.uni-swiper-tab {
		border-bottom: 1upx solid #f8f8f8;

	}

	.uni-scroll-view {
		white-space: nowrap !important;
	}
</style>
