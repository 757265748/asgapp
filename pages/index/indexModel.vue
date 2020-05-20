<template>
	<view class="index-content">
		<view class="search-container"></view>
		<view class="uni-tab-bar">
			<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
				 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
			</scroll-view>

			<swiper :current="tabIndex" class="swiper-box" scroll-x @scroll="scrollLeftEvent" :duration="300" @change="changeTab">
				<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
					<scroll-view class="list" scroll-y @scroll="scroll" @scrolltolower="loadMore(index1)" @touchstart="touchmove($event,index1)">
						<view v-show="tabIndex==0">
							<!-- 轮播图 -->
							<swiper indicator-dots="true" v-show="tabIndex==0">
								<swiper-item v-for="(img, key) in lunboImgs">
									<image @tap="lunboClick(img.get_url)" :src="img.pic" style="margin: auto;display: flex;height: 100%;width: 100%;" />
								</swiper-item>
							</swiper>
						</view>
						<uni-grid class="tabList" :options="tabBars[tabIndex].childTabs" @click="tabClick" :show-border="false"
						 :column-num="tabIndex==0?5:4" />
						<!-- 平台活动 -->
						<view v-show="tabIndex==0">
							<view class="activify">
								<view class="uni-flex uni-row">
									<view class="text" @tap="pthd(1459479076736)" style="-webkit-flex: 1;flex: 1;">
										<image src="//gtms04.alicdn.com/tps/i4/TB1zBf8LFXXXXaAaXXXQO4D5VXX-440-180.jpg" mode=""></image>
									</view><!-- 1577675754763聚划算主会场  1523430244779天猫超市 1577679426294食品年会会场-->
									<view class="text" @tap="pthd(2015031801799517)" style="-webkit-flex: 1;flex: 1;">
										<image src="https://img.alicdn.com/tfs/TB1xqe_vuL2gK0jSZFmXXc7iXXa-440-180.jpg" mode=""></image>
									</view>
								</view>
								<view class="uni-flex uni-row">
									<!-- 1565151108610天猫活动  1577675754782天猫超市主会场 -->
									<view class="text" @tap="pthd(2015031801472)" style="-webkit-flex: 1;flex: 1;">
										<image src="https://zebra.alicdn.com/7c78b4e8-b717-41e6-bdbc-668ff54b2fa5.jpg" mode=""></image>
									</view>
									<!-- 1577675754758服装主会场   1563282628203天猫zy-->
									<view class="text" @tap="pthd(2015031801477)" style="-webkit-flex: 1;flex: 1;">
										<image src="https://zebra.alicdn.com/20f8a617-7ab1-4ef2-afe4-cda0bdc3f450.jpg" mode=""></image>
									</view>
								</view>
							</view>
							<!-- 横向混动 -->
							<view>热销爆品</view>
							<view class="goods_item">
								<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll1" scroll-left="0" style="display: flex;">
									<view id="demo2" class="scroll-view-item_H" v-for="(item,index) in goodsJpbk">
										<product-list-row class="scroll-view-item_H" :product="item"></product-list-row>
									</view>
									<view class="scroll-view-item_H moreGoods" @tap="moreGoods('jpbk')" style="width: 50px;">
										<view class="text">更</view>
										<view class="text">多</view>
										<view class="text">好</view>
										<view class="text">货</view>
										<view class="text gt" style="">&gt;</view>
									</view>
								</scroll-view>
							</view>
							<view class="goods_item">
								<view>天猫超市</view>
								<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll1" scroll-left="0">
									<view id="demo2" class="scroll-view-item_H" v-for="(item,index) in goodsTmcs">
										<product-list-row class="scroll-view-item_H" :product="item"></product-list-row>
									</view>
									<view class="scroll-view-item_H moreGoods" @tap="moreGoods('tmcs')" style="width: 50px;">
										<view class="text">更</view>
										<view class="text">多</view>
										<view class="text">好</view>
										<view class="text">货</view>
										<view class="text gt" style="">&gt;</view>
									</view>
								</scroll-view>
							</view>
							<view class="goods_item">
								<view>天猫国际</view>
								<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll1" scroll-left="0">
									<view id="demo2" class="scroll-view-item_H" v-for="(item,index) in goodsTmgj">
										<product-list-row class="scroll-view-item_H" :product="item"></product-list-row>
									</view>
									<view class="scroll-view-item_H moreGoods" @tap="moreGoods('tmgj')" style="width: 50px;">
										<view class="text">更</view>
										<view class="text">多</view>
										<view class="text">好</view>
										<view class="text">货</view>
										<view class="text gt" style="">&gt;</view>
									</view>
								</scroll-view>
							</view>
							<uni-segmented-control activeBorder='transparent' v-show="tabIndex==0" :current="current" :values="items" :style-type="styleType"
							 :active-color="activeColor" @clickItem="onClickItem" />
							<view class="activify1" v-show="tabIndex==0">
								<view v-show="current === 0">
									<view v-for="(item,index) in tbjx">
										<!-- <tab-good-list :options="item"></tab-good-list> -->
										<media-list :options="item" :tab='current'></media-list>
									</view>
									<!-- <sort :sortTabFixed="sortTabFixed" :tabIndex="tabIndex" :isDefault="isDefault" :isPrice="isPrice" :isTk_rate="isTk_rate" :isTotal_sales="isTotal_sales"></sort>
									<block v-for="(newsitem,index2) in tab.data" :key="index2">
										<media-list :options="newsitem"></media-list>
									</block> -->
								</view>
								<view v-show="current === 1">
									<view v-for="(item,index) in pdd">
										<order-list :isOrder="true" :good="item"></order-list>
									</view>
								</view>
								<view v-show="current === 2">
									<view v-for="(item,index) in jd">
										<order-list :isOrder="true" :good="item"></order-list>
									</view>
								</view>
								<view v-show="current === 3">
									<view v-for="(item,index) in tmcs">
										<order-list :isOrder="true" :good="item"></order-list>
									</view>
								</view>
							</view>
						</view>
						<uni-load-more class="loadMore" :loadingType="loadingType"></uni-load-more>
						<!-- #ifdef APP-PLUS||APP-PLUS-NVUE -->
						<view class="stone" style="height: 180upx;width: 100%;background-color: transparent;"></view>
						<!-- #endif -->
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import viewTabbar from '../../components/uni-tabbar.vue'
	import uniSegmentedControl from '@/components/tab-control.vue';
	import orderList from '@/components/order-list.vue'
	import dividLine from '@/components/line.vue';
	import scrollIndex from '@/components/scroll-index.vue';
	import mediaList from '@/components/mediaList.vue'
	import goodList from '@/components/good-list.vue'
	import uniLoadMore from '@/components/uni-load-more.vue';
	import goTop from '@/components/go-top.vue';
	import uniIcon from '@/components/uni-icon.vue';
	import uniGrid from '@/components/uni-grid.vue';
	import sort from '@/components/sort.vue';
	import tabGoodList from '@/components/tab-good-list.vue';
	import productListRow from '@/components/product-list-row.vue';
	import {
		getGoodsList,
		getRecommend,
		getHotListGood,
		getOtherGood,
		exisitCollection,
		ztkLunbo,
		ztkLunboGoods,
		ztkTaobaoJX,
		pthd,
		ztkActivify,
		shareCount,
		getSendCircleData,
		addSendCircle
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
			uniGrid,
			orderList,
			uniSegmentedControl,
			sort,
			tabGoodList,
			productListRow,
			viewTabbar
		},
		data() {
			return {
				pthdUrl: '',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				//tab
				items: [
					'淘宝精选',
					// '拼多多',
					// '京东',
					// '天猫超市'
				],
				styles: [{
					value: 'button',
					text: '按钮',
					checked: true
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#007aff',
					'#4cd964',
					'#dd524d'
				],
				current: 0,
				colorIndex: 0,
				activeColor: '#fff',
				styleType: 'text',
				orders: [],
				tbjx: [],
				pdd: [],
				jd: [],
				tmcs: [],

				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				isShow: false,
				page: 1,
				newsitems: [],
				loadingType: 2,
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
				tabBars: [{
					name: '首页',
					id: 'sy',
					addGoodsFlag: false,
					childTabs: [{
							image: '/static/tab/9.9.png',
							text: '9.9元'
						},
						{
							image: '/static/tab/19.9.png',
							text: '19.9元'
						},
						{
							image: '/static/tab/gyj.png',
							text: '高佣金'
						},
						{
							image: '/static/tab/msb.png',
							text: '秒杀榜'
						},
						{
							image: '/static/tab/tqg.png',
							text: '淘抢购'
						},
						{
							image: '/static/tab/jhs.png',
							text: '聚划算'
						},
						{
							image: '/static/tab/msj.png',
							text: '美食街'
						},
						{
							image: '/static/tab/shg.png',
							text: '生活购'
						}, {
							image: '/static/tab/msj.png',
							text: '视频商品'
						},
						{
							image: '/static/tab/shg.png',
							text: '高佣商品'
						}
					]
				}, {
					name: '母婴',
					id: 'my',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '孕产用品'
					}, {
						image: '/static/tab/shg.png',
						text: '尿不湿'
					}, {
						image: '/static/tab/shg.png',
						text: '玩具图书'
					}, {
						image: '/static/tab/shg.png',
						text: '婴童用品'
					}, {
						image: '/static/tab/shg.png',
						text: '奶粉辅食'
					}, {
						image: '/static/tab/shg.png',
						text: '奶瓶奶嘴'
					}, {
						image: '/static/tab/shg.png',
						text: '婴童床品'
					}, {
						image: '/static/tab/shg.png',
						text: '童装童鞋'
					}]
				}, {
					name: "美食",
					id: "ms",
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '休闲食品'
					}, {
						image: '/static/tab/shg.png',
						text: '坚果蜜饯'
					}, {
						image: '/static/tab/shg.png',
						text: '饼干糕点'
					}, {
						image: '/static/tab/shg.png',
						text: '茶酒冲饮'
					}, {
						image: '/static/tab/shg.png',
						text: '蔬菜熟食/蛋类'
					}, {
						image: '/static/tab/shg.png',
						text: '粮油调料'
					}, {
						image: '/static/tab/shg.png',
						text: '保健滋补'
					}, {
						image: '/static/tab/shg.png',
						text: '肉脯卤味'
					}]
				}, {
					name: '女装',
					id: 'nz',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '裙子'
					}, {
						image: '/static/tab/shg.png',
						text: 'T恤'
					}, {
						image: '/static/tab/shg.png',
						text: '衬衫'
					}, {
						image: '/static/tab/shg.png',
						text: '裤子'
					}, {
						image: '/static/tab/shg.png',
						text: '外套'
					}, {
						image: '/static/tab/shg.png',
						text: '背心吊带'
					}, {
						image: '/static/tab/shg.png',
						text: '卫衣'
					}, {
						image: '/static/tab/shg.png',
						text: '蕾丝衫/雪纺衫'
					}]
				}, {
					name: '美妆',
					id: 'mz',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '卸妆洁面'
					}, {
						image: '/static/tab/shg.png',
						text: '面膜'
					}, {
						image: '/static/tab/shg.png',
						text: '底妆'
					}, {
						image: '/static/tab/shg.png',
						text: '唇妆香水'
					}, {
						image: '/static/tab/shg.png',
						text: '洗护用品'
					}, {
						image: '/static/tab/shg.png',
						text: '口腔护理'
					}, {
						image: '/static/tab/shg.png',
						text: '美发护发'
					}, {
						image: '/static/tab/shg.png',
						text: '个护用品'
					}]
				}, {
					name: '内衣',
					id: 'ny',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '内裤'
					}, {
						image: '/static/tab/shg.png',
						text: '文胸'
					}, {
						image: '/static/tab/shg.png',
						text: '文胸套装'
					}, {
						image: '/static/tab/shg.png',
						text: '保暖内衣'
					}, {
						image: '/static/tab/shg.png',
						text: '袜子'
					}, {
						image: '/static/tab/shg.png',
						text: '睡衣/家具服'
					}, {
						image: '/static/tab/shg.png',
						text: '朔身衣'
					}, {
						image: '/static/tab/shg.png',
						text: '基础打底'
					}]
				}, {
					name: '百货',
					id: 'bh',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '清洁用品'
					}, {
						image: '/static/tab/shg.png',
						text: '床上用品'
					}, {
						image: '/static/tab/shg.png',
						text: '家具饰品'
					}, {
						image: '/static/tab/shg.png',
						text: '餐厨用具'
					}, {
						image: '/static/tab/shg.png',
						text: '收纳储物'
					}, {
						image: '/static/tab/shg.png',
						text: '绿植花卉'
					}, {
						image: '/static/tab/shg.png',
						text: '家具日用'
					}, {
						image: '/static/tab/shg.png',
						text: '文体车品'
					}]
				}, {
					name: '鞋包',
					id: 'xbps',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '女鞋'
					}, {
						image: '/static/tab/shg.png',
						text: '男鞋'
					}, {
						image: '/static/tab/shg.png',
						text: '女包/男包'
					}, {
						image: '/static/tab/shg.png',
						text: '箱包配件'
					}, {
						image: '/static/tab/shg.png',
						text: '穿戴用品'
					}, {
						image: '/static/tab/shg.png',
						text: '手表'
					}, {
						image: '/static/tab/shg.png',
						text: '潮流饰品'
					}, {
						image: '/static/tab/shg.png',
						text: '珠宝首饰'
					}]
				}, {
					name: '家电',
					id: 'smjd',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '电子产品/数码'
					}, {
						image: '/static/tab/shg.png',
						text: '手机壳/手机膜'
					}, {
						image: '/static/tab/shg.png',
						text: '智能设备'
					}, {
						image: '/static/tab/shg.png',
						text: '数码配件'
					}, {
						image: '/static/tab/shg.png',
						text: '影音电器'
					}, {
						image: '/static/tab/shg.png',
						text: '生活电器'
					}, {
						image: '/static/tab/shg.png',
						text: '厨房电器'
					}, {
						image: '/static/tab/shg.png',
						text: '大家电'
					}]
				}, {
					name: '男装',
					id: 'lz',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: 'Polo衫'
					}, {
						image: '/static/tab/shg.png',
						text: 'T恤'
					}, {
						image: '/static/tab/shg.png',
						text: '衬衫'
					}, {
						image: '/static/tab/shg.png',
						text: '卫衣'
					}, {
						image: '/static/tab/shg.png',
						text: '短裤'
					}, {
						image: '/static/tab/shg.png',
						text: '牛仔裤'
					}, {
						image: '/static/tab/shg.png',
						text: '休闲裤'
					}, {
						image: '/static/tab/shg.png',
						text: '休闲套装'
					}]
				}, {
					name: '运动',
					id: 'sp',
					addGoodsFlag: false,
					childTabs: [{
						image: '/static/tab/shg.png',
						text: '瑜伽'
					}, {
						image: '/static/tab/shg.png',
						text: '游泳'
					}, {
						image: '/static/tab/shg.png',
						text: '球类运动'
					}, {
						image: '/static/tab/shg.png',
						text: '运动鞋'
					}, {
						image: '/static/tab/shg.png',
						text: '运动服装'
					}, {
						image: '/static/tab/shg.png',
						text: '运动包/配件'
					}, {
						image: '/static/tab/shg.png',
						text: '骑行装备'
					}, {
						image: '/static/tab/shg.png',
						text: '户外/登山'
					}]
				}],
				pages: new Array(),
				lunboImgs: [],
				goodsJpbk: [], //极品爆款
				goodsTmcs: [], //天猫超市
				goodsTmgj: [], //天猫国际（海淘）
				addPageFlag: false, //增加第一页状态
				addGoodsFlag: true, //增加商品页状态
				changeTabFlag: true //选项卡状态
			}
		},
		onLoad(option) {
			uni.showLoading({
				title: "正在玩命加载...",
				mask: true
			})
			this.lunboImgs=uni.getStorageSync("ztkLunbo")
			this.goodsJpbk=uni.getStorageSync("goodsJpbk")
			this.goodsTmcs=uni.getStorageSync("goodsTmcs")
			this.goodsTmgj=uni.getStorageSync("goodsTmgj")
			this.newsitems=uni.getStorageSync("newsitems")
			this.tbjx=uni.getStorageSync("tbjx")
			console.log(this.newsitems);
			setTimeout(function() {
				uni.hideLoading()
			}, 1000)
			console.log(this.lunboImgs);
			console.log(this.goodsJpbk);
			console.log(this.goodsTmcs);
			console.log(this.goodsTmgj);
			console.log(this.tbjx);
			if(!this.lunboImgs||!this.goodsJpbk||!this.goodsTmcs||!this.goodsTmgj||!this.newsitems||!this.tbjx){
				console.log(1);
				this.ztkLunbo();
				this.ztkActivify({
					type: "极品爆款"
				});
				this.ztkActivify({
					type: "天猫超市"
				});
				this.ztkActivify({
					type: "天猫国际"
				});
				this.ztkTaobaoJX();
				//懒加载数据未响应完全用户点击首页则重新加载  否则会出现白屏
				if (uni.getStorageSync("goodsList").length == this.tabBars.length) {
					this.fullData().then(res => {
						console.log(JSON.stringify(res));
						this.newsitems = res;
					})
				} else {
					uni.showLoading({
						title: "正在玩命加载...",
						mask: true
					})
					this.newsitems = this.randomfn();
					console.log(this.newsitems);
					setTimeout(function() {
						uni.hideLoading()
					}, 3000)
				}
			}
			//初始化每个商品的page
			for (var p = 0; p < this.tabBars.length; p++) {
				if (p < 1) {
					let tabPage = [1, 1, 1];
					this.pages.push(tabPage);
				}
				let initPage = 1;
				this.pages.push(initPage);
			}
			console.log(uni.getStorageSync("goodsList"));
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
			uni.navigateTo({
				url: '/pages/common/search',
				animationType: 'fade-in'
			})
		},
		onBackPress(options) {
			console.log(options);
		},
		onShow() {},
		methods: {
			scrollLeftEvent(e){
				console.log(e);
			},
			//引导页
			guidePage() {
				uni.redirectTo({
					url: '/pages/index/guide'
				});
				console.log("guide");
				const value = uni.getStorageSync('launchFlag');
				if (value) {
					console.log(value);
					if (value == true) {
						uni.switchTab({
							url: '/pages/index/index'
						});
					} else {
						uni.redirectTo({
							url: '/pages/index/guide'
						});
					}
					uni.setStorage({
						key: 'launchFlag',
						data: false,
						success: function() {
							console.log('存储launchFlag:false');
						}
					});
				} else {
					console.log(value);
					uni.setStorage({
						key: 'launchFlag',
						data: true,
						success: function() {
							console.log('存储launchFlag');
						}
					});
					uni.redirectTo({
						url: '/pages/index/guide'
					});
				}
			},
			/* 横向更多商品 */
			moreGoods(type) {
				switch (type) {
					case 'jpbk':
						type = '极品爆款'
						break;
					case 'tmcs':
						type = '天猫超市';
						break;
					case 'tmgj':
						type = '天猫国际';
						break;
				}
				uni.navigateTo({
					url: `/pages/common/moreGoods?type=${type}`
				})
			},
			/* 平台活动 */
			pthd(aid) {
				console.log(aid);
				let relationId = uni.getStorageSync("user").pid;
				let data = {
					aid: aid,
					relationId: relationId
				};
				pthd(data).then(res => {
					console.log(res);
					// this.pthdUrl=res.data.result.url;
					const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
					var url = res.data.result.url;
					bcPlugin.BCGetCoupons(url, result => {
						console.log(JSON.stringify(result));
						uni.reLaunch({
							url: '/pages/index/user'
						})
					});
				})
			},
			//横向滑动
			scroll1(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			/* 首页选项卡商品 */
			onClickItem(index) {
				console.log(index);
				if (this.current !== index) {
					this.current = index
				}
				switch (index) {
					case 0:
						ztkTaobaoJX().then(res => {
							this.tbjx = res;
							console.log(res);
						});
						break;
						// case 1:
						// 	break;
						// case 2:
						// 	break;
						// case 4:
						// 	break;
				}
			},
			/* 横向活动 */
			ztkActivify(params) {
				console.log(params);
				switch (params.type) {
					case '极品爆款':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								this.goodsJpbk = res.content;
							}
							// console.log(res);
						});
						break;
					case '天猫超市':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								this.goodsTmcs = res.content;
							}
							// console.log(res);
						});
						break;
					case '天猫国际':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								this.goodsTmgj = res.content;
							}
							// console.log(res);
						});
						break;
				}
			},

			/* 淘宝精选 */
			ztkTaobaoJX() {
				ztkTaobaoJX({
					page: 1,
				}).then(res => {
					this.tbjx = res;
				});
			},
			lunboClick(url) {
				// uni.showLoading({
				// 	title: "正在玩命加载...",
				// 	mask: true,
				// })
				// console.log(url.substr(0, url.indexOf("?")))
				// ztkLunboGoods(url.substr(0, url.indexOf("?"))).then(res => {
				// 	console.log(res);
				// 	uni.hideLoading()
				// 	uni.navigateTo({
				// 		url: 'lunbo?goods=' + res.content
				// 	})
				// });
			},
			ztkLunbo() {
				ztkLunbo().then(res => {
					console.log(res);
					this.lunboImgs = res.content;
				})
			},
			tabClick(e) {
				let that = this;
				let type = that.tabBars[that.tabIndex].childTabs[e.index].text;
				if (that.tabBars[that.tabIndex].name == '女装') {
					type += '女';
				} else if (that.tabBars[that.tabIndex].name == '男装') {
					type += '男';
				}
				console.log();
				uni.navigateTo({
					url: `/pages/tabPage/tabGoods?type=${type}`
				})
				// switch (type) {
				// 	case '':
				// 		uni.navigateTo({
				// 			url: "/pages/tabPage/9.9?type=9.9"
				// 		})
				// 		break;
				// 	case 1:
				// 		uni.navigateTo({
				// 			url: "/pages/tabPage/19.9?type=19.9"
				// 		})
				// 		break;
				// }
			},
			scroll(e) {
				console.log(e);
				// let selector = uni.createSelectorQuery().select('.tabList');
				// let tabListH = 200;
				// selector.fields({
				// 	size: true
				// }, data => {
				// 	// console.log(data, data.height);
				// 	tabListH = data.height;
				// }).exec();
				// if (e.detail.scrollTop >= tabListH) {
				// 	this.sortTabFixed = true;
				// } else if (e.detail.scrollTop < tabListH) {
				// 	this.sortTabFixed = false;
				// }
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
							// aryItem = uni.getStorageSync("goodsList")[0];
							aryItem = "";
						}
						ary.push(aryItem);
					}
					resolve(ary);
				})
			},
			touchmove(e, index) {
				if (this.tabBars[index].addGoodsFlag) {
					return;
				}
				//第一页的商品另外加载
				if (index == 0) {
					if (!uni.getStorageSync("nextPage" + index)) {
						this.tabBars[index].addGoodsFlag = true;
						// console.log(this.pages[this.tabIndex][this.current]);
						this.pages[this.tabIndex][this.current]++
						this.nextPage(this.pages[index][this.current], this.tabBars[index].name, index).then(res => {
							console.log(res);
							uni.setStorageSync("nextPage" + index, res);
						})
					}
					return;
				}
				if (!uni.getStorageSync("nextPage" + index)) {
					this.tabBars[index].addGoodsFlag = true;
					console.log(this.pages[index], this.tabBars[index].name);
					this.pages[index]++;
					this.nextPage(this.pages[index], this.tabBars[index].name, index).then(res => {
						uni.setStorageSync("nextPage" + index, res);
					})
					// getGoodsList({
					// 	page: this.pages[index],
					// 	type: this.tabBars[index].name
					// }).then(res => {
					// 	this.tabBars[index].addGoodsFlag=false;
					// 	console.log(res.result);
					// 	//this.newsitems[index].data = this.newsitems[index].data.concat(res.result);
					// 	uni.setStorageSync("nextPage" + index, res.result);
					// 	if (res.result.length < 20) {
					// 		this.loadingType = 2;
					// 		return;
					// 	}
					// })
				}
				//console.log(this.newsitems)
			},
			nextPage(page, type, index) {
				return new Promise((resolve, reject) => {
					if (index == 0) {
						console.log(page);
						ztkTaobaoJX({
							page: page
						}).then(res => {
							// console.log(JSON.stringify(res));
							//后期首页记录多个tab商品
							//uni.setStorageSync("nextPageTab" + this.current, res);
							// console.log(uni.getStorageSync("nextPageTab" + this.current, res));
							this.tabBars[index].addGoodsFlag = false;
							console.log(res);
							resolve(res);
						});
						return;
					}
					getGoodsList({
						page: this.pages[index],
						type: this.tabBars[index].name
					}).then(res => {
						if (res.result.length < 20) {
							this.loadingType = 2;
							return;
						}
						this.tabBars[index].addGoodsFlag = false;
						// console.log(res.result);
						resolve(res.result);
						//this.newsitems[index].data = this.newsitems[index].data.concat(res.result);
						// uni.setStorageSync("nextPage" + index, res.result);
					})
				})
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
			loadlazy(e) {
				let list = [];
				if (this.tabIndex == 0) {
					list = this.tbjx;
				} else {
					list = this.newsitems[e].data;
				}
				if (!uni.getStorageSync("nextPage" + e)) {
					setTimeout(() => {
						console.log(1);
						if (!uni.getStorageSync("nextPage" + e)) {
							setTimeout(() => {
								console.log(2);
								if (!uni.getStorageSync("nextPage" + e)) {
									setTimeout(() => {
										console.log(3);
										if (!uni.getStorageSync("nextPage" + e)) {
											setTimeout(() => {
												console.log(4);
												list = list.concat(uni.getStorageSync("nextPage" + e));
												uni.removeStorageSync("nextPage" + e);
											}, 8000)
										} else {
											list = list.concat(uni.getStorageSync("nextPage" + e));
											uni.removeStorageSync("nextPage" + e);
										}
									}, 5000)
								} else {
									list = list.concat(uni.getStorageSync("nextPage" + e));
									uni.removeStorageSync("nextPage" + e);
								}
							}, 3000)
						} else {
							list = list.concat(uni.getStorageSync("nextPage" + e));
							uni.removeStorageSync("nextPage" + e);
						}
					}, 1000)
				} else {
					console.log(typeof this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e)));
					list = list.concat(uni.getStorageSync("nextPage" + e));
					console.log(uni.getStorageSync("nextPage" + e));
					uni.removeStorageSync("nextPage" + e);
				}
			},
			loadMore(e) {
				//如果分页缓存没值  进行等待  直到分页取到值
				if (!uni.getStorageSync("nextPage" + e)) {
					console.log("kong");
					setTimeout(() => {
						console.log(1);
						if (!uni.getStorageSync("nextPage" + e)) {
							setTimeout(() => {
								console.log(2);
								if (!uni.getStorageSync("nextPage" + e)) {
									setTimeout(() => {
										console.log(3);
										if (!uni.getStorageSync("nextPage" + e)) {
											setTimeout(() => {
												console.log(4);
												if (this.tabIndex == 0) this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
												else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
												uni.removeStorageSync("nextPage" + e);
											}, 8000)
										} else {
											if (this.tabIndex == 0) this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
											else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
											uni.removeStorageSync("nextPage" + e);
										}
									}, 5000)
								} else {
									if (this.tabIndex == 0) this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
									else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
									uni.removeStorageSync("nextPage" + e);
								}
							}, 3000)
						} else {
							if (this.tabIndex == 0) this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
							else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
							uni.removeStorageSync("nextPage" + e);
						}
					}, 1000)
				} else {
					if (this.tabIndex == 0) this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
					else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
					uni.removeStorageSync("nextPage" + e);
				}

			},
			addData(e) {
				console.log(e);
				this.newsitems[e].data = uni.getStorageSync("nextPage" + e);
			},
			async changeTab(e) {
				if (!this.changeTabFlag) {
					return;
				}
				this.changeTabFlag = false; //切换tab之后不允许频繁切换
				setTimeout(() => {
					this.changeTabFlag = true;
				}, 500)
				let index = e.target.current;
				this.tabIndex == index;
				console.log(index);
				if(index>0){
					uni.switchTab({
						url:'/pages/index/index'
					})
				}
				// let index = e.target.current;
				// this.tabIndex == index;
				// console.log(this.tabIndex);
				// if (!this.changeTabFlag) {
				// 	return;
				// }
				// this.changeTabFlag = false; //切换tab之后不允许频繁切换
				// setTimeout(() => {
				// 	this.changeTabFlag = true;
				// }, 500)
				// this.sortTabFixed = false; //初始化排序列表的位置
				// //this.newsitems[index].data = uni.getStorageSync("goodsList")[index].data;
				// // uni.showLoading({
				// // 	title:this.loadingTitle,
				// // 	mask:this.mask
				// // })
				// //未加载出的tab项重新获取
				// if (this.newsitems[index].data.length == 0) {
				// 	console.log("data undefined");
				// 	getGoodsList({
				// 		page: 0,
				// 		type: this.tabBars[index].name
				// 	}).then(res => {
				// 		console.log(res.result);
				// 		this.newsitems[index].data = res.result;
				// 		// console.log(this.newsitems[index]);
				// 	})
				// }
				// // console.log(JSON.stringify(this.newsitems[index].data));
				// console.log(this.newsitems[index].data.length);
				// if (this.isClickChange) {
				// 	this.tabIndex = index;
				// 	this.isClickChange = false;
				// 	return;
				// }
				// let tabBar = await this.getElSize("tab-bar"),
				// 	tabBarScrollLeft = tabBar.scrollLeft;
				// let width = 0;

				// for (let i = 0; i < index; i++) {
				// 	let result = await this.getElSize(this.tabBars[i].id);
				// 	width += result.width;
				// }
				// let winWidth = uni.getSystemInfoSync().windowWidth,
				// 	nowElement = await this.getElSize(this.tabBars[index].id),
				// 	nowWidth = nowElement.width;
				// if (width + nowWidth - tabBarScrollLeft > winWidth) {
				// 	this.scrollLeft = width + nowWidth - winWidth;
				// }
				// if (width < tabBarScrollLeft) {
				// 	this.scrollLeft = width;
				// }
				// this.isClickChange = false;
				// this.tabIndex = index; //一旦访问data就会出问题
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
				this.sortTabFixed = false; //初始化排序列表的位置
				let tabIndex = e.target.dataset.current;
				this.tabIndex == tabIndex;
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
					if (i < 1) {
						aryItem.data = '';
						ary.push(aryItem);
					} else {
						getGoodsList({
							page: this.page,
							type: this.tabBars[i].name
						}).then(res => {
							//console.log(JSON.stringify(res.result));
							aryItem.data = res.result;
						});
						ary.push(aryItem);
					}
					//添加每页头部tab

				}
				return ary;
			}, //条件筛选
			screentap(sortType) {
				console.log(this.tabBars[this.tabIndex].name);
				if (sortType == '') {
					this.isDefault = true;
					this.isTotal_sales = 0;
					this.isTk_rate = 0;
					this.isPrice = 0;
					this._getGoodsList({
						type: this.tabBars[this.tabIndex].name,
						sorts: sortType
					});
				} else if (sortType == 'total_sales') {
					this.isDefault = false;
					this.isTk_rate = 0;
					this.isPrice = 0;
					if (this.isTotal_sales == 0 || this.isTotal_sales == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: this.tabBars[this.tabIndex].name
						});
						this.isTotal_sales = 2;
					} else if (this.isTotal_sales == 2) {
						this.sorts.sort1 = sortType + '_asc';
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
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
							type: this.tabBars[this.tabIndex].name
						});
						this.isTk_rate = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
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
							type: this.tabBars[this.tabIndex].name
						});
						this.isPrice = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
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
	.moreGoods {
		display: flex;
		justify-content: center;
	}

	.gt {
		margin: auto;
		width: 20px;
		height: 20px;
		border-radius: 20px;
		color: white;
		justify-content: center;
		background-color: black;
		line-height: 20px;
	}

	.activify>view image {
		width: 100%;
		height: 100%;
	}

	.activify>view {
		height: 100px;
		flex: 1 1 0%;
	}

	/* 横向滚动 */
	.scroll-Y {
		height: 300upx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 150px;
		height: 280upx;
		line-height: 300upx;
		text-align: center;
		font-size: 36upx;
		margin-right: 30px;
	}

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

	.double-tap {
		position: fixed;
		bottom: 0;
		left: 0;
		background: #333333;
		width: 60px;
		height: 60px;
	}

	.list {
		margin-bottom: 140px;
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
			// background: #FC1F3F;
			background: #333;
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
		background-color: #333;
		height: auto;
		line-height: 0;
	}
	.swiper-tab-list{
		color: white;
	}

	.uni-scroll-view {
		white-space: nowrap !important;
	}
</style>
