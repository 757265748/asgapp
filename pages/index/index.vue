<template>
	<view class="index-content">
		<view style="width: 70upx; height: 60upx;position: absolute;right: 0;top:50upx" @tap="board">
			<image src="../../static/board.png" mode="" style="width:100%;height: 100%;"></image>
		</view>
		<!-- 查找栏 -->
		<!-- <view class="search-container">
			<view class="qrcode" @tap="qrcode">
				<uni-icon type="qrcode" size="16" color="#bababa"></uni-icon>
			</view>
			<view class="search" @tap="jump('search')">
				<uni-icon type="search" size="15" color="#bababa">
				</uni-icon>
				立即查找独家优惠券
			</view>
			<view class="msg">
				<uni-icon type="message" size="16" color="#bababa"></uni-icon>
			</view>
		</view> -->
		<view class="search-container">
			<view class="title">首页</view>
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
						<scroll-index v-if="productList[0]" :productgood='productList[0]' current="0" :type="tabBars[0].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[1]" :productgood='productList[1]' current="1" :type="tabBars[1].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[2]" :productgood='productList[2]' current="2" :type="tabBars[2].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[3]" :productgood='productList[3]' current="3" :type="tabBars[3].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[4]" :productgood='productList[4]' current="45" :type="tabBars[4].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[5]" :productgood='productList[5]' current="5" :type="tabBars[5].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[6]" :productgood='productList[6]' current="6" :type="tabBars[6].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[7]" :productgood='productList[7]' current="7" :type="tabBars[7].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index v-if="productList[8]" :productgood='productList[8]' current="8" :type="tabBars[8].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index :productgood='productList[9]' current="9" :type="tabBars[9].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index :productgood='productList[10]' current="10" :type="tabBars[10].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index :productgood='productList[11]' current="11" :type="tabBars[11].name"></scroll-index>
					</block>
				</swiper-item>
				<swiper-item>
					<block>
						<scroll-index :productgood='productList[12]' current="12" :type="tabBars[12].name"></scroll-index>
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
		getHotListGood,
		getCTK,
		getOtherGood
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
						name: "精品",
						id: "jp"
					},
					{
						name: '百货',
						id: 'bh'
					},
					{
						name: '女装',
						id: 'nz'
					},
					{
						name: '男装',
						id: 'lz'
					},
					{
						name: '食品',
						id: 'sp'
					},
					{
						name: '母婴',
						id: 'my'
					},
					{
						name: '美妆',
						id: 'mz'
					},
					{
						name: '洗护',
						id: 'xh'
					},
					{
						name: '内衣',
						id: 'ny'
					},
					{
						name: '数码',
						id: 'sm'
					},
					{
						name: '家电',
						id: 'jd'
					},
					{
						name: '运动',
						id: 'yd'
					},
				],

			}
		},
		onLoad(option) {
			console.log(option);
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
				getGoodsList({
					page: 1,
					type: ''
				}).then(res => {
					uni.hideLoading();
					// console.log(JSON.stringify(res));
					this.productList.splice(this.tabIndex, 1, {
						hotGood: res.result,
						banner: this.imagelist,
						msg: res.result,
						product: res.result,
					})
					uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
					this.productMap.set(0, res.result)
				})
				// getHotListGood(),
				// let ret = Promise.all([getRecommend(), getHotListGood(), getGoodsList({
				// 	page: 0,
				// 	type: '',
				// 	screen: '',
				// 	jg: '',
				// })]);
				// ret.then(res => {
				// 	console.log('aa', res)
				// 	uni.hideLoading();
				// 	if (res.length) {
				// 		for (let item of res) {
				// 			if (item.code != 200) {
				// 				this._showError()
				// 				return
				// 			}
				// 		}
				// 		// this.msg = res[0].result
				// 		this.productList.splice(this.tabIndex, 1, {
				// 			hotGood: res[1].result,
				// 			banner: this.imagelist,
				// 			msg: res[0].result,
				// 			product: res[2].result,
				// 		})
				// 		uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
				// 		// this.productMap.set(0, res[2].result)
				// 		console.log('第一次加载数据', this.productList);
				// 	}
				// })
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
						console.log('没有数据,所以获取', this.tabIndex)
						//console.log(res.result, this.imagelist);
						this.productList.splice(this.tabIndex, 1, {
							banner: this.imagelist,
							msg: '',
							product: res.result
						})
						//console.log('没有数据所以获取完了', this.productList[this.tabIndex])
						//uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
					} else {
						this._showError()
					}
				})
				// getCTK({
				// 	page: 1
				// }).then(res => {
				// 	console.log(res.data.content);
				// 	uni.hideLoading();//隐藏提示框
				// 	if (res.statusCode == 200) {
				// 		console.log('没有数据,所以获取', this.tabIndex)
				// 		// this.productList.splice(this.tabIndex, 1, {
				// 		// 	banner: this.imagelist,
				// 		// 	msg: '',
				// 		// 	product: res.result
				// 		// })
				// 		console.log('没有数据所以获取完了', this.productList[this.tabIndex])
				// 		// uni.setStorageSync(this.tabIndex.toString(), this.productList[this.tabIndex])
				// 	} else {
				// 		this._showError()
				// 	}
				// });
			},

			jump(type) {
				console.log(123);
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
			async changeTab(e) {
				let index = e.target.current;
				// console.log(e);
				let type = index == 0 ? '' : this.tabBars[index].name
				if (this.istapChange) {
					this.tabIndex = index;
					uni.setStorageSync("tabIndex",this.tabIndex);
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
			board() {
				uni.navigateTo({
					url: '/pages/index/board'
				})
			}
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

	// 框架样式复写
	.uni-swiper-tab {
		border-bottom: 1upx solid #f8f8f8;

	}

	.uni-scroll-view {
		white-space: nowrap !important;
	}
</style>
