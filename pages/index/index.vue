<template>
	<view class="index-content">
		<!-- <view class="search-container"></view> -->
		<!-- <view class="background">
			<image src="../../static/head.png" mode=""></image>
		</view> -->
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
			<!-- <view class="example-body">
				<view class="word-btn draw-cotrol-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="show('right')"><text class="word-btn-white">显示Drawer</text></view>
				<uni-drawer :visible="showRight" mode="right" @close="closeDrawer('right')">
					<view class="close">
						<view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="hide"><text class="word-btn-white">关闭Drawer</text></view>
					</view>
				</uni-drawer>
			</view> -->
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
			<!-- <QSGradientSwiper height="300" circular ref="QSGradientSwiper"></QSGradientSwiper> -->
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
				<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
					<scroll-view class="list" scroll-y @scroll="scroll" @scrolltolower="loadMore(index1)" @touchstart="touchmove($event,index1)">
						<view>
							<view v-if="tab.lunboImgs.length>0">
								<!-- <swiper class="lunbo" indicator-dots="true" v-if="set_page.lunbo==1">
										<swiper-item v-for="(img, key) in tab.lunboImgs">
											<image @tap="lunboClick(img.activityLink)" :src="img.materialLink" style="margin: auto;display: flex;height: 100%;width: 100%;" />
										</swiper-item>
									</swiper> -->
								<QSGradientSwiper height="300" circular ref="QSGradientSwiper"></QSGradientSwiper>
								<view class="tab-grid uni-flex uni-row" v-if="set_page.tab_grid==1">
									<view class="grid-item uni-flex uni-column" @click="tabClick(item)" style="" v-for="(item,index) in tab.head">
										<image :src="item.image"></image>
										<text style="text-align: center;">{{item.text}}</text>
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
						</view>
						<view v-if="!user.pid" class="uni-flex" style="justify-content: center;">
							<view class="tbsq" @tap="tbsq">未淘宝授权(一键授权)</view>
						</view>
						<view style="text-align: center;color: #666666;margin-top: 10px;">没有更多了</view>
						<!-- #ifdef APP-PLUS -->
						<view class="stone" style="height: 180upx;width: 100%;background-color: transparent;"></view>
						<!-- #endif-->
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

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
	import uniPopup from '@/components/uni-popup-tab.vue'
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
			uniPopup,
			uniDrawer,
			QSGradientSwiper
		},
		data() {
			return {
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
							text: '食品'
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
				imgs: [{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=791a660d9c2397ddd679980c6983b216/591f9758d109b3de80a0bb82c1bf6c81810a4c89.jpg',
						backgroundColor: '#b36d61'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=e8b1d9c798cad1c8d0bbfc2f4f3c67c4/ab5e4efbfbedab64dbb08428fa36afc37b311eed.jpg',
						backgroundColor: '#e0eee8'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=a06847cac5fcc3ceb4c0c93ba244d6b7/85d3bc014a90f60394f557af3412b31bb151ed67.jpg',
						backgroundColor: '#221620'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=3792b3922da446237ecaa56aa8237246/c4be73094b36acaf746d5f1471d98d1000e99c1e.jpg',
						backgroundColor: '#e3e7f2'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=d97763e5f5dcd100cd9cf829428a47be/bc48eec4b74543a96096332413178a82b801141e.jpg',
						backgroundColor: '#79b3db'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=f480662e3cadcbef01347e0e9cae2e0e/8f5b1cd8bc3eb13517d8e851ab1ea8d3fc1f4489.jpg',
						backgroundColor: '#927469'
					},
					{
						path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=b5dea914cefdfc03e578e3b0e43e87a9/45c1f303738da9774430d9c1bd51f8198718e38a.jpg',
						backgroundColor: '#c4c8af'
					}
				]
			}
		},
		onReady() {

		},
		onLoad(option) {
			//初始化淘宝精选数据
			// insert_tab_goods();
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

			this.$nextTick(() => {
				setTimeout(() => {
					for(let i = 0; i < this.newsitems.length; i++) {
						console.log('newsitems 循环 :' + i)
						const ref = this.$refs.QSGradientSwiper;
						if(ref) {
							console.log('有ref')
							ref.setData(this.imgs);
						}
					}
				}, 0)
			})
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
							aryItem.lunboImgs = JSON.parse(res.data.result).data.splice(4);
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
			}
		},
	}
</script>

<style lang="less" scoped>
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
		top: 150upx;
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
		top: 100upx;
		width: 100%;
	}

	.tab-grid {
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.grid-item {
		width: 18%;
		height: 160upx;
		align-items: center;
		justify-content: center;
	}

	.grid-item image {
		width: 70%;
		height: 56%;
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
		top: -2upx;
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
		.search-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f8f8f8;
			width: calc(100% - 40upx) 100%;
			line-height: 30upx;
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
			// width: calc(100% - 20upx);
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

	.uni-scroll-view {
		white-space: nowrap !important;
	}
</style>
