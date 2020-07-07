<template>
	<view class="index-content">
		<view :class="['screen-wrap',{fixed:sortTabFixed},{fixed:tabIndex==-1}]">
			<view :class="{on :isDefault}" @tap="screentap('')">默认</view>
			<view class='jg-wrap' @tap="screentap('total_sales')">
				<text :class="{on :isTotal_sales!=0}">销量</text>
				<view class="jgicon uni-flex uni-column">
					<view class="uni-icon" v-if="isTotal_sales!=0" :class="isTotal_sales==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
				</view>
			</view>
			<view class='jg-wrap' @tap="screentap('tk_rate')">
				<text :class="{on :isTk_rate!=0}">佣金</text>
				<view class="jgicon uni-flex uni-column">
					<view class="uni-icon" v-if="isTk_rate!=0" :class="isTk_rate==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
				</view>
			</view>
			<view class='jg-wrap' @tap="screentap('price')">
				<text :class="{on :isPrice!=0}">价格</text>
				<view class="jgicon uni-flex uni-column">
					<view class="uni-icon" v-if="isPrice!=0" :class="isPrice==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
				</view>
			</view>
		</view>
		<view class="uni-tab-bar">
			<scroll-view class="list" scroll-y @scroll="scroll" @scrolltolower="loadMore" @touchstart="touchmove($event)">
				<block v-for="(newsitem,index2) in newsitems" :key="index2">
					<media-list :options="newsitem" @click="goDetail(newsitem)"></media-list>
				</block>
				<uni-load-more class="loadMore" :loadingType="loadingType"></uni-load-more>
				<go-top v-if="toTop" @goTop="goTop"></go-top>
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
		getItemList
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
				isDefault: true, //默认排序
				isTotal_sales: 0, //销量排序
				isTk_rate: 0, //佣金排序
				isPrice: 0, //价格排序
				sortTabFixed: false,

				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				toTop: false,
				page: 1,
				newsitems: [],
				loadingType: 1,
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
				option: new Object()
			}
		},
		onLoad(option) {
			this.type = option.type;
			uni.setNavigationBarTitle({
				title: this.type
			})
			// uni.showLoading({
			// 	title: "正在玩命加载..."
			// })
			//初始化数据
			console.log(this.randomfn());
			// setTimeout(function() {
			// 	uni.hideLoading()
			// }, 2000)
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
			goDetail(e) {
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${e.item_id}`
				});
			},
			scroll(e) {},
			touchmove(e) {
				console.log(uni.getStorageSync("nextPage" + this.type));
				console.log(this.type);
				if (!uni.getStorageSync("nextPage" + this.type)) {
					this.page++;
					console.log(this.page);
					if (this.type == '聚划算' || this.type == '淘抢购' || this.type == '9.9元') {
						getItemList({
							page: this.page,
							type: this.type
						}).then(res => {
							console.log(res);
							this.loadingType = 2;
							uni.setStorageSync("nextPage" + this.type, res.data.res);
							if(this.newsitems.length<10){
								console.log(this.newsitems);
							}else{
								console.log(this.newsitems);
								return;
							}
						});
						return;
					}
					getGoodsList({
						page: this.page,
						type: this.type
					}).then(res => {
						this.loadingType = 2;
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
					// console.log(this.newsitems);
					console.log(this.newsitems.concat(uni.getStorageSync("nextPage" + this.type)));
					this.newsitems = this.newsitems.concat(uni.getStorageSync("nextPage" + this.type));
					uni.removeStorageSync("nextPage" + this.type);
				}, 300);
			},
			randomfn() {
				let type = this.type;
				console.log(type);
				if (type == '聚划算' || type == '淘抢购' || type == '9.9元') {
					type = 'special'
				}
				let a = 0;
				switch (type) {
					case 'special':
							console.log(this.newsitems.length);
							let flag=false;
							for(let i=0; i<10; i++){
								getItemList({
									page: i,
									type: this.type
								}).then(res => {
									console.log(res);
									this.loadingType = 2;
									this.newsitems = this.newsitems.concat(res.data.res);
									if(this.newsitems.length<10){
										console.log(this.newsitems);
									}else{
										console.log(this.newsitems);
										return;
									}
								});
							}
						break;
					default:
						getGoodsList({
							page: this.page,
							type: this.type
						}).then(res => {
							console.log(res);
							this.loadingType = 2;
							this.newsitems = res.result;
							return res.data.result;
						});
				}
				return type;
			},
			screentap(sortType) {
				let type = this.type;
				console.log(this.type);
				if (sortType == '') {
					this.isDefault = true;
					this.isTotal_sales = 0;
					this.isTk_rate = 0;
					this.isPrice = 0;
					this._getGoodsList({
						type: type,
						sorts: sortType
					});
				} else if (sortType == 'total_sales') {
					this.isDefault = false;
					this.isTk_rate = 0;
					this.isPrice = 0;
					if (this.isTotal_sales == 0 || this.isTotal_sales == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: type
						});
						this.isTotal_sales = 2;
					} else if (this.isTotal_sales == 2) {
						this.sorts.sort1 = sortType + '_asc';
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: type
						});
						this.isTotal_sales = 1;
					}
				} else if (sortType == 'tk_rate') {
					this.isDefault = false;
					this.isTotal_sales = 0;
					this.isPrice = 0;
					if (this.isTk_rate == 0 || this.isTk_rate == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: type
						});
						this.isTk_rate = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: type
						});
						this.isTk_rate = 1;
					}
				} else if (sortType == 'price') {
					this.isDefault = false;
					this.isTotal_sales = 0;
					this.isTk_rate = 0;
					if (this.isPrice == 0 || this.isPrice == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: type
						});
						this.isPrice = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: type
						});
						this.isPrice = 1;
					}
				}
			},
			_getGoodsList(obj) {
				console.log(obj);
				uni.showLoading({
					title: '加载中..'
				})
				let ret = getGoodsList({
					type: obj.type,
					sorts: obj.sorts
				});
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.newsitems = res.result
					} else {
						console.log("请求失败");
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.uni-icon{
		font-size: .8rem;
	}
	.fixed {
		position: fixed;
		z-index: 9;
		top: 0;
	}

	// 条件筛选
	.screen-wrap {
		height: 60upx;
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
