<template>
	<!-- 整页布局滚动 -->
	<scroll-view scroll-y @scroll="_screensticky" lower-threshold=100 :scroll-top="globScrollTop" class="list"
	 @scrolltolower='onloadmore' v-if="productgood">
		<!-- 轮播图 --><!-- lazy-load mode="aspectFit" -->
		<!-- <swiper class="swiper-box" circular autoplay indicator-active-color="#fff" indicator-dots interval="5000" :duration="duration">
			<swiper-item class="item" v-for="(item, bannerindex)  in productgood.banner" v-if="productgood.banner.length > 0"
			 :key="bannerindex">
				<image class="swiper-img" :src="item.src"></image>
				
			</swiper-item>
		</swiper> -->
		<!-- 首页20个大类分区 -->
		<!-- <view class="classification-container" v-if="current == 0">
			<view class="item">
				<view @tap="jump('jhs')">
					<uni-icon type="jhs" size="35" color="#f7002f"></uni-icon>
					<text class="txt">聚划算</text>
				</view>
				<view @tap="jump('<sp></sp>ecial_offer')">
					<uni-icon type="by" size="35" color="#f83061"></uni-icon>
					<text>9.9包邮</text>
				</view>
				<view @tap="jump('tmjx')">
					<uni-icon type="tianmao" size="35" color="#ff0000"></uni-icon>
					<text>精选商品</text>
				</view>
				<view @tap="jump('tqg_goods')">
					<uni-icon type="tqg" size="35" color="#f98901"></uni-icon>
					<text>淘枪购</text>
				</view>
				<view @tap="jump('brandvoucher')">
					<uni-icon type="jian" size="35" color="#ffdd50"></uni-icon>
					<text>品牌好券</text>
				</view>
			</view>
		</view> -->
		<!-- 滚动公告栏首页 -->
		<view class="uni-swiper-msg" v-if="current == 0">
			<view class="uni-swiper-msg-icon">
				<image src="../../static/logo.png" mode="widthFix"></image>
			</view>
			<swiper vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item v-for="(item, msgindex) in productgood.msg" :key="msgindex">
					<view @tap="godetail(item.id)">{{item.title}}</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- <divid-line height="5"></divid-line> -->
		<!-- 默认滑动页面 -->
		<view class="hot-txt" v-if="current == 0">今日<text class="hot">热销</text>榜单</view>
		<scroll-view class="hot-scroll-wrap border-1px" scroll-x style="width: 100%;" v-if="current == 0">
			<view class="wrap">
				<view class="uni-product" v-for="(item,hotproductindex) in productgood.hotGood" :key="hotproductindex" @tap="godetail(item.num_iid)">
					<good-row :hotGood="item"></good-row>
				</view>
			</view>
		</scroll-view>
		<!-- 条件筛选 -->
		<!-- <divid-line height="10"></divid-line>
		<view class="recommend">—— 为你推荐 ——</view>
		<divid-line height="2"></divid-line> -->
		<!-- <view :class="['_fiexd hidden screen-wrap', {'visiale':isfixed}]"> -->
		<view class="screen-wrap _fiexd" v-if="isfixed" id="screen" style="z-index: 9;">
			<view :class="{on :active==0}" @tap="screentap('0')">默认</view>
			<view :class="{on :active==1}" @tap="screentap('1')">销量</view>
			<view :class="{on :active==2}" @tap="screentap('2')">最新</view>
			<view class='jg-wrap' @tap="screentap('3')">
				<text :class="{on :active==3}">价格</text>
				<view class="jgicon">
					<uni-icon type="uparrow" size="12" :color="up">
					</uni-icon>
					<uni-icon type="downarrow" size="12" :color="down">
					</uni-icon>
				</view>
			</view>
		</view>
		<!-- <view  :class="['screen-wrap', {'_sticky':!isAndroid}]"> -->
		<view :class="['screen-wrap', {'_sticky':!isAndroid}]">
			<view :class="{on :active==0}" @tap="screentap('0')">默认</view>
			<view :class="{on :active==1}" @tap="screentap('1')">销量</view>
			<view :class="{on :active==2}" @tap="screentap('2')">最新</view>
			<view class='jg-wrap' @tap="screentap('3')">
				<text :class="{on :active==3}">价格</text>
				<view class="jgicon">
					<uni-icon type="uparrow" size="12" :color="up">
					</uni-icon>
					<uni-icon type="downarrow" size="12" :color="down">
					</uni-icon>
				</view>
			</view>
		</view>
		<view class="goods-container" v-if="current==0">
			<block v-for="(item,goodindex) in rcProductgood[0]" :key="goodindex">
				<good-list :good='item' @onTap="godetail(item.num_iid)" :isgood='isgood'></good-list>
			</block>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
		<view class="goods-container" v-else>
			<block v-for="(item,goodindex) in productgood.product" :key="goodindex">
				<good-list :good='item' @onTap="godetail(item.num_iid)" :isgood='isgood'></good-list>
			</block>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
		<go-top v-if="isShow" @goTop="goTop"></go-top>
	</scroll-view>

</template>
<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	import dividLine from '@/components/line.vue';
	import goodList from '@/components/good-list.vue';
	import goodRow from '@/components/good-list-row.vue';
	import goTop from '@/components/go-top.vue'
	import {
		getGoodsList,
		getCTK,
		getOtherGood
	} from '@/api/goods.js'
	export default {
		props: {
			productgood: {
				type: Object,
			},
			current: {
				type: [Number, String],
				default: 0
			},
			type: {
				type: String,
			},
			isgood: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scrolltop: 0,
				page: 1,
				scrollEv: null,
				nowScroll: 0,
				isScroll: false,
				isAndroid: false,
				timer: null,
				isShow: false,
				globScrollTop: 0,
				uni: "",
				swiper: "",
				tab: "",
				active: 0,
				isup: 3,
				count: 0,
				screen: null,
				isfixed: false,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				duration: 300,
				loadingText: {
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				type:"",
				rcProductgood:new Array()
			}
		},
		components: {
			uniLoadMore,
			dividLine,
			goodList,
			goTop,
			goodRow
		},
		computed: {
			up() {
				let color = this.isup == 0 ? '#ff0000' : '#ccc'
				return color
			},
			down() {
				let color = this.isup == 1 ? '#ff0000' : '#ccc';
				return color;
			}
		},

		created() {
			console.log('!!', this.productgood);
		},
		onLoad() {
			// this.getRecommendGood();
		},
		methods: {
			//条件筛选
			screentap(index) {
				this.page = 1;
				if (index == 3) {
					this.active = index;
					this.isup = this.count % 2 == 0 ? this.isup = 0 : this.isup = 1;
					this.count++;
					console.log("this.isip", this.isup)
					this._getGoodsList({
						page: 0,
						screen: index,
						jg: this.isup
					});
					return
				}
				this._getGoodsList({
					page: 0,
					screen: index
				});
				this.active = index
				this.isup = 3;
			},
			getRecommendGood(){
				if(!uni.getStorageSync("rcProductgood")){
					getOtherGood({
						page:this.page,
						type:"item"
					}).then(res=>{
						this.rcProductgood.push(res.result.data);
						uni.setStorageSync("rcProductgood",this.rcProductgood);
						console.log(JSON.stringify(this.rcProductgood))
					});
				}else{
					this.rcProductgood=uni.getStorageSync("rcProductgood");
				}
			},
			_getGoodsList({
				page = 0,
				// screen = '',
				// jg = ''
			}) {
				uni.showLoading({
					title: '加载中..'
				})
				let ret = getGoodsList({
					page,
					type: this.type,
					// screen,
					// jg
				});
				// let ret=getCTK({
				// 	page
				// })
				ret.then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.code == 200) {
						this.productgood.product = res.result
						// this.productgood.product = res.content
						for(var i=0; i<this.productgood.product.length; i++){
							// console.log(JSON.stringify(this.productgood.product[i]))
						}
					} else {
						this._showError()
					}
				})
			},
			//条件筛选滑动事件监听 (this._delayfun)
			_screensticky(ev) {
				let target = ev.target || ev.srcElement;
				// this.nowScroll = target.scrollTop
				this.nowScroll = target.scrollTop
				// console.log('滚动', this.nowScroll);
				if (this.nowScroll > 790) {
					if (this.isAndroid) {
						this.isfixed = true;
					}
					this.isfixed = true;
					this.isShow = true;
				} else {
					this.isfixed = false;
					this.isShow = false;
				}
			},
			jump(type) {
				if (type == 'search') {
					uni.navigateTo({
						url: '/pages/common/search'
					})
					return
				}
				let table = type;
				const map = new Map()
					.set('jhs', '聚划算')
					.set('special_offer', '9.9包邮')
					.set('tqg_goods', '淘抢购')
					.set('brandvoucher', '品牌好券')
					.set('tmjx', '精选商品')
				if (type == 'jhs' || type == 'tj' || type == 'tmjx') {
					table = 'yhq_goods'
				}
				uni.navigateTo({
					url: `/pages/common/good-item?type=${table}&title=${map.get(type)}`
					// url: '/pages/common/good'
				});
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
			godetail(id) {
				if (!this.isgood) {
					var page=this.page;
					uni.navigateTo({
						url: `/pages/common/goods-detail?id=${id}&page=${page}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/common/goods2-detail?id=${id}`
					})
				}
				this.globScrollTop = this.nowScroll;
			},
			//触底加载更多
			onloadmore() {
				if (this.loadingType !== 0) {
					return;
				}
				this.loadingType = 1;
				let ret = getGoodsList({
					page: this.page,
					// screen: '',
					// jg: '',
					type: this.type,
				});
				ret.then(res => {
					console.log(res);
					if (res.code == 200) {
						if (res.result.length == 0) {
							this.loadingType = 3;
							return
						}
						this.productgood.product = this.productgood.product.concat(res.result);
						this.page++;
						this.loadingType = 0;
					} else {
						this._showError()
					}
				});
				
				// let ret1 = getOtherGood({
				// 	page: this.page,
				// 	type: "item"
				// });
				// ret1.then(res => {
				// 	console.log(res);
				// 	if (res.code == 200) {
				// 		this.rcProductgood = this.rcProductgood.concat(res.result);
				// 		this.page++;
				// 		this.loadingType = 0;
				// 	} else {
				// 		this._showError()
				// 	}
				// })
			},
		}
	}
</script>
<style lang="less" scoped>
	.screen-wrap{
		z-index: 9;
	}
	.index-content {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 999;

		.goods-container {
			padding-bottom: 140upx;
		}

		.visiale {
			visibility: visible !important;
		}

		.hidden {
			visibility: hidden;
		}

		._fiexd {
			position: fixed;
			top: 0;
		}

		._sticky {
			position: sticky;
			top: 0;
		}

		// 热销
		.hot-txt {
			margin-left: 50upx;
			color: #333;

			.hot {
				color: #FF0000;
			}
		}

		// 为你推荐

		.recommend {

			padding: 25upx 0;
			width: 100%;
			font-size: 32upx;
			text-align: center;
			color: #FF0000;
			font-weight: 500;
		}

		// 选中状态
		.on {
			color: red !important;
		}

		.list {
			width: 100%;
			height: 100%;
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

		// 默认商品
		.hot-scroll-wrap {
			height: auto;
			width: 100%;
			white-space: nowrap;

			.wrap {
				display: flex;
				flex-direction: row;
			}
		}



		.image-view {
			height: 330upx;
			width: 330upx;
			margin: 12upx 0;
		}

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

	/* swiper msg */
	.uni-swiper-msg {
		width: calc(100% - 20upx);
		padding: 12rpx 20upx;
		flex-wrap: nowrap;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.uni-swiper-msg-icon {
		width: 50upx;
		margin-right: 20upx;
	}

	.uni-swiper-msg-icon image {
		width: 100%;
		height: 27px;
		flex-shrink: 0;
	}

	.uni-swiper-msg swiper {
		width: 100%;
		height: 50upx;
		margin-bottom: 20upx;
	}

	.uni-swiper-msg swiper-item {
		line-height: 50upx;
	}

	/* product */
	.uni-product {
		/* padding: 20upx; */
		width: calc(350upx - 20upx);
		padding: 10upx 10upx;
		display: flex;
		flex-direction: column;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #ff0000;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	.small-gray {
		font-size: 24upx;
		color: #aeaeae;
	}

	// 框架样式复写
	.uni-swiper-tab {
		border-bottom: 1upx solid #f8f8f8;
	}
</style>
