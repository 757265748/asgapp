<template>
	<view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in lists" :key="key" @click="goDetailPage(item)">
			<view class="uni-list-cell-navigate" :class="item.switch!=undefined?'':'uni-navigate-right'"> {{item.name ? item.name : item}}
				<view v-html="item.center"></view>
				<view style="position: relative;left:0" :style="{left: item.switch!=undefined?'0':'-1rem'}" v-html="item.content"></view>
				<image style="width: 2rem;height: 2rem;border-radius: 1rem;position: relative;left:-1rem" v-show="item.img" :src="user.avatar||headImg"
				 mode=""></image>
				<switch style="transform: scale(.8);position: relative;left: 1rem;" v-if="item.switch!=undefined" name="switch"
				 :checked="item.switch" @tap="switchTap(item.name)" />
			</view>
		</view>
		<view class="exitLogin">
			<view @tap="exitLogin">退出登录</view>
		</view>
	</view>
</template>

<script>
	import {
		uploadHeadImg,
		getUserInfo,
		set_info,
		excute_set_info
	} from '@/api/user.js'
	import {
		getGoodsList,
		getRecommend,
		getHotListGood,
		getCTK,
		getOtherGood,
		exisitCollection,
		existUser
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				// userName: 'stone',
				// 修改邀请码: 'aaaa',
				// ganden: 'sex',
				// chatNum: '',
				// chatRemove: '',
				// phoneNum: '13008847296',
				// tbAccredit: '',
				// messagePush: ''
				user: null,
				headImg: '../../static/logo.png',
				lists: {
					head: {
						key:'avatar',
						name: '头像',
						content: '',
						img: true
					},
					userName: {
						key:'username',
						name: '用户名',
						content: ''
					},
					updateInvitecode: {
						key:'invitecode',
						name: '邀请码',
						content: ''
					},
					chatNum: {
						key:'WeiXin',
						name: '微信号',
						content: ''
					},
					// chatRemove: {
					// 	name: '解除微信',
					// 	content: ''
					// },
					phoneNum: {
						key:'phone',
						name: '手机号码',
						content: ''
					},
					tbAccredit: {
						key:'pid',
						name: '淘宝授权',
						center: '<text style="font-size:.3rem">访问淘宝页面无需输入账号密码</text>',
						content: '<switch name="switch1" checked="false" />',
						switch: uni.getStorageSync("tbsqFlag")
					},
					messagePush: {
						key:'ts',
						name: '通知推送',
						content: '<switch name="switch" checked="false" />',
						switch: true
					}
				},

				imgList: [],
				cloudimgList: [],
				imgCount: 9, //最多支持9张上传，可以修改
			}
		},
		onShow(e) {
			// this.existUser();
			this.getUser();
		},
		onLoad(options) {
			this.user = uni.getStorageSync("user");
			//初始化用户信息
			this.init();
			console.log(JSON.stringify(this.lists));
			console.log(uni.getStorageSync("user"));
			excute_set_info({
				id:this.user.id,
				columnName:'zfb',
				columnValue:'13008847296'
			}).then(res=>{
				console.log(res);
			})
		},
		methods: {
			init(){
				console.log(this.user);
				this.lists.userName.content=this.user.username;
				this.lists.updateInvitecode.content=this.user.invitecode;
				this.lists.chatNum.content=this.user.WeiXin;
				this.lists.phoneNum.content=this.user.phone;
			},
			goDetailPage(item) {
				let that = this;
				switch (item.name) {
					case '头像':
						this.openAlbum(that.lists.phoneNum.content);
						break;
					case '用户名':
						this.jump_set_info(item.name,item.key,item.content);
						break;
					case '邀请码':
						this.jump_set_info(item.name,item.key,item.content);
						break;
					case '性别':
						this.jump_set_info(item.name,item.key,item.content);
						break;
					case '微信号':
						this.jump_set_info(item.name,item.key,item.content);
						break;
					case '解除微信':
						this.jump_set_info(item.name,item.key,item.content);
						break;
					case '手机号码':
						this.jump_set_info(item.name,item.key,item.content);
						break;
				}
			},
			jump_set_info(name,key,input){
				uni.navigateTo({
					url:`set_info?name=${name}&key=${key}&input=${input}`
				})
			},
			switchTap(p) {
				console.log(p);
				switch (p) {
					case '淘宝授权':
						console.log(this.tbsqFlag);
						if (this.tbsqFlag) {
							//取消授权
							this.tbsqFlag = this.tbsqFlag ? false : true;
							try{
								excute_set_info({
									id:this.user.id,
									columnName:'pid',
									columnValue:''
								}).then(res=>{
									console.log(res);
								})
							}catch(e){
								console.log(e)
							}
							return;
						}
						console.log(this.tbsqFlag);
						//重新授权
						const bcPlugin = uni.requireNativePlugin('dahui-alibaichuan');
						bcPlugin.BCAuth(result => {
							this.tbsqFlag = true;
							uni.setStorageSync("tbsqFlag", true);
							//code == 0 ,msg:授权成功  ； code==-1  ,msg:报错信息
							var url = 'https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=' +
								'http://39.108.215.49:8009/html/code.html&state=' +
								uni.getStorageSync("user").phone + '&view=wap'
							bcPlugin.BCGetCoupons(url, result => {
								console.log(22);
							});
						});
						break;
					case '通知推送':
						break;
				}
			},
			existUser() {
				if (!uni.getStorageSync("user")) {
					uni.reLaunch({
						url: '/pages/index/login'
					})
				}
				existUser(this.user.phone).then(res => {
					//console.log(JSON.stringify(res))
					if (res.data.code != 200) {
						uni.showToast({
							title: "用户不存在!",
							icon: "none"
						})
						uni.reLaunch({
							url: '/pages/index/login'
						})
					}
				})
			},
			getUser() {
				let ret = getUserInfo(uni.getStorageSync("user").phone)
				console.log('用户信息', ret)
				ret.then(res => {
					console.log('用户信息', res)
					if (res.code == 100) {
						uni.showToast({
							title: "初始化用户信息失败",
							icon: 'none'
						})
						return
					} else {
						uni.setStorageSync("user", res.result);
						this.user = uni.getStorageSync("user");
						//初始化用户信息
						this.init();
						let data = res.result;
						if (data.pid == "") {
							console.log(2)
							this.tbsqFlag = false;
							uni.setStorageSync("tbsqFlag", false);
						} else {
							console.log(3)
							this.tbsqFlag = true;
							uni.setStorageSync("tbsqFlag", true);
						}
					}
				})
			},
			exitLogin() {
				uni.removeStorageSync('user');
				uni.navigateTo({
					url: '/pages/index/login?exit=' + true
				})
			},
			delImg(i) {
				uni.showModal({
					content: '确定删除这张吗',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(i, 1);
							this.imgCount++;
						} else if (res.cancel) {

						}
					}
				});
			},
			delcloudImg(i) {
				var _self = this;
				uni.showModal({
					content: '确定删除云服务器上面这张图吗',
					success: res => {
						if (res.confirm) {
							this.$cloud.deleteFile({
								fileList: [this.cloudimgList[i]],
								success(res) {},
								fail(err) {
									console.log(err);
								},
								complete(res) {
									uni.showToast({
										title: '删除成功！',
										icon: 'none'
									});
									_self.cloudimgList.splice(i, 1);
								}
							});
						} else if (res.cancel) {

						}
					}
				});
			},
			openAlbum(phone) {
				uni.chooseImage({
					// sourceType:['camera'],
					sourceType: ['album'],
					count: 1,
					sizeType: ['compressed'],
					success: e => {
						uni.showLoading({
							title: '上传图片',
							mask: false
						});
						this.imgList = [...this.imgList, ...e.tempFiles];
						this.imgCount = 9 - this.imgList.length;
						console.log(JSON.stringify(e.tempFiles));
						console.log(...e.tempFiles);
						this.$cloud.uploadFile({
							filePath: e.tempFiles[0].path,
							success: (res) => {
								//保存图片的路径
								console.log(res.fileID);
								this.headImg=res.fileID;
								this.user.avatar=res.fileID;
								uni.setStorageSync("user",this.user);
								console.log(uni.getStorageSync("user"));
								uploadHeadImg(phone, res.fileID).then(res => {
									console.log(res);
								});
								uni.hideLoading();
								uni.showToast({
									title: '上传成功！',
									icon: 'none'
								});
							},
							fail: (err) => {
								console.log(err);
							},
							complete(){
								uni.hideLoading();
							}
						})
					}
				});
			}
		}
	}
</script>

<style>
	.exitLogin {
		width: 100%;
		text-align: center;
		margin-top: 50upx;
	}

	.exitLogin view {
		width: 50%;
		margin: auto;
		color: #fff;
		padding: 10upx;
		border-radius: 1rem;
		background: linear-gradient(to left, #c3842e, #f0b700);
	}

	view {
		color: #333;
	}
</style>
