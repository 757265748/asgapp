<script>
	import {
		BASE_URL
	} from '@/api/config.js'
	import {
		getKeyWord,
		doItemHighCommissionPromotionLinkByAll,
		send_circle_addGoods,
		sendCircleExisit,
		sendCircleDelete
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				clientid: ''
			}
		},
		//初始化完成触发一次 
		onLaunch: function() {
			console.log('App Launch1')
			//console.log(plus.push.getClientInfo());
			// #ifdef APP-PLUS
			const openinstall = uni.requireNativePlugin('openinstall-plugin');
			openinstall.registerWakeUp(function(result) {
				console.log('getWakeup : channel=' + result + ', data=' + result.bindData);
			});
			console.log(openinstall.reportRegister()); //注册统计
			// #endif
			let pageIndex = 1;
			//五分钟添加一次发圈商品  如有重复则删除
			setInterval(function() {
				send_circle_addGoods({
					pageIndex: pageIndex
				}).then(res => {
					console.log(res);
				})
			}, 300000)
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
			console.log('App Hide')
		},
		methods: {
			pushCallBack(title){
				uni.showModal({
					title:title
				})
				uni.reLaunch({
					url:'pages/chat/chat'
				})
			},
			pushListener() {
				this.clientid = plus.push.getClientInfo().clientid
				plus.push.PushClickCallback=this.pushCallBack('推送成功！');
				console.log(this.clientid);
				if (!this.clientid) { //如果获取的cid为空，说明客户端向推送服务器注册还未完成，可以使用setTimeout延时重试。
					setTimeout(() => {
						this.clientid = plus.push.getClientInfo().clientid
						console.log(this.clientid);
					}, 4000)
				}

				plus.push.addEventListener('click', (message) => {
					this.pushCallBack()
				});

				plus.push.addEventListener('receive', (message) => {
					this.pushCallBack()
				});
			},
			pushCallBack() {

			},
			getClip: function() {
				setTimeout(function() {
					try {
						// #ifdef APP-PLUS||APP-PLUS-NVUE
						uni.getClipboardData({
							success: function(res) {
								console.log(res.data)
								//console.log(uni.getStorageSync("clip"));
								if (uni.getStorageSync("clip") == res.data) {
									return;
								}
								uni.setStorageSync("clip", res.data);
								uni.showModal({
									content: res.data,
									confirmText: "确定",
									cancelText: "取消",
									success(modelRes) {
										console.log(JSON.stringify(modelRes));
										var firstIndex = res.data.indexOf("话");
										if (modelRes.confirm) {
											let historysearch=uni.getStorageSync('historysearch');
											historysearch.unshift(res.data);
											uni.setStorageSync('historysearch', historysearch);
											if (firstIndex != -1) {
												var tpwd = res.data.substr(firstIndex + 2, 11);
												console.log(tpwd);
												uni.request({
													url: BASE_URL + '/api/get/good/getOrderIdByTpwd',
													method: 'GET',
													data: {
														"tpwd": tpwd,
													},
													success: res => {
														console.log("访问淘口令成功");
														console.log(JSON.stringify(res))
														var goodsId = res.data.result;
														console.log(goodsId);
														// uni.navigateTo({
														// 	url: `/pages/common/goods-detail?id=${goodsId}&search=true`
														// })
														uni.navigateTo({
															url: '/pages/common/search-detail?goodsId=' + goodsId
														})
													},
													fail: (e) => {
														console.log("访问淘口令失败", e);
													},
												});
											} else if (/[\u4e00-\u9fa5_a-zA-Z0-9_]/.test(res.data)) {
												console.log(JSON.stringify(res))
												doItemHighCommissionPromotionLinkByAll({
													content: res.data
												}).then(res1 => {
													console.log(res1.data);
													if (res1.data.result.code != 200) {
														console.log('模糊搜索===========')
														uni.navigateTo({
															url: '/pages/common/search-detail?keyword=' + res.data
														})
													} else {
														let goodsId = res1.data.item_id;
														uni.navigateTo({
															url: '/pages/common/search-detail?goodsId=' + goodsId
														})
													}
												})
											}
										}
									}
								})
							},
							fail: err => {
								console.log(err);
							}
						});
						// #endif
					} catch (e) {
						console.log(e);
					}
				}, 500)
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import "./common/css/common.css"; */
	@import "./common/css/uni.css";

	.color_1 {
		color: #E7AC0A;
	}

	.back_3 {
		background-color: #333;
	}

	.userType {
		margin-left: 10upx;
		color: #D19A5E;
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
