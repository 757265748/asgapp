<template>
	<view class="content">
		<nav-bar title="绑定支付宝账号" background="#ff0000" color="#fff" @back="back"></nav-bar>
		<view class="container">
			<view class="item">
				<view class="title">提现人</view>
				<input placeholder="请输入真实姓名" v-model="name" />
			</view>
			<view class="item">
				<view class="title">支付宝</view>
				<input placeholder="请输入手机号" v-model="zfbname" />
			</view>
			<view class="item">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" v-model="code" />
				<view @tap="sendyzm" class="yzm-txt">{{yzm}}</view>
			</view>
			<view class="bt" @tap="submit">绑定</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import {
		bindzfb,
		sendcode
	} from '@/api/user.js'
	export default {
		data: () => ({
			yzm: '获取验证码',
			name: '',
			zfbname: '',
			code: '',
			isSend: false,
			phone: '',
			user:null
		}),
		components: {
			navBar
		},
		onLoad() {
			this.getUser();
		},
		methods: {
			getUser(){
				try{
					this.user = uni.getStorageSync('user');
					this.phone = this.user.phone
				}catch(e){
					//TODO handle the exception
				}
			},
			back() {
				uni.switchTab({
					url:"/pages/index/user"
				})
			},
			sendyzm() {
				if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.zfbname) || !this.zfbname) {
					uni.showToast({
						title: '请输入正确的手机格式,',
						icon: "none"
					})
					return
				}
				if (!this.isSend) {
					sendcode(this.zfbname, 'login').then(res => {
						if (res.code == 200) {
							uni.showToast({
								title: '已发送'
							})
							this.isSend = true
							let timer = null;
							let cut = 60;
							timer = setInterval(() => {
								this.yzm = --cut + "S"
								if (cut == 0) {
									clearInterval(timer)
									this.yzm = '发送验证码'
									this.isSend = false
								}
							}, 1000)
						}
					})
				}
			},
			submit() {
				if (!this.name || !this.zfbname || !this.code) {
					uni.showToast({
						title: "姓名手机号或验证码不能为空",
						icon: "none"
					})
					return
				}
				if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.zfbname)) {
					uni.showToast({
						title: '请输入正确的手机格式,',
						icon: "none"
					})
					return
				}
				console.log('zfb',this.zfbname, this.name, this.code,this.phone)
				bindzfb(this.zfbname, this.name, this.code,this.phone).then(res => {
					 
					if (res.code != 200) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						return
					}
					this.user.zfbname = this.zfbname
					uni.setStorageSync('user',this.user);
					uni.showToast({
						title: "绑定成功",
					})
					uni.navigateTo({
						url: '/pages/index/cash-withdrawal'
					})
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.content {
		height: 100%;
		width: 100%;
		background: #eee;
	}

	.container {
		background: #fff;
		width: calc(100% - 20px);
		padding: 0 10px 20px 10px;
		margin-top: 150upx;

		.item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid #F8F8F8;

			.title {
				width: 15%;
				margin-right: 10px;
			}

			input {
				width: 60%;
			}

			.yzm-txt {
				width: 22%;
				height: 100%;
				font-size: 14px;
				color: #FF0000;
			}
		}

		.bt {
			margin: 10px auto 0 auto;
			color: #fff;
			text-align: center;
			border-radius: 8px;
			font-size: 16px;
			font-weight: 600;
			padding: 6px 20px;
			background: #FF0000;
		}
	}
</style>
