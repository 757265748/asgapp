<template>
	<view class="index-content">
		<view class="search-container"></view>
		<view class="uni-tab-bar">
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
				 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
			</scroll-view>
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
				<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
					<scroll-view class="list" @scroll="scroll" scroll-y @scrolltolower="loadMore(index1)" @touchstart="touchmove($event,index1)">
						<uni-grid v-if="tabIndex==0" :options="data1" @click="tabClick" :show-border="false" />
						<view :class="['screen-wrap',{fixed:sortTabFixed},{fixed:tabIndex!=0}]">
							<view :class="{on :isDefault}" @tap="screentap('')">默认</view>
							<view class='jg-wrap' @tap="screentap('total_sales')">
								<text :class="{on :isTotal_sales!=0}">销量</text>
								<view class="jgicon">
									<uni-icon type="uparrow" size="12" :color="isTotal_sales==1?'#ff0000':'#ccc'">
									</uni-icon>
									<uni-icon type="downarrow" size="12" :color="isTotal_sales==2?'#ff0000':'#ccc'">
									</uni-icon>
								</view>
							</view>
							<view class='jg-wrap' @tap="screentap('tk_rate')">
								<text :class="{on :isTk_rate!=0}">佣金比率</text>
								<view class="jgicon">
									<uni-icon type="uparrow" size="12" :color="isTk_rate==1?'#ff0000':'#ccc'">
									</uni-icon>
									<uni-icon type="downarrow" size="12" :color="isTk_rate==2?'#ff0000':'#ccc'">
									</uni-icon>
								</view>
							</view>
							<view class='jg-wrap' @tap="screentap('price')">
								<text :class="{on :isPrice!=0}">价格</text>
								<view class="jgicon">
									<uni-icon type="uparrow" size="12" :color="isPrice==1?'#ff0000':'#ccc'">
									</uni-icon>
									<uni-icon type="downarrow" size="12" :color="isPrice==2?'#ff0000':'#ccc'">
									</uni-icon>
								</view>
							</view>
						</view>
						<block v-for="(newsitem,index2) in tab.data" :key="index2">
							<media-list :options="newsitem"></media-list>
						</block>
						<uni-load-more class="loadMore" :loadingType="loadingType"></uni-load-more>
						<go-top v-if="isShow" @goTop="goTop"></go-top>
						<!-- #ifdef APP-PLUS||APP-PLUS-NVUE -->
						<view class="stone" style="height: 180upx;width: 100%;background-color: transparent;"></view>
						<!-- #endif -->
						<!-- #ifdef H5 -->
						<view class="stone" style="height: 90upx;width: 100%;background-color: transparent;"></view>
						<!-- #endif -->
						<!-- <view class="uni-tab-bar-loading"></view> -->
					</scroll-view>
				</swiper-item>
			</swiper>
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
				data1: [{
						image: '/static/19.9.png',
						text: '系统操作'
					},
					{
						image: '/static/logo.png',
						text: '报表查询'
					},
					{
						image: '/static/logo.png',
						text: '异常管理'
					},
					{
						image: '/static/logo.png',
						text: '看板查询'
					},
					{
						image: '/static/logo.png',
						text: '设备管理'
					},
					{
						image: '/static/logo.png',
						text: '......'
					}
				],
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				isShow: false,
				page: 1,
				newsitems: [],
				loadingType: 0,
				loadingTitle: "正在玩命加载...",
				mask: true,
				//条件筛选
				active: 0,
				isup: 3,
				sorts: new Object(),
				isDefault: true, //默认排序
				isTotal_sales: 0, //销量排序
				isTk_rate:0,//佣金排序
				isPrice: 0, //价格排序
				sortTabFixed:false,
				tabBars: [{
					name: '全部',
					id: 'zb'
				}, {
					name: "精品",
					id: "jp"
				}, {
					name: '百货',
					id: 'bh'
				}, {
					name: '女装',
					id: 'nz'
				}, {
					name: '男装',
					id: 'lz'
				}, {
					name: '食品',
					id: 'sp'
				}, {
					name: '母婴',
					id: 'my'
				}, {
					name: '美妆',
					id: 'mz'
				}, {
					name: '洗护',
					id: 'xh'
				}, {
					name: '内衣',
					id: 'ny'
				}, {
					name: '数码',
					id: 'sm'
				}, {
					name: '家电',
					id: 'jd'
				}, {
					name: '运动',
					id: 'yd'
				}, ],
				pages: new Array()
			}
		},
		onLoad(option) {
			//从内部页面跳入时  不重新加载数据
			for (var p = 0; p < this.tabBars.length; p++) {
				let initPage = 1;
				this.pages.push(initPage);
			}
			console.log(uni.getStorageSync("goodsList"));
			//懒加载数据未响应完全用户点击首页则重新加载  否则会出现白屏
			if (uni.getStorageSync("goodsList").length == this.tabBars.length) {
				this.fullData().then(res => {
					console.log(JSON.stringify(res));
					this.newsitems = res;
				})
			} else {
				uni.showLoading({
					title: "正在玩命加载..."
				})
				this.newsitems = this.randomfn();
				setTimeout(function() {
					uni.hideLoading()
				}, 2000)
			}
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
			tabClick(e) {
				switch(e.index){
					case 1:
						uni.navigateTo({
							url: "index"
						})
					break;
					case 5:
						uni.navigateTo({
							url: "menu2"
						})
				}
			},
			scroll(e){
				if(this.tabIndex==0){
					if(e.detail.scrollTop>=250){
						this.sortTabFixed=true;
					}else if(e.detail.scrollTop<250){
						this.sortTabFixed=false;
					}
				}
			},
			//异步填充数据，解决用户快速点击首页数据未加载完
			fullData() {
				return new Promise((resolve, reject) => {
					let ary = [];
					for (let i = 0, length = this.tabBars.length; i < length; i++) {
						let aryItem = {
							data: []
						};
						if (i < 1) {
							aryItem = uni.getStorageSync("goodsList")[0];
						}
						ary.push(aryItem);
					}
					resolve(ary);
				})
			},
			touchmove(e, index) {
				console.log(this.pages[index], this.tabBars[index].name);
				if (!uni.getStorageSync("nextPage" + index)) {
					this.pages[index]++;
					getGoodsList({
						page: this.pages[index],
						type: this.tabBars[index].name
					}).then(res => {
						//this.newsitems[index].data = this.newsitems[index].data.concat(res.result);
						uni.setStorageSync("nextPage" + index, res.result);
						if (res.result < 10) {
							this.loadingType = 2;
							return;
						}
					})
				}
				console.log(this.newsitems)
			},
			goTop() {
				this.globScrollTop = this.nowScroll
				this.$nextTick(function() {
					this.globScrollTop = 0;
					this.isfixed = false;
					this.isShow = false;
					console.log(this.isfixed, this.isShow);
				})
			},
			loadMore(e) {
				setTimeout(() => {
					console.log(typeof this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e)));
					this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
					uni.removeStorageSync("nextPage" + e);
				}, 300);
				// this.page++;
				// this.loadingType = 1; 
				// setTimeout(() => {
				// 	this.addData(e);
				// }, 1200); 
			},
			addData(e) {
				// uni.showLoading({
				// 	title:this.loadingTitle,
				// 	mask:this.mask
				// })
				console.log(e);
				this.newsitems[e].data = uni.getStorageSync("nextPage" + e);
				// getGoodsList({
				// 	page: this.page,
				// 	type: this.tabBars[e].name
				// }).then(res => {
				// 	this.newsitems[e].data = this.newsitems[e].data.concat(res.result);
				// 	if (res.result < 10) {
				// 		this.loadingType = 2;
				// 		return;
				// 	}
				// })
				// getGoodsList({
				// 	page:this.page,
				// 	type:this.tabBars[e].name
				// }).then(res=>{
				// 	this.newsitems[e].data=this.newsitems[e].data.concat(res.result);
				// 	if (res.result < 10) {
				// 		this.loadingType=2;
				// 		return;
				// 	}
				// })
				// setTimeout(function(){
				// 	uni.hideLoading();
				// },2000)
			},
			async changeTab(e) {
				let index = e.target.current;
				this.tabIndex==index;
				//this.newsitems[index].data = uni.getStorageSync("goodsList")[index].data;
				// uni.showLoading({
				// 	title:this.loadingTitle,
				// 	mask:this.mask
				// })
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
				// setTimeout(function(){
				// 	uni.hideLoading();
				// },1000)
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
						//console.log(data); 
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				//this.page = 1;
				// uni.showLoading({
				// 	title:"正在玩命加载中...",
				// 	mask:true
				// })
				let tabIndex = e.target.dataset.current;
				this.tabIndex==tabIndex;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}

			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						data: []
					};
					getGoodsList({
						page: this.page,
						type: this.tabBars[i].name
					}).then(res => {
						//console.log(JSON.stringify(res.result));
						aryItem.data = res.result;
					});
					ary.push(aryItem);
				}
				return ary;
			}, //条件筛选
			screentap(sortType) {
				if (sortType == '') {
					this.isDefault = true;
					this.isTotal_sales = 0;
					this.isTk_rate=0;
					this.isPrice = 0;
					this._getGoodsList({
						sorts: sortType
					});
				} else if (sortType == 'total_sales') {
					this.isDefault = false;
					this.isTk_rate=0;
					this.isPrice = 0;
					if (this.isTotal_sales == 0 || this.isTotal_sales == 1) {
						this._getGoodsList({
							sorts: sortType + '_des'
						});
						this.isTotal_sales = 2;
					} else if (this.isTotal_sales == 2) {
						this.sorts.sort1 = sortType + '_asc';
						this._getGoodsList({
							sorts: sortType + '_asc'
						});
						this.isTotal_sales = 1;
					}
				} else if (sortType == 'tk_rate') {
					this.isDefault = false;
					this.isTotal_sales = 0;
					this.isPrice = 0;
					if (this.isTk_rate == 0 || this.isTk_rate == 1) {
						this._getGoodsList({
							sorts: sortType + '_des'
						});
						this.isTk_rate = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc'
						});
						this.isTk_rate = 1;
					}
				} else if (sortType == 'price') {
					this.isDefault = false;
					this.isTotal_sales = 0;
					this.isTk_rate=0;
					if (this.isPrice == 0 || this.isPrice == 1) {
						this._getGoodsList({
							sorts: sortType + '_des'
						});
						this.isPrice = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc'
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
					sorts: obj.sorts
				});
				// let ret=getCTK({
				// 	page
				// })
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.newsitems[this.tabIndex].data = res.result
						console.log(res.result);
						// this.productgood.product = res.content
						for (var i = 0; i < this.newsitems[this.tabIndex].length; i++) {
							//console.log(JSON.stringify(this.productgood.product[i]))
						}
					} else {
						this._showError()
					}
				})
			}
			// 			qrcode() {
			// 				console.log('二维码');
			// 				uni.scanCode({
			// 					success: function(res) {
			// 						console.log('条码类型：' + res.scanType);
			// 						console.log('条码内容：' + res.result);
			// 						uni.navigateTo({
			// 							url: `/pages/common/web-view?src=${res.result}`
			// 						})
			// 						// console.log('this.qrsrc', this.qrsrc);
			// 					}
			// 				});
			// 			},
		},
	}
</script>

<style lang="less" scoped>
	.fixed{
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
