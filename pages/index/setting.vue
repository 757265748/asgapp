<template>
	<view class="content">
		<nav-bar @back='back' title="设置"></nav-bar>
		<view class="avatar-wrap" @tap="changehead">
			<view class="wrap">
				<image class="avatar" :src="user.avatar"></image>
				<view>点击修改头像</view>
			</view>
		</view>
		<view @tap="jump('change-name')" class="item">
			<view class="left">
				<view>昵称</view>
				<view class="user-msg">{{user.username}}</view>
			</view>
			<view class="right">修改</view>
		</view>

		<view class="item" @tap="jump('change-phone')">
			<view class="left">
				<view>修改手机号</view>
				<view class="user-msg">{{user.phone}}</view>
			</view>
			<view class="right">修改</view>
		</view>
		<!-- <view class="item">
			<view class="left">
				<view>修改密码</view>
				<view class="user-msg">cc</view>
			</view>
			<view class="right">修改</view>
		</view> -->
		<divid-line height="10"></divid-line>
		<view class="login-out" @tap="loginout">退出登录</view>

	</view>

</template>
<script>
	import dividLine from '@/components/line.vue';
	import navBar from '@/components/nav-bar.vue'

	export default {
		data() {
			return {
				user: null,
				// avatar: '../../static/avatar.jpg',
			}
		},
		components: {
			dividLine,
			navBar
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				this._getUser();

			},
			changehead() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://39.108.215.49/api/post/upload/avatar', 
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'phone': this.user.phone,
							},
							success: (uploadFileRes) => {
								let data = JSON.parse(uploadFileRes.data)
								this.user.avatar = data.result;
								uni.setStorageSync('user', this.user);
								console.log(data);
							}
						});
					}
				});
			},
			jump(url) {
				console.log('url', url)
				uni.navigateTo({
					url: `/pages/index/${url}`
				})
			},
			back() {
				uni.reLaunch({
					url: "/pages/index/user"
				})
			},
			_getUser() {
				try {
					this.user = uni.getStorageSync('user');
					console.log('setting', this.user);
					if (!this.user) {
						uni.reLaunch({
							url: '/pages/index/login'
						})
						return
					}
				} catch (e) {
					// error
					console.log('error', e.message);
				}
			},
			loginout() {
				try {
					uni.removeStorageSync('user');
					uni.reLaunch({
						url: '/pages/index/index'
					})
				} catch (e) {
					// error
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.content {
		position: relative;
		height: 100%;
		width: 100%;
		background: #fff;

		.avatar-wrap {
			position: relative;
			height: 200px;
			width: 100%;
			text-align: center;
			padding: 10px 0;
			border-bottom: 1px solid #f8f8f8;
			margin-top: 40px;

			.wrap {
				position: relative;
				top: 25%;
				height: 100%;
				width: 100%;
				margin: 0 auto;
			}

			.avatar {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}
		}

		.item {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f8f8f8;
			padding: 10px;
			width: calc(100% - 20px);
			z-index: 999;

			.left {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
			}

			.right {
				font-size: 16px;
				color: #ccc;
			}

			.user-msg {
				margin-left: 5px;
				font-size: 14px;
				color: #ccc;
			}
		}

		.login-out {
			height: 30px;
			width: 80%;
			margin: 10px auto 0 auto;
			text-align: center;
			color: #fff;
			background: #ff0000;
			font-size: 18px;
			font-weight: 600;
			padding: 10px 0;
			border-radius: 6px;
		}
	}
</style>
