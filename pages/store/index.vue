<template>
	<view class="index-content">

		<!-- 查找栏 -->
		<view class="search-container">
			<view class="title">商城</view>
		</view>
		<!-- 主布局区域 -->
		<view class="uni-tab-bar uni-swiper-tab">
			<scroll-view id="tab-bar" class="_isfixed " scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
				 :data-current="index" @tap="tapTab">{{tab.name}}</view>
			</scroll-view>

			<swiper :current="tabIndex" class="index-swiper" circular @change="changeTab">
				<swiper-item>
					<block>
						<scroll-index v-if="productList[0]" :productgood='productList[0]' current="1" :type="tabBars[0].name" :isgood="true"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[1]" :productgood='productList[1]' current="2" :type="tabBars[1].name" :isgood="true"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[2]" :productgood='productList[2]' current="3" :type="tabBars[2].name" :isgood="true"></scroll-index>
					</block>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	import dividLine from '@/components/line.vue';
	import scrollIndex from '@/components/scroll-index.vue'
	import {
		getGoodsList,
		getRecommend,
		getHotListGood
	} from '@/api/goods.js'
	export default {
		components: {
			dividLine,
			scrollIndex
		},
		data() {
			return {
				uni: "",
				swiper: "",
				tab: "",
				scrolltop: 0,
				productList: new Array(10),
				loadingType: 0,
				imagelist: [{
						title: 1,
						src: "https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp"
					},
					{
						title: 2,
						src: "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					},
					{
						title: 3,
						src: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg"
					}
				],
				duration: 300,
				loadingText: {
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				scrollLeft: 0,
				istapChange: false,
				tabIndex: 0,
				productMap: new Map(),
				count: 0,
				tabBars: [{
						name: '全部',
						id: 'zb'
					},
					{
						name: '百货',
						id: 'bh'
					},
					{
						name: '女装',
						id: 'nz'
					}
				],

			}
		},
		onLoad(option) {
			this._getData();
		},
		methods: {
			qrcode() {
				console.log('二维码');
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.navigateTo({
							url: `/pages/common/web-view?src=${res.result}`
						})
						// console.log('this.qrsrc', this.qrsrc);
					}
				});
			},
			_getData() {
				uni.showLoading({
					title: '加载中..',
					mask: true
				})
				// getHotListGood(),
				let ret = Promise.all([getRecommend(), getHotListGood(), getGoodsList({
					page: 0,
					type: '',
					screen: '',
					jg: ''
				})]);
				ret.then(res => {
					console.log('aa', res)
					uni.hideLoading();
					if (res.length) {
						for (let item of res) {
							if (item.code != 200) {
								this._showError()
								return
							}
						}
						// this.msg = res[0].result
						this.productList.splice(this.tabIndex, 1, {
							hotGood: res[1].result,
							banner: this.imagelist,
							msg: res[0].result,
							product: res[2].result,
						})
						uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
						// this.productMap.set(0, res[2].result)
						console.log('第一次加载数据', this.productList);
					}
				})
			},
			godetail(id) {
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}&table=yhq_goods`
				})
				this.globScrollTop = this.nowScroll;
			},
			_showError() {
				uni.showToast({
					title: "出错了...",
					icon: 'none',
					mask: true
				})
			},
			_getGoodsList(page = 0, type = '', screen = '', jg = '') {
				uni.showLoading({
					title: '加载中..'
				})
				getGoodsList({
					page,
					type,
					screen,
					jg
				}).then(res => {
					uni.hideLoading();
					if (res.code == 200) {

						this.productList.splice(this.tabIndex, 1, {
							banner: this.imagelist,
							msg: '',
							product: res.result
						})

						uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
					} else {
						this._showError()
					}
				})
			},

			jump(type) {
				this.globScrollTop = this.nowScroll;
				if (type == 'search') {
					uni.switchTab({
						url: '/pages/common/search'
					})
					return
				}
				const map = new Map()
					.set('jhs', '聚划算')
					.set('by', '9.9包邮')
					.set('tqg', '淘抢购')
					.set('tj', '每日精选')
					.set('tmjx', '天猫精选')
				uni.navigateTo({
					url: `/pages/common/good-item?type=${type}&title=${map.get(type)}`
					// url: '/pages/common/good'
				});
			},


			//滑动swiper 改变内容
			async tapTab(e) { //点击tab-bar
			
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
					let index = e.target.dataset.current;
					console.log(index, this.tabBars[index])
					let type = index == 0 ? '' : this.tabBars[index].name
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.istapChange = true;
					this.tabIndex = e.target.dataset.current
					this.loadingType = 0;
					 
					if (this.istapChange) {
						this.tabIndex = index;
						this.istapChange = false;
						return;
					}
						this.tabIndex = index; //一旦访问data就会出问题
					this.loadingType = 0;
					let good = null;
					 
					if (!this.productList[this.tabIndex]) {
						try {
							good = uni.getStorageSync(this.tabIndex.toString())
							this._getGoodsList('', this.tabBars[this.tabIndex].name, '', ''); // 切换时刷新数据	 
							// console.log('从缓存获取数据', this.tabIndex, good)
							// if (!good) {
							// 	// console.log('获取数据', this.tabBars[this.tabIndex].name);
							// 	this._getGoodsList('', this.tabBars[this.tabIndex].name, '', ''); // 切换时刷新数据	
							// } else {
							// 	this.productList.splice(this.tabIndex,1,good)
							// }
							// console.log('good', good, 'index', this.tabIndex.toString());
						} catch (e) {
							console.log('getData', e.message)
						}
					}
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				console.log('切换tab', index);
				let type = index == 0 ? '' : this.tabBars[index].name
				if (this.istapChange) {
					this.tabIndex = index;
					this.istapChange = false;
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
				this.istapChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
				this.loadingType = 0;
				let good = null;
				console.log('当前tab是否有数据', this.productList[this.tabIndex])
				if (!this.productList[this.tabIndex]) {
					try {
						// good = uni.getStorageSync(this.tabIndex.toString())

						console.log('从缓存获取数据', this.tabIndex, good)
						if (!good) {
							// console.log('获取数据', this.tabBars[this.tabIndex].name);
							this._getGoodsList('', this.tabBars[this.tabIndex].name, '', ''); // 切换时刷新数据	
						} else {
							this.productList.splice(this.tabIndex, 1, good)
						}
						// console.log('good', good, 'index', this.tabIndex.toString());
					} catch (e) {
						console.log('getData', e.message)
					}
				}


			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			// async tapTab(e) { //点击tab-bar
			// 	console.log('tabbar', e);
			// 	if (this.tabIndex === e.target.dataset.current) {
			// 		return false;
			// 	} else {
			// 		let index = e.target.dataset.current;
			// 		console.log(index, this.tabBars[index])
			// 		let type = index == 0 ? '' : this.tabBars[index].name
			// 		let tabBar = await this.getElSize("tab-bar"),
			// 			tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
			// 		this.scrollLeft = tabBarScrollLeft;
			// 		this.istapChange = true;
			// 		this.tabIndex = e.target.dataset.current
			// 		this.loadingType = 0;
			// 	}
			// },
		},
	}
</script>

<style lang="less" scoped>
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
		z-index: 999;
		// 公告栏
		// 		.bulletin-board {
		// 			width: calc(100% -20upx);
		// 			padding: 0 10upx;
		// 		}

		// 查找
		.search-container {
			text-align: center;
			border-bottom: 1px solid #f8f8f8;
			width: calc(100% - 40upx) 100%;
			line-height: 30upx;
			background: #fff;
			padding: 30upx 20upx 20upx 20upx;
			margin-top: 40upx;
			z-index: 999;

			.qrcode {
				width: 8.333333%;

			}

			.search {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 83.33333%;
				line-height: 60upx;
				text-align: center;
				height: 60upx;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 3upx;
				border: 1rpx solid #f8f8f8;
				box-shadow: 0 0 10upx 2upx #eeeeee;
				color: #bababa;
				font-size: 14upx;
			}

			.msg {
				width: 8.333333%;
				text-align: right;
			}

		}

		.swiper-box {
			// display: none;
			width: calc(100% - 20upx);
			padding: 10upx 10upx;
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
			width: 30px !important;
			float: left;
		}

		.title {
			margin: 0 auto;
			// color: #333;
			font-size: 40upx;
			font-weight: 600;
			text-align: center;
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
