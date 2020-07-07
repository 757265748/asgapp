<template>
	<view id="QSGradientSwiper" class="QSGradientSwiper" :style="{
		'height': height + 'px'
	}">
		<!-- #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
		<view class="background" :animation="animationData" :style="{
					'height': getHeight*Number(backgroundHeightScale) + 'px',
					'border-bottom-left-radius': borderBottomRadius,
					'border-bottom-right-radius': borderBottomRadius
				}">
			{{animationData}}</view>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
		<view class="background" id="background1" :style="{
				'height': getHeight*Number(backgroundHeightScale) + 'px',
				'border-bottom-left-radius': borderBottomRadius,
				'border-bottom-right-radius': borderBottomRadius
		}">
		</view>
		<view class="flex-column-center" @touchstart="test.touchstart" @touchmove="test.touchmove" :change:prop="test.end"
		 :prop="propValue" @touchend="test.touchend" :data-top="scrollTop" id="refresh-container" style="position: relative;z-index: 2;top: 110rpx;">

			<!-- 起始会隐藏在导航栏里 -->
			<!-- <view class="flex-row-center" style="height: 70rpx;width: 750rpx;position: relative;top: -80rpx;">
				<view class="cuIcon-loading1" id="lot" style="font-size: 35rpx;color: #00CDCD;">
				</view>
				<text class="my-neirong-sm padding-left" style="color: #9c9c9c;">{{refreshText}}</text>
			</view> -->

			<view class="white-box" style="width: 100%;">
				<view class="background" id="background" :style="{
							'height': getHeight*Number(backgroundHeightScale) + 'px',
							'border-bottom-left-radius': borderBottomRadius,
							'border-bottom-right-radius': borderBottomRadius
						}">
				</view>
				<!-- #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
				<swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor"
				 :autoplay="autoplay" :interval="interval" :duration="duration" :circular="isCircular" :current="swiperCurrent"
				 @transition="swiperAction" @animationfinish="swiperAction" :style="{ 'height': height + 'px' }">
					<swiper-item v-for="(item, index) in list" :key="index">
						<view class="swiper-item">
							<QSGradientSwiperItem :item="item" :index="index"></QSGradientSwiperItem>
						</view>
					</swiper-item>
				</swiper>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
				<swiper id="swiper" class="swiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
				 :indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval" :duration="duration"
				 :previous-margin="previousMargin" :next-margin="nextMargin" :circular="isCircular" :current="swiperCurrent"
				 @transition="QSGradientSwiperWXS.transition" @animationfinish="QSGradientSwiperWXS.animationfinish"
				 :circularGradient_wxs="circularGradient_wxs" :gradientList_wxs="gradientList_wxs" :itemMoveDistance="itemMoveDistance"
				 :change:circularGradient_wxs="QSGradientSwiperWXS.circularGradient_wxs_Change" :change:gradientList_wxs="QSGradientSwiperWXS.gradientList_wxs_Change"
				 :change:itemMoveDistance="QSGradientSwiperWXS.itemMoveDistance_Change" :data-swipercurrent="swiperCurrent"
				 :data-iscircular="isCircular" :style="{ 'height': height + 'px' }">
					<swiper-item v-for="(item, index) in list" :key="index">
						<view class="swiper-item">
							<QSGradientSwiperItem :item="item" :index="index"></QSGradientSwiperItem>
						</view>
					</swiper-item>
				</swiper>
				<!-- #endif -->
				<view class="index-content">
					<view class="search-container" :style="{'padding-top':statusBarH+'px'}">
						<input type="text" value="" @tap="searchClick" />
						<view class="uni-icon uni-icon-chat" style="color: white;" @tap="infoClick"></view>
					</view>
					<view class="uni-tab-bar">
						<view class="uni-flex uni-row tabbar">
							<scroll-view id="tab-bar" @click="togglePopup('')" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
								<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
								 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}
									<view v-show="tabIndex==index" class="sign"></view>
								</view>
							</scroll-view>
							<view class="tab-more" style="" @click="togglePopup('middle-list')">
								<view class="uni-icon" :class="!tab_more_flag?'uni-icon-arrowright':'uni-icon-arrowleft'"></view>
							</view>
						</view>
						<view class="content" v-if="tab_more_flag">
							<scroll-view scroll-y class="left-aside">
								<view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{active: item.id === currentId}" @click="tabtap(item)">
									{{item.name}}
								</view>
							</scroll-view>
							<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
								<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
									<text class="s-item">{{item.name}}</text>
									<view class="t-list">
										<view @click="tabClick_more(titem)" v-if="titem.pid === item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
											<image src="../../asgapi-master/static/static/tm.png"></image>
											<text>{{titem.name}}</text>
										</view>
									</view>
								</view>
								<view style="height: 500upx;"></view>
							</scroll-view>
						</view>

						<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
							<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
								<scroll-view class="list" scroll-y @scroll="scroll" @scrolltolower="loadMore(index1)" @touchstart="touchmove($event,index1)">
									<view>
										<!-- <view class="flex-column-center"  @touchstart="test.touchstart" @touchmove="test.touchmove"
										:change:prop="test.end" :prop="propValue"
										@touchend="test.touchend" :data-top="scrollTop" id="refresh-container"  >
										
										<view class="flex-row-center" style="height: 70rpx;width: 750rpx">
											<view class="cuIcon-loading1" id="lot" style="font-size: 35rpx;color: #00CDCD;">
											</view>
											<text class="my-neirong-sm padding-left" style="color: #9c9c9c;">{{refreshText}}</text>
										</view>
										
											<text class="my-neirong-sm padding-top">2020年3月3日</text>
											<view class="white-box" style="width: 100%;"> -->

										<block v-if="index1===0">
											<QSGradientSwiper height="300" @change1="change1" circular ref="QSGradientSwiper"></QSGradientSwiper>
										</block>
										<view v-if="tab.lunboImgs.length>0">
											<!-- <swiper class="lunbo" indicator-dots="true" v-if="set_page.lunbo==1">
													<swiper-item v-for="(img, key) in tab.lunboImgs">
														<image @tap="lunboClick(img.activityLink)" :src="img.materialLink" style="margin: auto;display: flex;height: 100%;width: 100%;" />
													</swiper-item>
												</swiper> -->
											<view class="tab-grid uni-flex uni-row" v-if="set_page.tab_grid==1">
												<view class="grid-item uni-flex uni-column" @click="tabClick(item)" style="" v-for="(item,index) in tab.head">
													<image :src="item.image"></image>
													<!-- <text style="text-align: center;">{{item.text}}</text> -->
												</view>
											</view>
											<view class="activify" v-if="set_page.active==1">
												<view class="uni-flex uni-row">
													<view class="text" @tap="pthd(tab.activity[0].activityLink)" style="-webkit-flex: 1;flex: 1;">
														<image :src="tab.activity[0].materialLink" mode=""></image>
													</view>
													<view class="text" @tap="pthd(tab.activity[1].activityLink)" style="-webkit-flex: 1;flex: 1;">
														<image :src="tab.activity[1].materialLink" mode=""></image>
													</view>
												</view>
												<view class="uni-flex uni-row">
													<view class="text" @tap="pthd(tab.activity[2].activityLink)" style="-webkit-flex: 1;flex: 1;">
														<image :src="tab.activity[2].materialLink" mode=""></image>
													</view>
													<view class="text" @tap="pthd(tab.activity[3].activityLink)" style="-webkit-flex: 1;flex: 1;">
														<image :src="tab.activity[3].materialLink" mode=""></image>
													</view>
												</view>
											</view>
											<view v-if="set_page.tbjx==1">
												<view style="margin-left: 20upx;">{{items[0]}}</view>
												<view v-for="(item,index) in tab.tbjx">
													<media-list :options="item"></media-list>
												</view>
											</view>
										</view>
										<view v-if="tab.lunboImgs.length<=0">
											<view class="box_f" :style="{'background-color':lunboBackground}"></view>
											<view class="box" :style="{'background-color':lunboBackground}"></view>
											<uni-grid class="tabList" :options="tab.head" @click="tabClick" :show-border="false" column-num="4" />
											<view :class="['screen-wrap',{fixed:sortTabFixed},{fixed:tabIndex==-1}]">
												<view :class="{on :tabBars[index1].sorts.isDefault==true}" @tap="screentap('')">默认</view>
												<view class='jg-wrap' @tap="screentap('total_sales')">
													<text :class="{on :tabBars[index1].sorts.isTotal_sales!=0}">销量</text>
													<view class="jgicon uni-flex uni-column">
														<view class="uni-icon" v-if="tabBars[index1].sorts.isTotal_sales!=0" :class="tabBars[index1].sorts.isTotal_sales==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
													</view>
												</view>
												<view class='jg-wrap' @tap="screentap('tk_rate')">
													<text :class="{on :tabBars[index1].sorts.isTk_rate!=0}">佣金比率</text>
													<view class="jgicon uni-flex uni-column">
														<view class="uni-icon" v-if="tabBars[index1].sorts.isTk_rate!=0" :class="tabBars[index1].sorts.isTk_rate==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
													</view>
												</view>
												<view class='jg-wrap' @tap="screentap('price')">
													<text :class="{on :tabBars[index1].sorts.isPrice!=0}">价格</text>
													<view class="jgicon uni-flex uni-column">
														<view class="uni-icon" v-if="tabBars[index1].sorts.isPrice!=0" :class="tabBars[index1].sorts.isPrice==1?'uni-icon-arrowup':'uni-icon-arrowdown'"></view>
													</view>
												</view>
											</view>
											<block v-for="(newsitems,index) in tab.data">
												<media-list :options="newsitems"></media-list>
											</block>
										</view>
										<!-- </view>
										</view> -->
									</view>
									<view v-if="!user.pid" class="uni-flex" style="justify-content: center;">
										<view class="tbsq" @tap="tbsq">未淘宝授权(一键授权)</view>
									</view>
									<view style="text-align: center;color: #666666;margin-top: 10px;">没有更多了</view>
								</scroll-view>
							</swiper-item>
						</swiper>
					</view>
				</view>

			</view>
		</view>
		<!-- #endif -->


	</view>
</template>

<!-- #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ -->
<script lang="wxs" module="QSGradientSwiperWXS">
	var gradientList_wxs = [];
	var circularGradient_wxs = [];
	var itemMoveDistance = 0;
	var char1 = "|";
	var char2 = ",";
	var swiperId = "#swiper";
	var swiperClass = ".swiper";
	var backgroundId = "#background";

	function gradientList_wxs_Change(n, o, ins) {
		var newArr = [];
		var data = n.split(char1);
		for (var i = 0; i < data.length; i++) {
			newArr.push(data[i].split(char2));
		}
		gradientList_wxs = newArr;

		var swiper = ins.selectComponent(swiperId);
		var dataset = swiper.getDataset();
		var swiperCurrent = dataset.swipercurrent;
		changeBackgroundColor(ins, gradientList_wxs[swiperCurrent][0]);
	}

	function circularGradient_wxs_Change(n, o, ins) {
		circularGradient_wxs = n.split(char2);
	}

	function itemMoveDistance_Change(n) {
		itemMoveDistance = parseFloat(n);
	}

	function transition(e, ins) {
		var DX = e.detail.dx;
		var swiper = ins.selectComponent(swiperId);
		var dataset = swiper.getDataset();
		var swiperCurrent = parseInt(dataset.swipercurrent);
		var isCircular = (('' + dataset.iscircular) === 'true');
		var gradientItem;
		var itemCurrent;
		var addC = Math.floor(Math.abs(DX) / itemMoveDistance);
		addC = addC - (Math.floor(addC / (gradientList_wxs.length)) * (gradientList_wxs.length));
		var addDistance = (addC * itemMoveDistance);
		swiperCurrent += addC;
		if (DX >= 0) {
			DX -= addDistance;
			itemCurrent = Math.round(DX);
			var abl = swiperCurrent == (gradientList_wxs.length - 1);
			if (abl && (abl || isCircular)) {
				// console.log('DX大于零， 选择circularGradient_wxs')
				gradientItem = circularGradient_wxs;
			} else {
				// console.log('DX大于零， 选择gradientList_wxs')
				gradientItem = gradientList_wxs[swiperCurrent] || gradientList_wxs[gradientList_wxs.length - 1];
			}
		} else {
			DX += addDistance;
			itemCurrent = Math.round(itemMoveDistance + DX);
			var bbl_s = swiperCurrent == 0;
			if (bbl_s && (bbl_s || isCircular)) {
				// console.log(' bbl_s DX小于零， 选择circularGradient_wxs, swiperCurrent:' + swiperCurrent)
				gradientItem = circularGradient_wxs;
			} else {
				if (swiperCurrent == (gradientList_wxs.length)) {
					// console.log(' bbl_e DX小于零， 选择circularGradient_wxs, swiperCurrent:' + swiperCurrent)
					gradientItem = circularGradient_wxs;
				} else {
					// console.log('DX小于零， 选择gradientList_wxs, swiperCurrent:' + swiperCurrent)
					gradientItem = gradientList_wxs[swiperCurrent - 1] || gradientList_wxs[0];
				}
			}
		}
		itemCurrent = itemCurrent > (gradientItem.length - 1) ? (gradientItem.length - 1) : itemCurrent < 0 ? 0 : itemCurrent;
		var color = gradientItem[itemCurrent];
		changeBackgroundColor(ins, color);
	}

	function animationfinish(e, ins) {
		ins.callMethod('animationfinish_wxs', e.detail);
		changeBackgroundColor(ins, gradientList_wxs[e.detail.current][0]);
	}

	function changeBackgroundColor(ins, color) {
		ins.callMethod('change1', color);
		var background = ins.selectComponent(backgroundId);
		var background1 = ins.selectComponent('#background1');
		background.setStyle({
			'background-color': color
		})
		background1.setStyle({
			'background-color': color
		})
	}

	module.exports = {
		transition: transition,
		animationfinish: animationfinish,
		circularGradient_wxs_Change: circularGradient_wxs_Change,
		gradientList_wxs_Change: gradientList_wxs_Change,
		itemMoveDistance_Change: itemMoveDistance_Change
	}
</script>
<!-- #endif -->
<script module="test" lang="wxs">
	// 起始y的坐标
	var startY = 0
	// y轴移动距离
	var top = 0
	// 防止重复下拉刷新
	var code = 0
	// 防止重复向逻辑层交互
	var mit = 0

	function touchstart(event, ins) {
		if (code == 0) {
			mit = 0
			ins.callMethod('refresh', 2);
			var touch = event.touches[0] || event.changedTouches[0]
			startY = touch.pageY
		}
	}

	function end(newValue, oldValue, ownerInstance, instance) {
		// 收回
		ownerInstance.selectComponent('#refresh-container').setStyle({
			'transform': 'translateY(0)',
			'transition': 'ease 0.3s'
		})
		// 停止转圈
		ownerInstance.selectComponent('#lot').removeClass('turn-load')
		// 复原
		code = 0
	}

	function touchend(event, ins) {
		console.log(top);
		if (code == 0) {
			// 这里根据自己业务处理,小于60则不作操作
			if (top < 60) {
				ins.selectComponent('#refresh-container').setStyle({
					'transform': 'translateY(0)',
					'transition': 'ease 0.3s'
				})
			} else {
				// 改变提示文字
				ins.callMethod('refresh', 1);
				// 防止重复下拉
				code = 1
				ins.selectComponent('#refresh-container').setStyle({
					// 成功刷新回弹的距离
					'transform': 'translateY(60px)',
					'transition': 'ease 0.3s'
				})
				// 可以替换旋转速率
				// ins.selectComponent('#lot').setStyle({
				// 	'transform': 'rotate(0)',
				// 	'transition': 'ease 3s'
				// })
				ins.selectComponent('#lot').addClass('turn-load')

			}
		}
		top = 0;
	}

	function touchmove(event, ins) {
		if (code == 0) {
			var touch = event.touches[0] || event.changedTouches[0]
			var pageY = touch.pageY
			var vew = ins.selectComponent('#refresh-container')
			var dataset = vew.getDataset();
			top = pageY - startY
			// 页面是否触底
			if (dataset.top == 0) {
				// 改变提示文字,且只会触发一次
				if (top > 60) {
					if (mit == 0) {
						ins.callMethod('refresh', 0);
					}
					mit = 1
				}
				vew.setStyle({
					'transform': 'translateY(' + (top) + 'px)'
				})
				ins.selectComponent('#lot').setStyle({
					'transform': 'rotate(' + (top * 6) + 'deg)'
				})
			} else {
				// 从长列表下拉上来 ,这里要实时更新起始位置
				startY = pageY
			}
		}
	}
	module.exports = {
		end: end,
		touchend: touchend,
		touchstart: touchstart,
		touchmove: touchmove
	}
</script>
<script>
	import {
		insert_lunbo,
		insert_goods_1,
		insert_goods_2,
		insert_goods_3,
		insert_tab_goods,
		get_lunbo,
		get_activity,
		get_goods_1,
		get_goods_2,
		get_goods_3,
		get_tab_goods,
		get_tb_topic_list
	} from '@/api/fp_page.js'
	import {
		getUserInfo
	} from '@/api/user.js'
	import {
		set_page
	} from '@/api/set_page.js'
	import uniSegmentedControl from '@/components/tab-control.vue';
	import orderList from '@/components/order-list.vue'
	import dividLine from '@/components/line.vue';
	import scrollIndex from '@/components/scroll-index.vue';
	import mediaList from '@/components/mediaList.vue'
	import goodList from '@/components/good-list.vue'
	import uniLoadMore from '@/components/uni-load-more.vue';
	import goTop from '@/components/go-top.vue';
	import uniIcon from '@/components/uni-icon.vue';
	import uniGrid from '@/components/uni-grid-first.vue';
	import sort from '@/components/sort.vue';
	import tabGoodList from '@/components/tab-good-list.vue';
	import productListRow from '@/components/product-list-row.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniDrawer from '@/components/uni-drawer.vue'
	import QSGradientSwiper from '@/components/QS-Gradient-Swiper/QS-Gradient-Swiper-vue.vue';
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


	import QSGradientSwiperItem from './components/QS-Gradient-Swiper-Item.vue';

	function checkNumber(theObj) {
		var reg = /^[0-9]+.?[0-9]*$/;
		if (reg.test(theObj)) {
			return true;
		}
		return false;
	}
	const {
		windowWidth
	} = uni.getSystemInfoSync();
	export default {
		onPageScroll(e) {
			if (e.scrollTop < 1) {
				this.scrollTop = 0
			} else {
				// 提高性能
				if (this.scrollTop != 1) {
					this.scrollTop = 1
				}
			}
		},
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
			uniPopup,
			uniDrawer,
			QSGradientSwiper,
			QSGradientSwiperItem
		},
		// components: {
		// 	QSGradientSwiperItem,
		// },
		props: {
			height: {
				type: [String, Number],
				default: 200
			},
			backgroundHeightScale: {
				type: [String, Number],
				default: 0.8
			},
			backgroundColorName: {
				type: String,
				default: 'backgroundColor'
			},
			borderBottomRadius: {
				type: [String, Number],
				default: 0
			},
			circular: {
				type: [String, Boolean],
				default: false
			},
			defCurrent: {
				type: [String, Number],
				default: 0
			},
			previousMargin: {
				type: String,
				default: '0px'
			},
			nextMargin: {
				type: String,
				default: '0px'
			},
			indicatorDots: {
				type: [String, Boolean],
				default: false
			},
			indicatorColor: {
				type: String,
				default: 'rgba(0, 0, 0, .3)'
			},
			indicatorActiveColor: {
				type: String,
				default: '#000000'
			},
			autoplay: {
				type: [String, Boolean],
				default: false
			},
			interval: {
				type: [String, Number],
				default: 5000
			},
			duration: {
				type: [String, Number],
				default: 500
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			if (plus.navigator.isImmersedStatusbar()) {
				console.log(plus.navigator.getStatusbarHeight());
				this.statusBarH = plus.navigator.getStatusbarHeight();
			}
			// #endif
			this.loadData();
			this.user = uni.getStorageSync("user");
			this.newsitems = this.randomfn();
			console.log(JSON.stringify(this.newsitems));
			//初始化每个商品的page
			for (var p = 0; p < this.tabBars.length; p++) {
				if (p < 1) {
					let tabPage = [1, 1, 1];
					this.pages.push(tabPage);
				}
				let initPage = 1;
				this.pages.push(initPage);
			}
			//全部频道初始化
			this.getCategory();
			let winH = uni.getSystemInfoSync().windowHeight;
			this.height = winH - winH * 0.2;
			// this.$refs.QSGradientSwiper1.setData(this.imgs)
			this.$nextTick(() => {
				setTimeout(() => {
					const refs = this.$refs.QSGradientSwiper;
					console.log(refs)
					console.log(refs)
					console.log(typeof refs)
					for (let i = 0; i < this.newsitems.length; i++) {
						console.log('newsitems 循环 :' + i)
						const ref = refs[i]
						if (ref) {
							// console.log('有ref')
							ref.setData(this.imgs);
						}
					}
				}, 300)
			})
		},
		data() {
			return {
				refreshText: "下拉刷新",
				propValue: true,
				set_page: {
					lunbo: 1,
					tab_grid: 1,
					active: 1,
					tbjx: 1
				},
				content: '',
				showRight: false,
				user: new Object(),
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [], //一级
				slist: [], //二级
				tlist: [], //三级
				tab_more_flag: false, //tab_more按钮状态
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				type: '', //菜单类型
				lunbo_location: false, //是否开启轮播跳转
				tabbars_more_item: '', //全部频道的选中
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
				activeColor: '#F9263E',
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
				firstitems: [],
				newsitems: [],
				loadingType: 2,
				loadingTitle: "没有更多了",
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
					childTabs: [{
							image: '/static/tab/tabbar01_01.png',
							text: '9.9元'
						},
						{
							image: '/static/tab/tabbar01_02.png',
							text: '19.9元'
						},
						{
							image: '/static/tab/tabbar01_03.png',
							text: '高佣金'
						},
						{
							image: '/static/tab/tabbar01_04.png',
							text: '秒杀榜'
						},
						{
							image: '/static/tab/tabbar01_05.png',
							text: '淘抢购'
						},
						{
							image: '/static/tab/tabbar01_06.png',
							text: '聚划算'
						},
						{
							image: '/static/tab/tabbar01_07.png',
							text: '美食街'
						},
						{
							image: '/static/tab/tabbar01_08.png',
							text: '生活购'
						}, {
							image: '/static/tab/tabbar01_09.png',
							text: '食品'
						},
						{
							image: '/static/tab/tabbar01_10.png',
							text: '高佣商品'
						}
					]
				}, {
					name: '母婴',
					id: 'my',
					addGoodsFlag: false,
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
					sorts: {
						isDefault: true,
						isTotal_sales: 0,
						isTk_rate: 0,
						isPrice: 0
					},
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
				changeTabFlag: true, //选项卡状态
				lunboIndex: 0,
				lunboBackground: '',
				statusBarH: 20, //状态栏高度
				imgs: [],

				list: [],
				gradientList: [],
				circularGradient: [],
				readyShow: false,
				swiperCurrent: 0,
				componentWidth: 0,
				itemMoveDistance: 0,
				onceAnimationfinish: false,
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				Ani: null,
				animationData: {},
				// #endif
				// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				gradientList_wxs: '',
				circularGradient_wxs: '',
				// #endif
			}
		},
		computed: {
			getHeight() {
				return Number(this.height);
			},
			isCircular() {
				return String(this.circular) === 'true';
			},
			getListLength() {
				return this.list.length;
			}
		},
		created() {
			// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			this.Ani = uni.createAnimation({
				duration: 0
			});
			// #endif
		},
		onPageScroll(e) {
			if (e.scrollTop < 1) {
				this.scrollTop = 0
			} else {
				// 提高性能
				if (this.scrollTop != 1) {
					this.scrollTop = 1
				}
			}
		},
		onPullDownRefresh() {
			this.newsitems = this.randomfn();
			uni.stopPullDownRefresh();
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if (e.index == 0) {
				uni.navigateTo({
					url: '/pages/user/board'
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
		onShow() {
			this.getUser();
			set_page.first_page().then(res => {
				console.log(res);
				let d = res.data.result;
				this.set_page.lunbo = d.lunbo;
				this.set_page.tab_grid = d.tab_grid;
				this.set_page.active = d.active;
				this.set_page.tbjx = d.tbjx;
			})
		},
		methods: {
			//点击头部按钮
			infoClick() {
				uni.navigateTo({
					url: '/pages/user/board'
				})
			},
			searchClick() {
				uni.navigateTo({
					url: '/pages/common/search',
					animationType: 'fade-in'
				})
			},
			change1(e) { //返回实时渐变的颜色
				console.log(e);
				this.lunboBackground = e;
			},
			change(e) { //返回切换后的轮播下标
				// this.lunboIndex = e;
				// this.lunboBackground = this.imgs[this.lunboIndex].backgroundColor;
				// console.log(this.lunboBackground.backgroundColor);
				// console.log(e);
			},
			show(e) {
				console.log("show", e);
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRight = true
					console.log(this.showRight);
				}
			},
			hide() {
				console.log("hide");
				this.showLeft = false
				this.showRight = false
			},
			closeDrawer(e) {
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRight = false
				}
			},
			//tab_more加载
			async loadData() {
				let list = await this.$api.json('cateList');
				list.forEach(item => {
					if (!item.pid) {
						this.flist.push(item); //pid为父级id, 没有pid或者pid=0是一级分类
						console.log(this.flist);
					} else if (!item.picture) {
						this.slist.push(item); //没有图的是2级分类
					} else {
						this.tlist.push(item); //3级分类
					}
				})
			},
			//一级分类点击
			tabtap(item) {
				if (!this.sizeCalcState) {
					this.calcSize();
				}

				this.currentId = item.id;
				let index = this.slist.findIndex(sitem => sitem.pid === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e) {
				if (!this.sizeCalcState) {
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item => item.top <= scrollTop).reverse();
				if (tabs.length > 0) {
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize() {
				let h = 0;
				this.slist.forEach(item => {
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			//tab_more
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
				console.log(categroy);
				this.tabbars_more_item = categroy.Name;
			},
			getCategory() {
				let tabBars = this.tabBars;
				for (var i = 1; i < tabBars.length; i++) {
					var subList = [];
					for (var j = 1; j < tabBars[i].childTabs.length; j++) {
						subList.push({
							"NAME": tabBars[i].childTabs[j].text,
							"LOGO": tabBars[i].childTabs[j].image
						})
					}
					this.categoryList.push({
						"NAME": tabBars[i].name,
						"subCategoryList": subList
					})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			},
			//展开菜单
			togglePopup(type) {
				if (type != '') {
					if (!this.tab_more_flag) {
						this.tab_more_flag = true;
					} else {
						this.tab_more_flag = false;
					}
				} else {
					this.tab_more_flag = false;
				}
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break

					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			tbsq() {
				const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
				bcPlugin.BCAuth(result => {
					this.tbsqFlag = true;
					//code == 0 ,msg:授权成功  ； code==-1  ,msg:报错信息
					var url = 'https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
						'http://39.108.215.49:8009/html/code.html&state=' +
						this.user.phone + '&view=wap'
					bcPlugin.BCGetCoupons(url, result => {
						console.log('授权成功!');
					});
				});
			},
			getUser() {
				let ret = getUserInfo(uni.getStorageSync("user").phone)
				console.log('用户信息', ret)
				ret.then(res => {
					console.log('用户信息', res)
					if (res.code == 100) {
						uni.showToast({
							title: "初始化用户信息失败",
							icon: 'none'
						})
						return
					} else {
						uni.setStorageSync("user", res.result);
						this.user = uni.getStorageSync("user");
						//初始化用户信息
						let data = res.result;
					}
				})
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
					// if (value == true) {
					// 	uni.switchTab({
					// 		url: '/pages/index/index'
					// 	});
					// } else {
					// 	uni.redirectTo({
					// 		url: '/pages/index/guide'
					// 	});
					// }
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
					// uni.redirectTo({
					// 	url: '/pages/index/guide'
					// });
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
			pthd(link) {
				uni.showLoading({
					title: '正在加载...'
				})
				plus.webview.create(link);
				setTimeout(() => {
					uni.hideLoading()
				}, 3000)
				// console.log(aid);
				// let relationId = uni.getStorageSync("user").pid;
				// let data = {
				// 	aid: aid,
				// 	relationId: relationId
				// };
				// pthd(data).then(res => {
				// 	console.log(res);
				// 	// this.pthdUrl=res.data.result.url;
				// 	const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
				// 	var url = res.data.result.url;
				// 	bcPlugin.BCGetCoupons(url, result => {
				// 		console.log(JSON.stringify(result));
				// 		uni.reLaunch({
				// 			url: '/pages/index/user'
				// 		})
				// 	});
				// })
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
								let data = res.content;
								for (let item in data) {
									insert_goods_1({
										tao_id: data[item].tao_id,
										pict_url: data[item].pict_url,
										title: data[item].title,
										size: data[item].size || '',
										quanhou_jiage: data[item].quanhou_jiage,
										tkfee3: data[item].tkfee3,
										volume: data[item].volume,
										coupon_info_money: data[item].coupon_info_money
									}).then(res1 => {
										console.log(res1);
									})
								}
							}
							console.log(res);
						});
						break;
					case '天猫超市':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								this.goodsTmcs = res.content;
								let data = res.content;
								for (let item in data) {
									insert_goods_2({
										tao_id: data[item].tao_id,
										pict_url: data[item].pict_url,
										title: data[item].title,
										size: data[item].size,
										quanhou_jiage: data[item].quanhou_jiage,
										tkfee3: data[item].tkfee3,
										volume: data[item].volume,
										coupon_info_money: data[item].coupon_info_money
									}).then(res1 => {
										console.log(res1);
									})
								}
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
								let data = res.content;
								for (let item in data) {
									insert_goods_3({
										tao_id: data[item].tao_id,
										pict_url: data[item].pict_url,
										title: data[item].title,
										size: data[item].size,
										quanhou_jiage: data[item].quanhou_jiage,
										tkfee3: data[item].tkfee3,
										volume: data[item].volume,
										coupon_info_money: data[item].coupon_info_money
									}).then(res1 => {
										console.log(res1);
									})
								}
							}
							console.log(res);
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
					let data = res;
					console.log(JSON.stringify(res));
					insert_tab_goods({
						num_iid: data.num_iid,
						title: data.title,
						pict_url: data.pict_url,
						reserve_price: data.reserve_price,
						zk_final_price: data.zk_final_price,
						commission_rate: data.commission_rate,
						volume: data.volume,
						youhuiquan: data.youhuiquan
					}).then(res1 => {
						console.log(res1);
					})
				});
			},
			lunboClick(link) {
				uni.showLoading({
					title: '正在加载...'
				})
				plus.webview.create(link);
				setTimeout(() => {
					uni.hideLoading()
				}, 3000)
				//this.lunbo_location = true;
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
					let lunboData = this.lunboImgs;
					for (let item in lunboData) {
						insert_lunbo({
							pic: lunboData[item].pic,
							get_url: lunboData[item].get_url
						}).then(res => {
							console.log(res);
						})
					}
				})
			},
			tabClick(item) {
				let that = this;
				//不是第一页的时候tabar结构不一样所以分不同逻辑
				let type = item.text;
				if (this.tabIndex != 0) {
					type = that.tabBars[that.tabIndex].childTabs[item.index].text;
				}
				if (that.tabBars[that.tabIndex].name == '女装') {
					type += '女';
				} else if (that.tabBars[that.tabIndex].name == '男装') {
					type += '男';
				}
				uni.navigateTo({
					url: `/pages/tabPage/tabGoods?type=${type}`
				})
			},
			tabClick_more(item) {
				let that = this;
				console.log(this.tabbars_more_item)
				//不是第一页的时候tabar结构不一样所以分不同逻辑
				let type = item.name;
				if (this.tabbars_more_item == '女装') {
					type += '女';
				} else if (this.tabbars_more_item == '男装') {
					type += '男';
				}
				uni.navigateTo({
					url: `/pages/tabPage/tabGoods?type=${type}`
				})
			},
			scroll(e) {
				// console.log(e);
				// try{
				// 	let selector = uni.createSelectorQuery().select('.tabList');
				// 	let tabListH = 200;
				// 	selector.fields({
				// 		size: true
				// 	}, data => {
				// 		// console.log(data, data.height);
				// 		tabListH = data.height;
				// 	}).exec();
				// 	if (e.detail.scrollTop >= tabListH) {
				// 		this.sortTabFixed = true;
				// 	} else if (e.detail.scrollTop < tabListH) {
				// 		this.sortTabFixed = false;
				// 	}
				// }catch(e){
				// 	//TODO handle the exception
				// }
			},
			touchmove(e, index) {
				//console.log(this.tabBars[index].addGoodsFlag);
				if (this.tabBars[index].addGoodsFlag) {
					return;
				}
				//第一页的商品另外加载
				console.log(index);
				if (index == 0) {
					console.log("翻页是否有数据：" + this.tabBars[index].addGoodsFlag);
					if (!uni.getStorageSync("nextPage" + index)) {
						console.log(this.pages[this.tabIndex][this.current]++);
						this.tabBars[index].addGoodsFlag = true;
						// console.log(this.pages[this.tabIndex][this.current]);
						// this.pages[this.tabIndex][this.current]++;
						this.nextPage(this.pages[index][this.current], this.tabBars[index].name, index).then(res => {
							console.log(res);
							uni.setStorageSync("nextPage" + index, res);
						})
					}
					return;
				}
				console.log(uni.getStorageSync("nextPage" + index));
				if (!uni.getStorageSync("nextPage" + index)) {
					console.log(this.tabBars[index].addGoodsFlag);
					this.tabBars[index].addGoodsFlag = true;
					console.log(this.pages[index], this.tabBars[index].name);
					this.pages[index]++;
					this.nextPage(this.pages[index], this.tabBars[index].name, index).then(res => {
						uni.setStorageSync("nextPage" + index, res);
						console.log(uni.getStorageSync("nextPage" + index));
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
						get_tab_goods({
							pageIndex: page
						}).then(res => {
							// console.log(JSON.stringify(res));
							//后期首页记录多个tab商品
							//uni.setStorageSync("nextPageTab" + this.current, res);
							// console.log(uni.getStorageSync("nextPageTab" + this.current, res));
							this.tabBars[index].addGoodsFlag = false;
							resolve(res.data.res);
						});
						return;
					}
					getGoodsList({
						page: this.pages[index],
						type: this.tabBars[index].name
					}).then(res => {
						console.log(res);
						if (res.result.length < 10) {
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
				// if (this.tabIndex == 0) {
				// 	list = this.tbjx;
				// } else {
				// 	list = this.newsitems[e].data;
				// }
				console.log(123);
				list = this.newsitems[e].data;
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
				console.log(uni.getStorageSync("nextPage" + e));
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
					if (this.tabIndex == 0) {
						// this.tbjx = this.tbjx.concat(uni.getStorageSync("nextPage" + e));
						this.newsitems[e].tbjx = this.newsitems[e].tbjx.concat(uni.getStorageSync("nextPage" + e));
						console.log(this.newsitems[e].tbjx);
					} else this.newsitems[e].data = this.newsitems[e].data.concat(uni.getStorageSync("nextPage" + e));
					uni.removeStorageSync("nextPage" + e);
				}

			},
			addData(e) {
				console.log(e);
				this.newsitems[e].data = uni.getStorageSync("nextPage" + e);
			},
			async changeTab(e) {
				console.log(1111)
				if (!this.changeTabFlag) {
					return;
				}
				this.changeTabFlag = false; //切换tab之后不允许频繁切换
				setTimeout(() => {
					this.changeTabFlag = true;
				}, 300)
				let index = e.target.current;
				this.tabIndex == index;
				console.log(this.tabIndex);
				this.sortTabFixed = false; //初始化排序列表的位置
				//this.newsitems[index].data = uni.getStorageSync("goodsList")[index].data;
				// uni.showLoading({
				// 	title:this.loadingTitle,
				// 	mask:this.mask
				// })
				//未加载出的tab项重新获取
				if (this.newsitems[index].data.length == 0 && index != 0) {
					console.log("data undefined");
					getGoodsList({
						page: 0,
						type: this.tabBars[index].name
					}).then(res => {
						console.log(res.result);
						this.newsitems[index].data = res.result;
						// console.log(this.newsitems[index]);
					})
				}
				// console.log(JSON.stringify(this.newsitems[index].data));
				console.log(this.newsitems[index].data.length);
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
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					try {
						uni.createSelectorQuery().select("#" + id).fields({
							size: true,
							scrollOffset: true
						}, (data) => {
							res(data);
							console.log(data);
						}).exec();
					} catch (e) {
						//TODO handle the exception
					}
				})
			},
			async tapTab(e) { //点击tab-bar
				this.sortTabFixed = false; //初始化排序列表的位置
				let tabIndex = e.target.dataset.current;
				this.tabIndex == tabIndex;
				console.log(e);
				console.log(this.newsitems[tabIndex]);
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
						head: [],
						data: [],
						lunboImgs: [],
						activity: [],
						goodsJpbk: [],
						goodsTmcs: [],
						goodsTmgj: [],
						tbjx: []
					};
					if (i < 1) {
						aryItem.head = this.tabBars[i].childTabs;
						// if(this.set_page.active==1){
						get_tb_topic_list({
							cid: this.user.pid
						}).then(res => {
							console.log(JSON.parse(res.data.result).data);
							aryItem.activity = JSON.parse(res.data.result).data;
							// aryItem.lunboImgs = JSON.parse(res.data.result).data.splice(4);
						})
						set_page.get_lunbo().then(res => {
							console.log(res);
							aryItem.lunboImgs = res.data.result;
							for (var i = 0; i < aryItem.lunboImgs.length; i++) {
								let img = {
									path: aryItem.lunboImgs[i].pic,
									backgroundColor: aryItem.lunboImgs[i].background
								}
								this.imgs.push(img);
							}
							console.log(this.imgs);
						})
						// }
						get_tab_goods().then(res => {
							console.log(JSON.stringify(res.data.res));
							aryItem.tbjx = res.data.res;
						});
						ary.push(aryItem);
					} else {
						aryItem.head = this.tabBars[i].childTabs;
						getGoodsList({
							page: this.page,
							type: this.tabBars[i].name
						}).then(res => {
							// console.log(JSON.stringify(res.result));
							if (!res.result) {
								if (i == 0) {
									i = 0;
								} else {
									i--;
								}
							}
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
					// this.isDefault = true;
					// this.isTotal_sales = 0;
					// this.isTk_rate = 0;
					// this.isPrice = 0;

					this.tabBars[this.tabIndex].sorts.isDefault = true;
					this.tabBars[this.tabIndex].sorts.isTotal_sales = 0;
					this.tabBars[this.tabIndex].sorts.isTk_rate = 0;
					this.tabBars[this.tabIndex].sorts.isPrice = 0;
					this._getGoodsList({
						type: this.tabBars[this.tabIndex].name,
						sorts: sortType
					});
				} else if (sortType == 'total_sales') {
					this.tabBars[this.tabIndex].sorts.isDefault = false;
					this.tabBars[this.tabIndex].sorts.isTk_rate = 0;
					this.tabBars[this.tabIndex].sorts.isPrice = 0;
					if (this.tabBars[this.tabIndex].sorts.isTotal_sales == 0 || this.tabBars[this.tabIndex].sorts.isTotal_sales == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isTotal_sales = 2;
					} else if (this.tabBars[this.tabIndex].sorts.isTotal_sales == 2) {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isTotal_sales = 1;
					}
				} else if (sortType == 'tk_rate') {
					this.tabBars[this.tabIndex].sorts.isDefault = false;
					this.tabBars[this.tabIndex].sorts.isTotal_sales = 0;
					this.tabBars[this.tabIndex].sorts.isPrice = 0;
					if (this.tabBars[this.tabIndex].sorts.isTk_rate == 0 || this.tabBars[this.tabIndex].sorts.isTk_rate == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isTk_rate = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isTk_rate = 1;
					}
				} else if (sortType == 'price') {
					this.tabBars[this.tabIndex].sorts.isDefault = false;
					this.tabBars[this.tabIndex].sorts.isTotal_sales = 0;
					this.tabBars[this.tabIndex].sorts.isTk_rate = 0;
					if (this.tabBars[this.tabIndex].sorts.isPrice == 0 || this.tabBars[this.tabIndex].sorts.isPrice == 1) {
						this._getGoodsList({
							sorts: sortType + '_des',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isPrice = 2;
					} else {
						this._getGoodsList({
							sorts: sortType + '_asc',
							type: this.tabBars[this.tabIndex].name
						});
						this.tabBars[this.tabIndex].sorts.isPrice = 1;
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
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			refresh(i) {
				if (i == 0) {
					this.refreshText = "松开刷新"
				} else if (i == 1) {
					// 这里写刷新业务
					this.refreshText = "正在刷新"
					setTimeout(() => {
						// 收回下拉刷新
						this.propValue = !this.propValue
					}, 2000)
				} else if (i == 2) {
					this.refreshText = "下拉刷新"
				}
			},
			getItemMoveDistance() {
				const previousMargin = this.formatItemMoveDistance(this.previousMargin);
				const nextMargin = this.formatItemMoveDistance(this.nextMargin);

				if (previousMargin !== false && nextMargin !== false) {
					this.itemMoveDistance = (this.componentWidth - Number(previousMargin) - Number(nextMargin));
				} else {
					console.log('previousMargin或nextMargin格式错误， 请输入正确的数字， 单位为px或rpx');
				}
			},
			formatItemMoveDistance(data) {
				const str = String(data);
				const arr_rpx = str.split('rpx');
				let num;
				let isRpx = false;
				if (arr_rpx.length > 1) {
					num = arr_rpx[0];
					isRpx = true;
				} else {
					const arr_px = str.split('px');
					if (arr_px.length > 1) {
						num = arr_px[0];
					} else {
						num = str;
					}
				}

				if (checkNumber(num)) {
					num = Number(num);
					if (isRpx) {
						return uni.upx2px(num);
					}
					return num;
				} else {
					return false;
				}
			},
			getComponentWidth() {
				return new Promise((rs, rj) => {
					try {
						let view = uni.createSelectorQuery().in(this);
						view.select('#QSGradientSwiper').fields({
							size: true
						})
						view.exec(res => {
							try {
								this.componentWidth = res[0].width;
								rs();
							} catch (e) {
								//TODO handle the exception
								this.componentWidth = windowWidth;
								rs();
							}
						});
					} catch (e) {
						//TODO handle the exception
						this.componentWidth = windowWidth;
						rs();
					}
				})
			},
			async setData(data) {
				await this.getComponentWidth();
				this.getItemMoveDistance();
				this.readyShow = false;
				setTimeout(() => {
					this.list = data;
					this.countGradientColor();
					setTimeout(() => {
						this.readyShow = true;
						setTimeout(() => {
							this.init(this.defCurrent);
						})
					}, 100)
				}, 100)
			},
			init(current) {
				this.swiperCurrent = current;
				this.defTransition();
			},
			countGradientColor() {
				const list_copy = this.list;
				const gradientList = [];
				for (let i = 0; i < list_copy.length; i++) {
					if (list_copy[i + 1]) {
						gradientList.push(gradient(list_copy[i][this.backgroundColorName], list_copy[i + 1][this.backgroundColorName], (
							this.itemMoveDistance + 1)));
					} else {
						gradientList.push([list_copy[i][this.backgroundColorName]]);
					}
				}
				this.gradientList = gradientList;
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				this.circularGradient = gradient(list_copy[list_copy.length - 1][this.backgroundColorName], list_copy[0][this.backgroundColorName],
					(this.itemMoveDistance + 1));
				// #endif
				// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				let gradientList_wxs = gradientList.map(item => item.join(','));
				gradientList_wxs = gradientList_wxs.join('|');
				this.gradientList_wxs = gradientList_wxs;
				this.circularGradient_wxs = gradient(list_copy[list_copy.length - 1][this.backgroundColorName], list_copy[0][this.backgroundColorName],
					(this.itemMoveDistance + 1)).join(',');
				// #endif
			},
			change1(e) {
				this.$emit('change1', e)
			},
			animationfinish_wxs(detail) {
				console.log(detail);
				if (this.swiperCurrent != detail.current) {
					this.$emit('change', detail.current)
				}
				this.swiperCurrent = Number(detail.current);
				if (this.isCircular && !this.onceAnimationfinish) {
					this.onceAnimationfinish = true;
				}
			},
			swiperAction(e) {
				switch (e.type) {
					case 'transition':
						if (this.isCircular && !this.onceAnimationfinish) return;
						const DX = e.detail.dx;
						let swiperCurrent = this.swiperCurrent;
						let gradientList = this.gradientList;
						let gradientItem;
						let itemCurrent;
						if (DX >= 0) {
							if (swiperCurrent === (this.list.length - 1) && this.isCircular) {
								gradientItem = this.circularGradient;
							} else {
								gradientItem = gradientList[swiperCurrent];
							}
							itemCurrent = Math.round(DX);
						} else {
							if (swiperCurrent === 0 && this.isCircular) {
								gradientItem = this.circularGradient;
							} else {
								gradientItem = gradientList[swiperCurrent - 1];
							}
							itemCurrent = Math.round(this.itemMoveDistance + DX);
						}
						const color = gradientItem[itemCurrent];
						if (color) this.changeBackgroundColor(color);
						break;
					case 'animationfinish':
						this.swiperCurrent = e.detail.current;
						if (this.isCircular && !this.onceAnimationfinish) {
							this.onceAnimationfinish = true;
						}
						this.defTransition();
						break;
					default:
						break;
				}
			},
			defTransition() {
				this.swiperAction({
					type: 'transition',
					detail: {
						dx: 0
					}
				});
			},
			changeBackgroundColor(backgroundColor) {
				// console.log('设置了颜色:' + backgroundColor);
				// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
				this.Ani.backgroundColor(backgroundColor).step();
				this.animationData = this.Ani.export();
				// #endif
			}
		}
	}

	function rgbToHex(r, g, b) {
		var hex = ((r << 16) | (g << 8) | b).toString(16);
		return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
	}

	// hex to rgb
	function hexToRgb(hex) {
		var rgb = [];
		for (var i = 1; i < 7; i += 2) {
			rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
		}
		return rgb;
	}

	// 计算渐变过渡色
	function gradient(startColor, endColor, step) {
		// 将 hex 转换为rgb
		var sColor = hexToRgb(startColor),
			eColor = hexToRgb(endColor);

		// 计算R\G\B每一步的差值
		var rStep = (eColor[0] - sColor[0]) / step,
			gStep = (eColor[1] - sColor[1]) / step,
			bStep = (eColor[2] - sColor[2]) / step;

		var gradientColorArr = [];
		for (var i = 0; i < step; i++) {
			// 计算每一步的hex值
			gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i +
				sColor[2])));
		}
		return gradientColorArr;
	}
</script>

<style lang="less" scoped>
	// popup样式
	.text {
		border: 1px solid orange;
		padding: 10upx;
		background-color: #fff3e2;
	}

	.content {
		width: 80%;
		margin: auto;
		padding: 10upx 0;
		white-space: normal;
		background-color: white;
		border-radius: 20upx;
	}

	.title {
		text-align: center;
		margin: 20upx 0;
	}

	.content .background {
		background-color: #ccc;
		margin: 10upx 10upx;
		padding: 10upx 10upx;
	}

	.line {
		height: 160upx;
		width: 2upx;
		margin: auto;
		background-color: #333;
		position: absolute;
		left: 49.9%;
		top: -156upx;
		margin: auto;
		z-index: -1;
	}

	.uni-image-close {
		text-align: center;
		position: relative;
		top: 160upx;
	}

	// ----
	.uni-swiper-wrapper {
		overflow: auto;
	}

	.lunbo {
		box-sizing: border-box;
		padding: 20upx;
	}

	.background {
		height: 15%;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.background image {
		width: 100%;
	}

	//排序图标
	.on {
		color: #AA7D20;
		font-weight: bold;
	}

	.jgicon>view {
		color: #666;
	}

	//tab_more
	.f-item.active:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		height: 18px;
		width: 4px;
		background-color: #fa436a;
		border-radius: 0 4px 4px 0;
		opacity: .8;
	}

	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
		position: absolute;
		top: 200upx;
		z-index: 9;
	}

	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}

	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		position: relative;

		&.active {
			background: #f8f8f8;

			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside {
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}

	.s-item {
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
	}

	.t-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;

		&:after {
			content: '';
			flex: 99;
			height: 0;
		}
	}

	.t-item {
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;

		image {
			width: 140upx;
			height: 140upx;
		}
	}

	//-------

	.f-item.active:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		height: 18px;
		width: 4px;
		background-color: #fa436a;
		border-radius: 0 4px 4px 0;
		opacity: .8;
	}

	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
		width: 100%;
	}

	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}

	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		position: relative;

		&.active {
			background: #f8f8f8;

			&:before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 8upx;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside {
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
	}

	.s-item {
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
	}

	.t-list {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;

		&:after {
			content: '';
			flex: 99;
			height: 0;
		}
	}

	.t-item {
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 176upx;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;

		image {
			width: 140upx;
			height: 140upx;
		}
	}

	//--------------------
	.tabbar {
		position: absolute;
		width: 100%;
		top: 10%;
	}

	.tab-grid {
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.grid-item {
		width: 18%;
		height: 136upx;
		align-items: center;
		justify-content: center;
	}

	.grid-item image {
		width: 100%;
		height: 100%;
	}

	.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
	}

	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #E0E0E0;
		border-bottom: solid 1px #E0E0E0;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		width: 70%;
	}

	.nav-right-item {
		width: 28%;
		height: 220upx;
		float: left;
		text-align: center;
		padding: 11upx;
		font-size: 28upx;
	}

	.nav-right-item image {
		width: 100upx;
		height: 100upx;
	}

	.active {
		color: #007AFF;
	}

	.center-box {
		width: 500upx;
		height: 500upx;
	}

	.tbsq {
		position: fixed;
		width: 80%;
		bottom: 180upx;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border-radius: 20upx;
		padding: 20upx;
	}

	.sign {
		width: 50%;
		margin: auto;
		height: 4upx;
		background-color: #fff;
	}

	.uni-tab-bar {
		position: relative;
		overflow: auto;
	}

	.uni-swiper-tab {
		//background-color: #333;
		height: auto;
		line-height: 0;
		padding-right: 30upx;
		box-sizing: border-box;
		position: absolute;
		z-index: 9;
		border-bottom: none
	}

	.tab-more {
		z-index: 9;
		position: absolute;
		right: 0;
		color: white;
		font-weight: bold;
		transform: rotate(90deg);
		width: 1rem;
		height: 1.5rem;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.hide-more {
		transform: rotate(-90deg);
		height: 1.5rem;
		width: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
	}

	.swiper-tab-list {
		color: white;
	}

	// #sy{
	// 	color: white;s
	// }
	.uni-tab-bar .active {
		animation: none;
	}

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

		.search-container input {
			border-radius: 20upx;
			background-color: white;
			width: 90%;
			height: 60upx;
		}

		.box_f {
			position: fixed;
			z-index: 9;
			width: 100%;
			height: 209rpx;
		}

		.box {
			width: 100%;
			height: 208rpx;
		}

		.search-container {
			position: absolute;
			padding: 20upx 20upx;
			z-index: 9;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			box-sizing: border-box;
		}

		.swiper-box {
			position: relative;
			border-radius: 10upx;

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

	.uni-scroll-view {
		white-space: nowrap !important;
	}


	.QSGradientSwiper {
		position: relative;
	}

	#background1 {
		position: fixed;
		width: 100%;
		top: -24.5%;
		/* #ifdef APP-PLUS */
		top: -250rpx;
		/* #endif */
		z-index: 99;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
		position: relative;
	}
</style>
