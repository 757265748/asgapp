<template>
	<view>
		<view class="VerticalBox" :style="{height:currentH-statusBarH+'px'}">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in tabBars" :key="index" @tap="TabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style=""
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(tab,index) in tabBars" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green"></text>{{tab.name}}
						</view>
					</view>
					<view class="list menu-avatar uni-flex uni-row bg-white">
						<view class="item uni-flex uni-column" v-for="(item,index) in tab.childTabs" @tap="tabClick_more(item)">
							<view class="cu-avatar round lg" :style="'background-image:url('+item.image+');'"></view>
							<view class="content">
								<view class="text-grey">{{item.text}}</view>
							</view>
						</view>
					</view>
				</view>
				<view style="height: 1000rpx;"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentH:uni.getSystemInfoSync().screenHeight,
				statusBarH:50,
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
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
						image: '/static/tab/v_1/muying/1.png',
						text: '孕产用品'
					}, {
						image: '/static/tab/v_1/muying/2.png',
						text: '尿不湿'
					}, {
						image: '/static/tab/v_1/muying/3.png',
						text: '玩具图书'
					}, {
						image: '/static/tab/v_1/muying/4.png',
						text: '婴童用品'
					}, {
						image: '/static/tab/v_1/muying/5.png',
						text: '奶粉辅食'
					}, {
						image: '/static/tab/v_1/muying/6.png',
						text: '奶瓶奶嘴'
					}, {
						image: '/static/tab/v_1/muying/7.png',
						text: '婴童床品'
					}, {
						image: '/static/tab/v_1/muying/8.png',
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
						image: '/static/tab/v_1/meishi/1.png',
						text: '休闲食品'
					}, {
						image: '/static/tab/v_1/meishi/2.png',
						text: '坚果蜜饯'
					}, {
						image: '/static/tab/v_1/meishi/3.png',
						text: '饼干糕点'
					}, {
						image: '/static/tab/v_1/meishi/4.png',
						text: '茶酒冲饮'
					}, {
						image: '/static/tab/v_1/meishi/5.png',
						text: '蔬菜熟食/蛋类'
					}, {
						image: '/static/tab/v_1/meishi/6.png',
						text: '粮油调料'
					}, {
						image: '/static/tab/v_1/meishi/7.png',
						text: '保健滋补'
					}, {
						image: '/static/tab/v_1/meishi/8.png',
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
						image: '/static/tab/v_1/nvzhuang/1.png',
						text: '裙子'
					}, {
						image: '/static/tab/v_1/nvzhuang/2.png',
						text: 'T恤'
					}, {
						image: '/static/tab/v_1/nvzhuang/3.png',
						text: '衬衫'
					}, {
						image: '/static/tab/v_1/nvzhuang/4.png',
						text: '裤子'
					}, {
						image: '/static/tab/v_1/nvzhuang/5.png',
						text: '外套'
					}, {
						image: '/static/tab/v_1/nvzhuang/6.png',
						text: '背心吊带'
					}, {
						image: '/static/tab/v_1/nvzhuang/7.png',
						text: '卫衣'
					}, {
						image: '/static/tab/v_1/nvzhuang/8.png',
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
						image: '/static/tab/v_1/meizhuang/1.png',
						text: '卸妆洁面'
					}, {
						image: '/static/tab/v_1/meizhuang/2.png',
						text: '面膜'
					}, {
						image: '/static/tab/v_1/meizhuang/3.png',
						text: '底妆'
					}, {
						image: '/static/tab/v_1/meizhuang/4.png',
						text: '唇妆香水'
					}, {
						image: '/static/tab/v_1/meizhuang/5.png',
						text: '洗护用品'
					}, {
						image: '/static/tab/v_1/meizhuang/6.png',
						text: '口腔护理'
					}, {
						image: '/static/tab/v_1/meizhuang/7.png',
						text: '美发护发'
					}, {
						image: '/static/tab/v_1/meizhuang/8.png',
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
						image: '/static/tab/v_1/neiyi/1.png',
						text: '内裤'
					}, {
						image: '/static/tab/v_1/neiyi/2.png',
						text: '文胸'
					}, {
						image: '/static/tab/v_1/neiyi/3.png',
						text: '文胸套装'
					}, {
						image: '/static/tab/v_1/neiyi/4.png',
						text: '保暖内衣'
					}, {
						image: '/static/tab/v_1/neiyi/5.png',
						text: '袜子'
					}, {
						image: '/static/tab/v_1/neiyi/6.png',
						text: '睡衣/家具服'
					}, {
						image: '/static/tab/v_1/neiyi/7.png',
						text: '朔身衣'
					}, {
						image: '/static/tab/v_1/neiyi/8.png',
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
						image: '/static/tab/v_1/baihuo/1.png',
						text: '清洁用品'
					}, {
						image: '/static/tab/v_1/baihuo/2.png',
						text: '床上用品'
					}, {
						image: '/static/tab/v_1/baihuo/3.png',
						text: '家具饰品'
					}, {
						image: '/static/tab/v_1/baihuo/4.png',
						text: '餐厨用具'
					}, {
						image: '/static/tab/v_1/baihuo/5.png',
						text: '收纳储物'
					}, {
						image: '/static/tab/v_1/baihuo/6.png',
						text: '绿植花卉'
					}, {
						image: '/static/tab/v_1/baihuo/7.png',
						text: '家具日用'
					}, {
						image: '/static/tab/v_1/baihuo/8.png',
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
						image: '/static/tab/v_1/xiebao/1.png',
						text: '女鞋'
					}, {
						image: '/static/tab/v_1/xiebao/2.png',
						text: '男鞋'
					}, {
						image: '/static/tab/v_1/xiebao/3.png',
						text: '女包/男包'
					}, {
						image: '/static/tab/v_1/xiebao/4.png',
						text: '箱包配件'
					}, {
						image: '/static/tab/v_1/xiebao/5.png',
						text: '穿戴用品'
					}, {
						image: '/static/tab/v_1/xiebao/6.png',
						text: '手表'
					}, {
						image: '/static/tab/v_1/xiebao/7.png',
						text: '潮流饰品'
					}, {
						image: '/static/tab/v_1/xiebao/8.png',
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
						image: '/static/tab/v_1/jiadian/1.png',
						text: '电子产品/数码'
					}, {
						image: '/static/tab/v_1/jiadian/2.png',
						text: '手机壳/手机膜'
					}, {
						image: '/static/tab/v_1/jiadian/3.png',
						text: '智能设备'
					}, {
						image: '/static/tab/v_1/jiadian/4.png',
						text: '数码配件'
					}, {
						image: '/static/tab/v_1/jiadian/5.png',
						text: '影音电器'
					}, {
						image: '/static/tab/v_1/jiadian/6.png',
						text: '生活电器'
					}, {
						image: '/static/tab/v_1/jiadian/7.png',
						text: '厨房电器'
					}, {
						image: '/static/tab/v_1/jiadian/8.png',
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
						image: '/static/tab/v_1/nanzhuang/1.png',
						text: 'Polo衫'
					}, {
						image: '/static/tab/v_1/nanzhuang/2.png',
						text: 'T恤'
					}, {
						image: '/static/tab/v_1/nanzhuang/3.png',
						text: '衬衫'
					}, {
						image: '/static/tab/v_1/nanzhuang/4.png',
						text: '卫衣'
					}, {
						image: '/static/tab/v_1/nanzhuang/5.png',
						text: '短裤'
					}, {
						image: '/static/tab/v_1/nanzhuang/6.png',
						text: '牛仔裤'
					}, {
						image: '/static/tab/v_1/nanzhuang/7.png',
						text: '休闲裤'
					}, {
						image: '/static/tab/v_1/nanzhuang/8.png',
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
						image: '/static/tab/v_1/yundong/1.png',
						text: '瑜伽'
					}, {
						image: '/static/tab/v_1/yundong/2.png',
						text: '游泳'
					}, {
						image: '/static/tab/v_1/yundong/3.png',
						text: '球类运动'
					}, {
						image: '/static/tab/v_1/yundong/4.png',
						text: '运动鞋'
					}, {
						image: '/static/tab/v_1/yundong/5.png',
						text: '运动服装'
					}, {
						image: '/static/tab/v_1/yundong/6.png',
						text: '运动包/配件'
					}, {
						image: '/static/tab/v_1/yundong/7.png',
						text: '骑行装备'
					}, {
						image: '/static/tab/v_1/yundong/8.png',
						text: '户外/登山'
					}]
				}],
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
		},
		created() {
			// #ifdef APP-PLUS
			if (plus.navigator.isImmersedStatusbar()) {
				console.log(plus.navigator.getStatusbarHeight());
				this.statusBarH = plus.navigator.getStatusbarHeight();
			}
			// #endif
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			tabClick_more(item) {
				let that = this;
				console.log(this.tabbars_more_item)
				//不是第一页的时候tabar结构不一样所以分不同逻辑
				let type = item.text;
				if (this.tabbars_more_item == '女装') {
					type += '女';
				} else if (this.tabbars_more_item == '男装') {
					type += '男';
				}
				uni.navigateTo({
					url: `/pages/tabPage/tabGoods?type=${type}`
				})
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
							console.log(tabHeight);
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style>
	.text-grey{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 140upx;
		text-align: center;
	}
	.list{
		flex-wrap: wrap;
		padding-top: 10upx;
	}
	.item{
		width: 33.3%;
		align-items: center;
		padding: 5upx;
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		left: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
		overflow: hidden;
	}
	.cu-list{
	}
	.cu-list .cu-item{
	}
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
