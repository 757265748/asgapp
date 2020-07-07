<script>
import { BASE_URL } from '@/api/config.js';
import plusListener from '@/api/push-plus-listener.js';
import { getKeyWord, doItemHighCommissionPromotionLinkByAll, send_circle_addGoods, sendCircleExisit, sendCircleDelete } from '@/api/goods.js';
import Push from 'push.js';

export default {
	data() {
		return {
			clientid: ''
		};
	},
	created() {
		console.log("create");
		Push.Permission.request();
		console.log(Push);
		this.pushMessage('消息通知的内容');
	},
	//初始化完成触发一次
	onLaunch: function() {
		// #ifdef APP-PLUS
		this.download();
		uni.setStorageSync('reloadFlag', false); //刷新页面状态  bottom tabbar
		console.log('App Launch1');
		console.log(plus.push.getClientInfo());
		plusListener.checkArguments(); // 处理启动参数
		plusListener.newintentListener(); // 监听后台恢复
		plusListener.pushListener(); // 监听通知栏信息
		const openinstall = uni.requireNativePlugin('openinstall-plugin');
		openinstall.registerWakeUp(function(result) {
			console.log('getWakeup : channel=' + result + ', data=' + result.bindData);
		});
		console.log(openinstall.reportRegister()); //注册统计
		// #endif
		let pageIndex = 1;
		//五分钟添加一次发圈商品  如有重复则替换
		setInterval(function() {
			send_circle_addGoods({
				pageIndex: pageIndex
			}).then(res => {
				console.log(res);
			});
		}, 300000);
		//消息通知测试
		// #ifdef APP-PLUS
		this.pushListener();
		// #endif
	},
	//从后台进入前台
	onShow: function() {
		this.getClip();
		// console.log('App Show');
	},
	//从前台进入后台
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		pushMessage(message) {
			Push.create('消息通知的标题', {
				body: message,
				requireInteraction: true,
				//icon: '/icon.png',
				timeout: 600000
			});
		},
		pushCallBack(title) {
			uni.showModal({
				title: title
			});
			uni.reLaunch({
				url: 'pages/chat/chat'
			});
		},
		pushListener() {
			this.clientid = plus.push.getClientInfo().clientid;
			plus.push.PushClickCallback = this.pushCallBack('推送成功！');
			setTimeout(() => {
				console.log(this.clientid);
			}, 3000);
			if (!this.clientid) {
				//如果获取的cid为空，说明客户端向推送服务器注册还未完成，可以使用setTimeout延时重试。
				setTimeout(() => {
					this.clientid = plus.push.getClientInfo().clientid;
					console.log(this.clientid);
				}, 4000);
			}

			plus.push.addEventListener('click', message => {
				this.pushCallBack();
			});

			plus.push.addEventListener('receive', message => {
				this.pushCallBack();
			});
		},
		pushCallBack() {},
		download() {
			uni.request({
				url: 'http://39.108.215.49/api/get/user/download',
				success(res) {
					if (res.data.code == 200) {
						console.log(plus.runtime.version);
						console.log(res.data.result.version);
						if (plus.runtime.version != res.data.result.version) {
							console.log('http://39.108.215.49:8009/html/' + res.data.result.version + '.zip');
							let timestamp = new Date().getTime();
							plus.webview.create('http://39.108.215.49:8009/html/' + res.data.result.version + '.zip?timestamp=' + timestamp);
						}
					}
				},
				fail(err) {
					console.log(err);
				}
			});
		},
		getClip: function() {
			setTimeout(function() {
				try {
					// #ifdef APP-PLUS||APP-PLUS-NVUE
					uni.getClipboardData({
						success: function(res) {
							console.log(res.data);
							//console.log(uni.getStorageSync("clip"));
							if (uni.getStorageSync('clip') == res.data) {
								return;
							}
							uni.setStorageSync('clip', res.data);
							uni.showModal({
								content: res.data,
								confirmText: '确定',
								cancelText: '取消',
								success(modelRes) {
									console.log(JSON.stringify(modelRes));
									var firstIndex = res.data.indexOf('话');
									if (modelRes.confirm) {
										let historysearch = uni.getStorageSync('historysearch');
										historysearch.unshift(res.data);
										uni.setStorageSync('historysearch', historysearch);
										if (firstIndex != -1) {
											var tpwd = res.data.substr(firstIndex + 2, 11);
											console.log(tpwd);
											uni.request({
												url: BASE_URL + '/api/get/good/getOrderIdByTpwd',
												method: 'GET',
												data: {
													tpwd: tpwd
												},
												success: res => {
													console.log('访问淘口令成功');
													console.log(JSON.stringify(res));
													var goodsId = res.data.result;
													console.log(goodsId);
													// uni.navigateTo({
													// 	url: `/pages/common/goods-detail?id=${goodsId}&search=true`
													// })
													uni.navigateTo({
														url: '/pages/common/search-detail?goodsId=' + goodsId
													});
												},
												fail: e => {
													console.log('访问淘口令失败', e);
												}
											});
										} else if (/[\u4e00-\u9fa5_a-zA-Z0-9_]/.test(res.data)) {
											console.log(JSON.stringify(res));
											doItemHighCommissionPromotionLinkByAll({
												content: res.data
											}).then(res1 => {
												console.log(res1.data);
												if (res1.data.result.code != 200) {
													console.log('模糊搜索===========');
													uni.navigateTo({
														url: '/pages/common/search-detail?keyword=' + res.data
													});
												} else {
													let goodsId = res1.data.item_id;
													uni.navigateTo({
														url: '/pages/common/search-detail?goodsId=' + goodsId
													});
												}
											});
										}
									}
								}
							});
						},
						fail: err => {
							console.log(err);
						}
					});
					// #endif
				} catch (e) {
					console.log(e);
				}
			}, 500);
		}
	}
};
</script>

<style>
/*每个页面公共css */
/* 下拉刷新css */
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'colorui/animation.css';
@import 'static/index-app.css';

@import './common/css/uni.css';

.color_1 {
	color: #e7ac0a;
}

.back_3 {
	background-color: #ea4d3e;
}

.userType {
	margin-left: 10upx;
	color: #d19a5e;
}

.btn {
	border-radius: 1rem;
	background: linear-gradient(to left, #c3842e, #f0b700);
	text-align: center;
	color: white;
	width: 50%;
	margin: 40upx auto;
	padding: 10upx;
}

.uni-btn {
	border-radius: 1rem;
	background: linear-gradient(to left, #c3842e, #f0b700);
	text-align: center;
	color: white;
	padding: 0 10upx;
}

.margin_t_10 {
	margin: 10upx 0;
}

.margin_l_20 {
	margin-left: 20upx;
}

.padding_l_20 {
	padding: 10upx 20upx;
}

.flex_1 {
	flex: 1;
}

.flex_4 {
	flex: 4;
}

.between {
	justify-content: space-between;
}

uni-tabbar {
	z-index: 1000;
}

page {
	/* background-color: #fff; */
	height: 100%;
	font-size: 28upx;
	line-height: 1.8;
	/* padding-bottom: 120upx; */
}
</style>
