<template>
	<view class="page" :style="{height:currentH+'px'}">
		<view class="nav">
			<view class="back" @tap="back"><uni-icons type="arrowleft" size="25" color="#000"></uni-icons></view>
		</view>
		<view class="head">
			<view class="t1">手机登录</view>
			<view class="t2">欢迎来到爱淘客</view>
		</view>
		<view class="content">
			<view v-if="current == 1">
				<view class="item">
					<input v-model="phone" :placeholder="loginerror" focus placeholder-style="color:#D5D4D9" />
				</view>
				<view class="item">
					<input v-model="code" placeholder="请输入验证码" placeholder-style="color:#D5D4D9" />
					<text style="color: #D5D4D9;" @click="send('login')">{{ loginyzm }}</text>
				</view>
				<view style="display: flex;justify-content: flex-end;margin-top: 20upx;">
					<text @tap="onClickItem(2)">立即注册</text>
				</view>
				<button :class="['login-bt', { disable: code.length<=0 }]" :disabled="isabled" @tap="login">立即登录</button>
			</view>
			<view v-if="current == 2">
				<view class="item">
					<input v-model="phone" :placeholder="loginerror" focus placeholder-style="color:#D5D4D9" />
				</view>
				<view class="item">
					<input v-model="code" placeholder="请输入验证码" placeholder-style="color:#D5D4D9" />
					<text style="color: #D5D4D9;" @click="send('register')">{{ regyzm }}</text>
				</view>
				<view class="item">
					<input v-model="yqm" placeholder="请输入邀请码" placeholder-style="color:#D5D4D9" />
				</view>
				<view style="display: flex;justify-content: flex-end;margin-top: 20upx;">
					<text @tap="onClickItem(1)">去登陆</text>
				</view>
				<button :class="['login-bt', { disable: code.length<=0 }]" @tap="register" :disabled="isabled">注册</button>
			</view>
			<view v-if="viewFlag"><!-- <web-view :src="url" @message="getMessage"></web-view> --></view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from '@/components/uni-segmented-control.vue';
import share from '../../common/js/simple-share.js';
import { order, getRelationId, getCTK, validyzm, sendyzm } from '@/api/goods.js';
import { sendcode, postRegister, postLogin, registerLp1 } from '@/api/user.js';
export default {
	data() {
		return {
			currentH:uni.getSystemInfoSync().screenHeight,
			items: ['登录', '注册'],
			loginyzm: '获取验证码',
			regyzm: '获取验证码',
			isabled: false,
			timer: null,
			yqm: '',
			invite: '',
			code: '',
			current: 1,
			activeColor: '#fff',
			styleType: 'button',
			isSend: true,
			phone: '',
			loginerror: '请输入您的手机号',
			logintext: '',
			url: '',
			viewFlag: false,
			start_time: '',
			end_time: '',
			min: 10,
			isSendR: false,
			isSendL: false
		};
	},
	components: {
		uniSegmentedControl
	},
	onLoad(option) {
		console.log(uni.getStorageSync('user'));
		if (option.exit) {
			this.current = 2;
		}
		if (uni.getStorageSync('loginFlag')) {
			this.current = 1;
		}
		// #ifdef APP-PLUS
		this.getInviteCode().then(res => {
			this.yqm = res;
			console.log('yqm:' + this.yqm);
		});
		// #endif
	},
	methods: {
		getInviteCode() {
			return new Promise((resolve, reject) => {
				const openinstall = uni.requireNativePlugin('openinstall-plugin');
				openinstall.getInstall(8, function(result) {
					if (result.bindData) {
						let inviteCode = JSON.parse(result.bindData).invitecode;
						console.log(inviteCode);
						console.log('getInstall : channel1=' + JSON.stringify(result) + ', data=' + JSON.parse(result.bindData).yqm);
						resolve(inviteCode);
					}
				});
			});
		},
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
			reDate = year + '-' + monthNow + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
			var start_time;
			if (start_time == '') {
				start_time = new Date(year, monthNow, day, hour, minutes, seconds);
			} else {
				start_time = reDate;
			}
			var end_time = reDate;
			console.log(end_time);
		},
		accessLogin() {
			// getCTK({id:"557617725627"}).then(res=>{
			// 	console.log(JSON.stringify(res));
			// });
			sendyzm(this.phone).then(res => {
				console.log(JSON.stringify(res));
			});
			const openinstall = uni.requireNativePlugin('openinstall-plugin');
			openinstall.getInstall(8, function(result) {
				//https://app-egshuj.openinstall.io/js-test/android/6755751951456521661?yqm=00000000
				//this.yqm=JSON.parse(result.bindData).stone;
				if (result.bindData) {
					console.log(JSON.stringify(result));
					console.log('getInstall : channel=' + result.channel + ', data=' + JSON.parse(result.bindData).stone);
				}
			});
		},
		register() {
			// if (!this.code || !this.yqm) {
			// 	this._showToast('验证码或邀请码不能为空', 'none');
			// 	return;
			// }
			if (!this.checkphone()) {
				return;
			}
			postRegister({
				phone: this.phone,
				yqm: this.yqm,
				code: this.code
			}).then(res => {
				console.log(JSON.stringify(res));
				//this.viewFlag=true;
				// this.url='http://39.108.215.49:8009/html/code.html';  http://atk.51atk.com/
				// this.url='https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
				// 					'http://39.108.215.49:8009/html/code.html&state=' +
				// 					this.phone +
				// 					'&view=wap'
				//登录标记  表示用户已注册
				if (res.code == 200) {
					uni.setStorageSync('loginFlag', true);
					console.log(JSON.stringify(res));
					console.log(res.result);
					uni.setStorageSync('user', res.result); //将数据存在缓存中
					uni.setStorageSync('invitecode', res.result.invitecode);
				} else {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
					return;
				}
				const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
				bcPlugin.BCAuth(result => {
					this.tbsqFlag = true;
					//code == 0 ,msg:授权成功  ； code==-1  ,msg:报错信息
					var url =
						'https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
						'http://39.108.215.49:8009/html/code.html&state=' +
						this.user.phone +
						'&view=wap';
					bcPlugin.BCGetCoupons(url, result => {
						console.log('授权成功!');
					});
				});
				uni.reLaunch({
					url: '/pages/index/user'
				});
				setTimeout(function() {
					uni.reLaunch({
						url: '/pages/index/user'
					});
				}, 3000);
			});
		},

		//https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://www.fpc98.com/web/smtoutside/waixielogin.aspx/&state=1212&view=web
		login() {
			console.log(this.phone, this.code);
			postLogin(this.phone, this.code).then(res => {
				console.log(res);
				if (res.code == 100) {
					this._showToast(res.msg, 'none');
					return;
				}
				if (res.user) {
					console.log('登陆!!', res.user);
					uni.setStorageSync('user', res.user);
					console.log(uni.getStorageSync('user'));
					uni.switchTab({
						url: '/pages/index/user'
					});
				} else {
					uni.showToast({
						title: '用户不存在!',
						icon: 'none'
					});
				}
			});
		},
		checkphone(e) {
			//this.phone = e.detail.value;
			var flag = false;
			if (!this.phone) {
				this._showToast('手机号码不能为空', 'none');
				// this.isabled = true;
				// this.isSend = true;
				flag = false;
			} else if (!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.phone)) {
				this._showToast('请输入正确的手机号码格式', 'none');
				// this.isabled = true;
				// this.isSend = true;
				flag = false;
			} else {
				// this.isabled = false;
				// this.isSend = false;
				flag = true;
			}
			return flag;
		},
		send(type) {
			if (this.phone) {
				if(this.isSendL) return
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
							this.isSendL = true;
							this.loginyzm = --cut + 'S';
						} else if (type == 'register') {
							this.isSendR = true;
							this.regyzm = --cut + 'S';
						}
						if (cut == 0) {
							clearInterval(timer);
							if (type == 'login') {
								this.isSendL = false;
								this.loginyzm = '发送验证码';
							} else {
								this.isSendR = false;
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
			this.current = index;
			console.log(this.current);
		}
	}
};
</script>

<style lang="less" scoped>
	.page{
		background-color: white;
		font-family: '黑体';
	}
.head{
	margin: 30upx;
	.t1{
		font-weight: bold;
		font-size: 50upx;
	}
	.t2{
		font-size: 34upx;
	}
}
.content {
	margin: 80upx 30upx;
	padding: 20upx 10upx;
	border-radius: 10upx;

	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15upx 0upx;
		border-bottom: 1px solid #f8f8f8;
		uni-input{
			margin-top: 40upx;
		}
		uni-input,text{
			font-size: 34upx;
		}
	}

	.disable {
		background: #ccc !important;
	}

	.bt {
		width: 50%;
		padding: 10upx 20upx;
		border-radius: 10upx;
		text-align: center;
		font-size: 20upx;
		color: #ffffff;
		background-color: transparent!important;
		border: none!important;
	}

	._input {
		width: 90%;
		height: 28.9px !important;
		line-height: 28.9px !important;
	}

	.login-bt {
		background: #333;
		border-radius: 10upx;
		width: calc(100% - 40upx);
		padding: 0upx 20upx;
		text-align: center;
		margin-top: 80upx;
		border: none;
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
