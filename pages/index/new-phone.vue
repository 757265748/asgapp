<template>
	<view class="container">
		<nav-bar title="改绑手机" @back='back'></nav-bar>
		<view class="wrap">
			<divid-line height="5"></divid-line>
			<view class="input-wrap">
				<view class="origin">原始手机号</view>
				<view class="txt-input">{{pphone}}</view>
			</view>
			<view class="input-wrap">
				<view class="origin">新的手机号</view>
				<input v-model="newphone" @blur='checkphone' class="txt-input" placeholder="请输入手机号码" />
				<uni-icon @click="clear" type="clear" v-if="isShow" color="#b5b5b5" size="18"></uni-icon>
			</view>
			<view class="yzm-wrap">
				<view class="yzm-txt">验证码</view>
				<input v-model="code" class="txt-input" placeholder="请输入验证码" />
				<view :class="['bt',{'disable':isSend}]" @click="send" class="bt">{{yzm}}</view>
			</view>
			<view class='bt-wrap' @tap="submit">确认改绑</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue';
	import dividLine from '@/components/line.vue';
	import {
		newPhoneyzm,
		newPhone
	} from '@/api/user'
	export default {
		data() {
			return {
				phone: '',
				pphone: '',
				code: '',
				isSend: false,
				yzm: '发送验证码',
				newphone: '',
				isShow: false,
			}
		},
		components: {
			navBar,
			dividLine
		},
		onLoad() {
			this._getUser()
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			clear() {
				this.newphone = ''
			},
			_getUser() {
				try {
					const user = uni.getStorageSync('user');
					this.phone = user.phone
					let start = this.phone.substring(0, 3);
					let last = this.phone.substring(8, 12);
					this.pphone = `${start}*****${last}`
					console.log('user', this.phone)
				} catch (e) {
					console.log('ERROR', e.message)
				}
			},
			checkphone(e) {
				this.newphone = e.detail.value;
				if (!this.newphone) {
					this._showToast('手机号码不能为空', 'none')
					this.isabled = true
					this.isSend = true
					return
				} else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.newphone)) {
					this._showToast("请输入正确的手机号码格式", "none")
					this.isabled = true
					this.isSend = true
					return
				}
				this.isabled = false
				this.isSend = false
			},
			send() {
				if (!this.isSend && this.phone) {
					newPhoneyzm(this.newphone).then(res => {
						if (res.code == 100) {
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
							return
						}
						uni.showToast({
							title: '验证码已发送'
						})
						let timer = null;
						let cut = 60;
						this.isSend = true;
						timer = setInterval(() => {
							this.yzm = --cut + "S"
							if (cut == 0) {
								clearInterval(timer)
								this.yzm = '发送验证码'
								this.isSend = false
							}
						}, 1000)
					})
				}
			},
			submit() {
				if (!this.isSend) {
					newPhone(this.newphone, this.code).then(res => {
						if (res.code == 200) {
							uni.showToast({
								title: '修改成功'
							})
							try {
								const user = uni.getStorageSync('user');
								user.phone = this.newphone;
								uni.setStorageSync('user', user);
							} catch (e) {

							}
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/index/setting'
								})
							}, 500)
						}
					})
				}
			}
		},
		watch: {
			newphone() {
				if (!this.newphone) {
					this.isShow = false
				} else {
					this.isShow = true
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100vh;
		background: #eee;
		overflow: hidden;
	}

	.wrap {
		width: 100%;
		background: #FFFFFF;
		height: 40px;
		margin: 72px auto 0 auto;

		.origin {
			width: 30%
		}

		.input-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: 40px;
			line-height: 40px;
			width: calc(100% - 20px);
			padding: 0 10px;
			background: #fff;
			border-bottom: 1px solid #f8f8f8;

			.txt-input {
				width: 100%;
			}
		}

		.yzm-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: calc(100% - 20px);
			padding: 5px 10px;
			background: #FFFFFF;
		}

		.disable {
			background: #ccc !important;
		}

		.bt {
			width: 30%;
			padding: 10upx 20upx;
			background: #F9263E;
			border-radius: 10upx;
			text-align: center;
			font-size: 20upx;
			color: #FFFFFF;
		}

		.yzm-txt {
			width: 25%;
		}

		.bt-wrap {
			width: 70%;
			height: 30px;
			border-radius: 10px;
			background: #FF0000;
			color: #fff;
			line-height: 30px;
			text-align: center;
			margin: 30px auto 0 auto;
		}
	}
</style>
