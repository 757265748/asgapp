<template>
	<view>
		<view class="nav">
			<view class="back" @tap="back">
				<uni-icon type="arrow-left" size="20" color="#fff"></uni-icon>
			</view>
			<view class="title">登录/注册</view>
		</view>
		<view class="switch-wrap">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<view class="item">
					<uni-icon type="shouji" color="#ccc" size="16"></uni-icon>
					<input @blur="checkphone" class="_input" :placeholder="loginerror" focus />
				</view>
				<view class="item">
					<uni-icon type="yanzhengma" color="#ccc" size="16"></uni-icon>
					<input v-model="code" placeholder="请输入验证码" />
					<view :class="['bt', { disable: isSend }]" @click="send('login')" class="bt">{{ loginyzm }}</view>
				</view>
				<button @tap="accessLogin">accessLogin</button>
				<button :class="['login-bt', { disable: isabled }]" :disabled="isabled" @tap="login">登录</button>
			</view>
			<view v-show="current === 1">
				<view class="item">
					<uni-icon type="shouji" color="#ccc" size="16"></uni-icon>
					<input @blur="checkphone" :placeholder="loginerror" focus />
				</view>
				<view class="item">
					<uni-icon type="yanzhengma" color="#ccc" size="16"></uni-icon>
					<input v-model="code" placeholder="请输入验证码" />
					<view :class="['bt', { disable: isSend }]" @click="send('register')" class="bt">{{ regyzm }}</view>
				</view>
				<view class="item">
					<uni-icon type="yqm" color="#ccc" size="16"></uni-icon>
					<input v-model="yqm" placeholder="请输入邀请码" />
				</view>
				<button :class="['login-bt', { disable: isabled }]" @tap="register" :disabled="isabled">注册</button>
			</view>
			<view v-if="viewFlag">
				<!-- <web-view :src="url" @message="getMessage"></web-view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	// import taobaoApi from '../../common/js/simple-tbapi.js';
	// import share from '../../common/js/simple-share.js';
	import {
		order,
		getRelationId,
		getCTK
	} from '@/api/goods.js'
	import {
		sendcode,
		postRegister,
		postLogin,
		registerLp1
	} from '@/api/user';
	export default {
		data() {
			return {
				items: ['登录', '注册'],
				loginyzm: '发送验证码',
				regyzm: '发送验证码',
				isabled: true,
				timer: null,
				yqm: '',
				code: '',
				current: 0,
				activeColor: '#F9263E',
				styleType: 'button',
				isSend: true,
				phone: '',
				loginerror: '请输入手机号',
				logintext: '',
				url: '',
				viewFlag: false,
				start_time: "",
				end_time: "",
				min: 10
			};
		},
		components: {
			uniSegmentedControl
		},
		onLoad() {},
		methods: {
			back() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			orderDate(min) {
				var date = new Date();
				var year = date.getFullYear();
				var monthNow = date.getMonth() - 2;
				var day = date.getDate() + 13;
				var hour = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();
				var reDate = new Date(year, monthNow, day, hour, minutes + min, seconds);
				year = reDate.getFullYear();
				monthNow = reDate.getMonth() - 2;
				day = reDate.getDate() + 13;
				hour = reDate.getHours();
				minutes = reDate.getMinutes();
				seconds = reDate.getSeconds();
				reDate = year + "-" + monthNow + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
				var start_time;
				if (start_time == "") {
					start_time = new Date(year, monthNow, day, hour, minutes, seconds);
				} else {
					start_time = reDate;
				}
				var end_time = reDate;
				console.log(end_time);
			},
			accessLogin() {
				console.log(111111);
				getCTK({
					page:1
				}).then(res=>{
					console.log(JSON.stringify(res));
				})
// 				uni.share({
// 					provider: "weixin",
// 					scene: "WXSceneSession",
// 					type: 0,
// 					href: "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
// 					title: "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
// 					summary: "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
// 					imageUrl: "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
// 					success: function(res) {
// 						console.log(JSON.stringify(res));
// 						uni.showToast({
// 							title: '已分享',
// 							duration: 2000
// 						});
// 					},
// 
// 					fail: function(err) {
// 
// 						var errrr = JSON.stringify(err);
// 						if (errrr) {
// 							uni.showModal({
// 								title: '表单不能留空',
// 								content: '请完善所有信息再发起分享',
// 								success: function(res) {
// 									if (res.confirm) {
// 										console.log('用户点击确定');
// 									} else if (res.cancel) {
// 										console.log('用户点击取消');
// 									}
// 								}
// 							});
// 						}
// 					}
// 				});
				// this.user = uni.getStorageSync('user');
				// if (this.user) {
				// 	uni.switchTab({
				// 		url: '/pages/index/user'
				// 	});
				// } else {
				// console.log("no user info");
				// }
				let params = {};
				params.scene = "WXSceneSession";
				params.href = "www.baidu.com";
				params.title = "标题";
				params.summary = "xxx";
				params.imageUrl = "https://t12.baidu.com/it/u=224094710,3804416768&fm=76";
				uni.showToast({
					title: '正在分享'
				}); //wxContentImage
				share.wxContentImage(params)

				// taobaoApi.session(res => {
				// 	console.log(JSON.stringify(res));
				// 	var params={
				// 		end_time:"2019-06-24 12:28:22",
				// 		start_time:"2019-06-24 13:28:22",
				// 		tbname:"qq470474509"
				// 	}
				// 	order(params.end_time,params.start_time,params.tbname);
				// });
				// uni.share({
				// 	provider: "weixin",
				// 	scene: "WXSceneSession",
				// 	type: 2,
				// 	imageUrl: "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
				// 	success: function(res) {
				// 		callback && callback({
				// 			code: res.errMsg == "share:ok" ? 1 : 0,
				// 			data: res
				// 		})
				// 	},
				// 	fail: function(err) {
				// 		callback && callback({
				// 			code: 0,
				// 			data: err
				// 		})
				// 	}
				// });
			},
			register() {
				if (!this.code || !this.yqm) {
					this._showToast('验证码或邀请码不能为空', 'none');
					return;
				}
				postRegister({
					phone: this.phone,
					yqm: this.yqm,
					code: this.code
				}).then(res => {
					//this.viewFlag=true;
					// this.url='http://39.108.215.49:8009/html/code.html';  http://atk.51atk.com/
					// this.url='https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
					// 					'http://39.108.215.49:8009/html/code.html&state=' +
					// 					this.phone +
					// 					'&view=wap'
					console.log(res);
					// this.user = uni.getStorageSync('user');
					// console.log(JSON.stringify(this.user));
					// const bcPlugin = uni.requireNativePlugin('dahui-baichuan');
					// if (plus.device.vendor == 'Apple') {
					// 	bcPlugin.BCAuth(result => {
					// 		uni.showModal({
					// 			title: '授权登录',
					// 			content: 'code:' + result['code'] + '\nmessage:' + result['message']
					// 		});
					// 	});
					// } else {
					// 	bcPlugin.login(result => {
					// 		if (result.type == 'success') {
					// 			this.logintext = JSON.stringify(result);
					// 			if (this.logintext) {//http://atk.51atk.com
					// 				plus.runtime.openURL(//http://39.108.215.49:8009/html/code.html
					// 					'https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
					// 					'http://atk.51atk.com&state=' +
					// 					this.phone +
					// 					'&view=wap'
					// 				);
					// 				console.log(this.logintext);
					// 			}
					// 			uni.showToast({
					// 				title: '授权成功'
					// 			});
					// 			uni.switchTab({
					// 				url: '/pages/index/user'
					// 			});
					// 		} else {
					// 			//授权失败，包括用户取消登录
					// 			uni.showToast({
					// 				title: '授权失败,如有异常，请联系客服。'
					// 			});
					// 		}
					// 	});
					// }
					// if (res.code == 100) {
					// 	this._showToast(res.msg, 'none');
					// 	return;
					// } else {
					// 	if (res.result) {
					//
					// 	}
					// 	this._showToast(res.msg);
					// }
					console.log(res.result);
					taobaoApi.login(tbRes => {
						uni.setStorageSync('user', res.result); //将数据存在缓存中
						console.log(JSON.stringify(res));
						var url = 'https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
							'http://39.108.215.49:8009/html/code.html&state=' +
							this.phone +
							'&view=wap'
						if (tbRes.code == 0) {
							console.log("come in");
							taobaoApi.openUrl(url, function() {
								console.log(uni.getStorageSync("user"));
								uni.reLaunch({
									url: '/pages/index/user'
								})
								console.log("授权成功：" + tbRes.data)
							})
						} else {
							console.log("授权失败：" + tbRes.data)
						}
					});
					if (uni.getStorageSync('user')) {
						//获取relationId
						console.log(this.phone);
						getRelationId({
							user: this.phone
						}).then(res => {
							console.log(res);
						})
						setTimeout(function() {
							uni.reLaunch({
								url: '/pages/index/user'
							})
						}, 3000)
					}
				});
			},

			//https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://www.fpc98.com/web/smtoutside/waixielogin.aspx/&state=1212&view=web
			login() {
				if (!this.phone || !this.code) {
					this._showToast('手机号码或验证码不能为空', 'none');
					return;
				}
				postLogin(this.phone, this.code).then(res => {
					console.log(this.phone, this.code);
					if (res.code == 100) {
						this._showToast(res.msg, 'none');
						return;
					}
					if (res.result) {
						console.log('登陆!!', res.result);
						uni.setStorageSync('user', res.result);
						uni.switchTab({
							url: '/pages/index/user'
						});
					}
				});
			},
			checkphone(e) {
				this.phone = e.detail.value;
				if (!this.phone) {
					this._showToast('手机号码不能为空', 'none');
					this.isabled = true;
					this.isSend = true;
					return;
				} else if (!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.phone)) {
					this._showToast('请输入正确的手机号码格式', 'none');
					this.isabled = true;
					this.isSend = true;
					return;
				}
				this.isabled = false;
				this.isSend = false;
			},
			send(type) {
				if (!this.isSend && this.phone) {
					let isEx = sendcode(this.phone, type);
					isEx.then(res => {
						if (res.code == 100) {
							this._showToast(res.msg, 'none');
							return;
						}
						this._showToast('验证码已发送');
						this.isSend = true;
						let timer = null;
						let cut = 60;
						timer = setInterval(() => {
							if (type == 'login') {
								this.loginyzm = --cut + 'S';
							} else if (type == 'register') {
								this.regyzm = --cut + 'S';
							}
							if (cut == 0) {
								clearInterval(timer);
								if (type == 'login') {
									this.loginyzm = '发送验证码';
								} else {
									this.regyzm = '发送验证码';
								}
								this.isSend = false;
							}
						}, 1000);
					});
				} else if (!this.phone) {
					this._showToast('手机号码不能为空', 'none');
				}
			},
			_showToast(title, icon = 'success') {
				uni.showToast({
					title,
					icon
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			}
		}
	};
</script>

<style lang="less" scoped>
	.content {
		width: calc(75% - 20upx);
		margin: 0 auto;
		box-shadow: 0 0 10rpx 2rpx #eeeeee;
		padding: 20upx 10upx;
		border-radius: 10upx;

		.item {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 10upx 0;
			border-bottom: 1px solid #f8f8f8;
		}

		.disable {
			background: #ccc !important;
		}

		.bt {
			width: 50%;
			padding: 10upx 20upx;
			background: #f9263e;
			border-radius: 10upx;
			text-align: center;
			font-size: 20upx;
			color: #ffffff;
		}

		._input {
			width: 90%;
			height: 28.9px !important;
			line-height: 28.9px !important;
		}

		.login-bt {
			background: #f9263e;
			border-radius: 10upx;
			width: calc(100% - 40upx);
			padding: 0upx 20upx;
			text-align: center;
			margin-top: 20upx;
			color: #fff;
		}
	}

	.switch-wrap {
		padding: 20upx 0 0 0;
	}

	.color-tag {
		width: 50upx;
		height: 50upx;
	}

	.nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		background: #f9263e;
		height: 100upx;
		padding-top: 30upx;

		.back {
			width: 30px;
			float: left;
		}

		.title {
			margin: 0 auto;
			color: #fff;
			font-size: 30upx;
			font-weight: 600;
		}
	}
</style>
