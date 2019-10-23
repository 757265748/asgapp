<template>
	<view class="content">
		<image class="logo" src="../../../static/logo.png"></image>

		<view>
			<text class="title">{{ title }}</text>
		</view>
		<view class="uni-tab-bar uni-swiper-tab">
			<scroll-view id="tab-bar" class="_isfixed " scroll-x :scroll-left="scrollLeft">
				<view
					v-for="(tab, index) in tabBars"
					:key="tab.id"
					:class="['swiper-tab-list', tabIndex == index ? 'active' : '']"
					:id="tab.id"
					:data-current="index"
					@tap="tapTab"
				>
					{{ tab.name }}
				</view>
			</scroll-view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item, index) in btnTitles" :key="index">
				<button class="uni-list-cell-navigate uni-navigate-right" @click="btnclick(index)">{{ item }}</button>
			</view>
		</view>
		<text>{{ result }}</text>
		<text>{{ logintext }}</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabBars: [
				{
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
				}
			],
			title: '阿里百川UniApp插件',
			btnTitles: ['百川初始化', '授权并登录', '用户是否已登录', '退出登录', '跳转购物车', '跳转到我的订单', '商品详情'],
			result: '',
			logintext: ''
		};
	},
	onLoad() {
		uni.request({
			url: 'http://172.18.189.46:8009/GetRelationIdWebService.asmx',
			success: res => {
				console.log(res);
			}
		});
	},
	methods: {
		btnclick: function(e) {
			const bcPlugin = uni.requireNativePlugin('dahui-baichuan');
			switch (e) {
				case 0:
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCSDKInitWithAppkey('appkey', result => {
							uni.showModal({
								title: '百川初始化',
								content: 'code:' + result['code'] + '\nmessage:' + result['message']
							});
						});
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 1:
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCAuth(result => {
							uni.showModal({
								title: '授权登录',
								content: 'code:' + result['code'] + '\nmessage:' + result['message']
							});
						});
					} else {
						bcPlugin.login(result => {
							if (result.type == 'success') {
								this.logintext = JSON.stringify(result);
								uni.showToast({
									title: '授权成功'
								});
							} else {
								//授权失败，包括用户取消登录
								uni.showToast({
									title: '授权失败'
								});
							}
						});
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 2:
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCIsUserLogin(result => {
							uni.showModal({
								title: '用户是否登录',
								content: 'code:' + result['code'] + '\nmessage:' + result['message']
							});
						});
					} else {
						bcPlugin.checkSession(reg => {
							if (reg) {
								//reg 存在 获取seesion
								uni.showModal({
									title: 'session',
									content: 'reg:' + reg
								});
							} else {
								//reg过期 获取session
								bcPlugin.getSession(result => {});
							}
						});
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 3:
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCUserLogout(result => {
							uni.showModal({
								title: '退出登录',
								content: 'code:' + result['code'] + '\nmessage:' + result['message']
							});
						});
					} else {
						bcPlugin.logout(result => {
							if (result.type == 'success') {
							} else {
								//退出失败
								console.log('code:' + result.code + ' - ' + 'msg:' + result.msg);
							}
						});
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 4:
					//淘宝购物车
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCJumpMyCart(result => {});
					} else {
						bcPlugin.OpenMyCart(result => {});
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 5:
					//我的订单
					if (plus.device.vendor == 'Apple') {
						bcPlugin.BCJumpMyOrder(result => {
							console.log(result);
						});
					} else {
						bcPlugin.OpenMyOrders(
							{
								status: 0,
								type: true
							},
							result => {}
						);
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				case 6:
					//商品详情（指定URL跳转淘宝）
					//商品详情
					if (plus.device.vendor == 'Apple') {
						console.log(1);
						bcPlugin.BCGetCoupons('https://s.click.taobao.com/gIbeC7w', result => {
							console.log(result);
						});
					} else {
						bcPlugin.url(
							{
								url: 'https://s.click.taobao.com/gIbeC7w'
							},
							result => {
								console.log(result);
							}
						);
					}
					this.result = '点击了：' + this.btnTitles[e];
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 20upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
