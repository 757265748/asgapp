<template>
	<view class="container">
		<nav-bar title="昵称" @back='back'></nav-bar>
		<view class="wrap">
			<divid-line height="5"></divid-line>
			<view class="input-wrap">
				<input class="txt-input" placeholder="输入新昵称" @input='_getinput' :value="name" focus />
				<uni-icon @click="clear" type="clear" v-if="isShow" color="#b5b5b5" size="18"></uni-icon>
			</view>
			<view class="bt-wrap" @tap="submit">确认修改</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue';
	import dividLine from '@/components/line.vue';
	import {
		changeName
	} from '@/api/user'
	export default {
		data() {
			return {
				name: '',
				isShow: false,
				phone: ''
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
			_getUser() {
				try {
					const user = uni.getStorageSync('user');
					this.name = user.username;
					this.phone = user.phone
					console.log(user)
				} catch (e) {
					console.log('ERROR', e.message)
				}
			},
			clear() {
				this.name = '';
			},
			_getinput(e) {
				this.name = e.detail.value;
			},
			submit() {
				changeName({
					phone: this.phone,
					name: this.name
				}).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: res.msg
						})
						try {
							const user = uni.getStorageSync('user');
							user.username = this.name;
							uni.setStorageSync('user', user);
						} catch (e) {

						}
						setTimeout(() => {
							uni.reLaunch({
								url:'/pages/index/setting'
							}) 
						}, 500)

					}
				})
			}
		},
		watch: {
			name() {
				if (!this.name) {
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
		margin-top: 72px;
		background: #FFFFFF;
		height: 40px;

		.input-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 10px;
			width: calc(100% - 20px);

			.txt-input {
				width: 100%;
			}
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
