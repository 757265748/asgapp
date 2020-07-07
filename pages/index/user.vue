<template>
	<view class="page" style="overflow: hidden;" v-if="user">
		<view class="head uni-flex uni-row" :style="{'padding-top':statusBarH+'px'}">
			<!-- <view class="setIcon flex_1" @tap="edit_info">
				<view class="uni-icon uni-icon-gear"></view>
			</view> -->
			<view class="uni-media-list-text-top uni-flex uni-row between">
				<view class="uni-flex uni-row user_info">
					<view class="uni-media-list-logo">
						<image :src="user.avatar||'../../static/logoB.png'" @tap="edit_info"></image>
					</view>
					<view class="uni-flex uni-column" style="flex: 3;">
						<view class="text">
							<text @tap="edit_info" class="username">{{user.username||0}}</text>
							<view class="userType">
								<text @tap="edit_info" v-show="user.TeamType==0" class="">{{user_data?user_data.jurisdictionA:'游客'}}</text>
								<text @tap="edit_info" v-show="user.TeamType==1" class="specialType">创始会员</text>
							</view>
						</view>
						<view @tap="copykey(user_data.InviteCode||'')" class="inviteCode">
							<text>邀请ID:{{user_data?user_data.InviteCode:'00000000'}}</text>
						</view>
					</view>
				</view>
				<view class="teamList" style="flex: 2;" @tap="team_list" v-show="user.TeamQX==1">团员列表</view>
			</view>
		</view>
		<view class="yj">
			<view class="column1">
				<view></view>
				<view class="yj1">
					<view class="title">累计总收入(元)</view>
					<text>{{user_data?user_data.CommissionTotal:'0.00'}}</text>
				</view>
				<view></view>
			</view>
			<view class="column2">
				<view class="yj1">
					<view class="title">本月预估总收入</view>
					<text>{{user_data?user_data.CommissionAllMonth:'0.00'}}</text>
				</view>
				<view></view>
				<view class="yj1">
					<view class="title">今天预估收入</view>
					<text>{{user_data?user_data.CommissionAllDay:'0.00'}}</text>
				</view>
			</view>
		</view>
		<view class="sy uni-flex uni-row">
			<view class="content uni-flex uni-column">
				<image src='../../static/user/tab_1.png' alt="" @tap="orderDetail(1)"></image>
				<text>我的收益</text>
			</view>
			<view class="content uni-flex uni-column">
				<image src='../../static/user/tab_2.png' alt="" @tap="orderDetail(2)">
					<text>订单明细</text>
			</view>
			<view class="content uni-flex uni-column">
				<image src='../../static/user/tab_3.png' alt="" @tap="orderDetail(3)">
					<text>我的团队</text>
			</view>
			<view class="content uni-flex uni-column">
				<image src='../../static/user/tab_4.png' alt="" @tap="orderDetail(4)">
					<text>邀请好友</text>
			</view>
		</view>
		<view class="page2">
			<view class="uni-swiper-msg notice">
				<view class="uni-swiper-msg-icon">
					<image src="../../static/logoB.png" mode="widthFix"></image>
				</view>
				<swiper autoplay="true" circular="true" interval="5000">
					<swiper-item v-for="(item, index) in msg" :key="index">
						<navigator>{{item}}</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="syData">
				<view class="syData_head title uni-flex uni-row">
					<view class="title">收益数据</view>
					<view class="more" @tap="moreData">更多数据&gt;&gt;</view>
				</view>
				<view>
					<view class="uni-padding-wrap" style="border-bottom: 1px solid #ccc;width: 100%;">
						<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
						 @clickItem="onClickItem" />
					</view>
					<view class="uni-flex uni-row title2" style="margin-top: 20upx;">
						<view><text>今日预估</text></view>
						<view>
							<text>今日粉丝</text>
						</view>
						<view><text>本月预估</text></view>
					</view>
					<view class="content">
						<view v-show="current === 0" class="uni-flex uni-row">
							<view>{{user_data?user_data.CommissionAllDay:0}}</view>
							<view>0</view>
							<view>{{user_data?user_data.CommissionAllMonth:0}}</view>
						</view>
						<view v-show="current === 1" class="uni-flex uni-row">
							<view>0.00</view>
							<view>0</view>
							<view>0.00</view>
						</view>
						<view v-show="current === 2" class="uni-flex uni-row">
							<view>0.00</view>
							<view>0</view>
							<view>0.00</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="hyzx" v-show="pdd==1||jd==1||gfwx==1">
				<view class="hyzx_head uni-list-cell">会员中心</view>
				<view class="content uni-flex uni-row">
					<view class="uni-flex uni-column" v-show="pdd==1">
						<image :src="headIcon" alt="">
						<text>拼多多小程序</text>
					</view>
					<view class="uni-flex uni-column" v-show="jd==1">
						<image :src="headIcon" alt="">
						<text>京东小程序</text>
					</view>
					<view class="uni-flex uni-column" v-show="gfwx==1">
						<image :src="headIcon" alt="">
						<text>官方微信</text>
					</view>
				</view>
			</view> -->
			<view class="other" v-show="otherService">
				<view class="title">其他服务</view>
				<view class="content uni-flex uni-row">
					<view v-show="xsjc==1" @tap="tabBtmLink('newbie_tutorial')">
						<image src="../../static/user/newbie_tutorial.png" mode=""></image>
						<view>新手教程</view>
					</view>
					<view v-show="cjwt==1" @tap="tabBtmLink('common_problem')">
						<image src="../../static/user/question.png" mode=""></image>
						<view>常见问题</view>
					</view>
					<view v-show="zhds==1" @tap="tabBtmLink('order_get')">
						<image src="../../static/user/zhdd.png" mode=""></image>
						<view>订单找回</view>
					</view>
					<view v-show="collect==1" @tap="tabBtmLink('collect')">
						<image src="../../static/user/collect.png" mode=""></image>
						<view>收藏夹</view>
					</view>
				</view>
				<view class="content2 uni-flex uni-row">
					<view v-show="dtwl==1" @tap="tabBtmLink('push')">
						<image src="../../static/user/dtwl.png" alt="">
							<view>地推物料</view>
					</view>
					<view v-show="yjfk==1" @tap="tabBtmLink('opinion')">
						<image src="../../static/user/feedback.png" mode=""></image>
						<view>意见反馈</view>
					</view>
					<view v-show="aboutWe==1" @tap="tabBtmLink('about_me')">
						<image src="../../static/user/about_me.png" mode="aspectFit"></image>
						<view>关于我们</view>
					</view>
					<view v-show="lp==1" @tap="tabBtmLink('business_cooperation')">
						<image src="../../static/user/swhz.png" mode="aspectFit"></image>
						<view>商务合作</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// import uniSegmentedControl from '@/components/tab-control.vue';
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import uniIcons from '../../components/uni-icon.vue'
	import {
		getUserinit
	} from '@/api/user.js';
	import {
		getnowbalance,
		tx_zfb
	} from '@/api/comission.js';
	import {
		set_page
	} from '@/api/set_page.js'
	import {
		getGoodsList,
		getRecommend,
		getHotListGood,
		getCTK,
		getOtherGood,
		exisitCollection,
		existUser,
		getDescImg
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				title: '我的',
				pdd: 0,
				jd: 0,
				gfwx: 0,
				xsjc: 0,
				cjwt: 0,
				zhds: 0,
				collect: 0,
				dtwl: 0,
				yjfk: 0,
				aboutWe: 0,
				lp: 0,
				headIcon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90',
				msg: [
					'买药不出门省时省力省口罩',
					'健康好物速享 春季防护指南',
					'2020年天猫品智315—主会场'
				],
				items: [
					'淘宝',
				],
				current: 0,
				activeColor: '#E11C1E',
				styleType: 'text',
				user: new Object(),
				tbsqFlag: uni.getStorageSync("tbsqFlag"),
				user_data: null, //用户佣金信息返回
				statusBarH: 0
			}
		},
		computed: {
			otherService() {
				let flag = this.xsjc == 0 && this.cjwt == 0 && this.zhds == 0 && this.collect == 0 && this.dtwl == 0 && this.yjfk ==
					0 && this.aboutWe == 0 && this.lp == 0 ? false : true;
				return flag;
			}
		},
		components: {
			uniSegmentedControl,
			uniIcons
		},
		onShow(e) {
			this.user = uni.getStorageSync('user');
			this.existUser();
			this.getUser();
		},
		onPullDownRefresh(e) {
			console.log(e);
			uni.stopPullDownRefresh();
		},
		onLoad() {
			this.user = uni.getStorageSync('user');
			// #ifdef APP-PLUS
			if (plus.navigator.isImmersedStatusbar()) {
				console.log(plus.navigator.getStatusbarHeight());
				this.statusBarH = plus.navigator.getStatusbarHeight();
			}
			// #endif
			// console.log(uni.getStorageSync('user'));
			// tx_zfb({
			// 	alipay:'13008847296',
			// 	realname:'曾磊',
			// 	money:1,
			// 	beizhu:'app测试',
			// 	thirdorder:''
			// }).then(res=>{
			// 	console.log(res);
			// })
			// console.log(uni.getStorageSync('user'));
			// uni.setNavigationBarTitle({
			// 	title: this.title
			// })
			// //获取佣金信息
			// this.getCommission();
			// uni.removeStorageSync("tbsqFlag");
			// this.getData(); //再次获取授权信息  避免授权之后  界面未更新
		},
		methods: {
			tabBtmLink(type) {
				console.log(type);
				switch (type) {
					case 'newbie_tutorial':
						uni.navigateTo({
							url: '/pages/user/newbie_tutorial'
						})
						break;
					case 'common_problem':
						uni.navigateTo({
							url: '/pages/user/common_problem'
						})
						break;
					case 'about_me':
						uni.navigateTo({
							url: '/pages/user/about_me'
						})
						break;
					case 'business_cooperation':
						uni.navigateTo({
							url: '/pages/user/business_cooperation'
						})
						break;
					case 'order_get':
						uni.navigateTo({
							// url: '/pages/user/order_get'
							url: '/pages/user/order_get'
						})
						break;
					case 'opinion':
						uni.navigateTo({
							url: '/pages/user/opinion'
						})
						break;
					case 'collect':
						uni.navigateTo({
							url: '/pages/index/collection'
						})
						break;
					case 'push':
						uni.navigateTo({
							url: '/pages/user/push'
						})
						break;
				}
			},
			copykey() {

			},
			team_list() {
				uni.navigateTo({
					url: '/pages/user/team_list'
				})
			},
			moreData() {
				uni.navigateTo({
					url: '/pages/user/revenue'
				})
			},
			orderDetail(index) {
				switch (index) {
					case 1:
						uni.navigateTo({
							url: '/pages/user/revenue'
						})
						break;
					case 2:
						uni.navigateTo({
							url: '/pages/user/board'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '/pages/user/my_team'
						})
						break;
					case 4:
						uni.navigateTo({
							url: '/pages/user/invite_friend'
						})
						break;
				}
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},
			edit_info() {
				uni.navigateTo({
					url: '/pages/user/my_info?user=' + this.user + '&tbsqFlag=' + this.tbsqFlag
				})
			},

			existUser() {
				if (!uni.getStorageSync("user")) {
					uni.reLaunch({
						url: '/pages/index/login'
					})
					return;
				}
				console.log(this.user);
				existUser(this.user.phone).then(res => {
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
			tbsq() {
				if (this.tbsqFlag) {
					this.tbsqFlag = this.tbsqFlag ? false : true;
					return;
				}
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
			},
			customer() {
				uni.showModal({
					title: '专属客服',
					content: '添加微信：xxxxx获取一对一专属服务',
					showCancel: false,
					confirmText: '知道啦',
				});
			},
			getCommission() {
				getnowbalance({
					pid: this.user.pid
				}).then(res => {
					console.log(res);
				})
			},
			getUser() {
				set_page.my_page().then(res => {
					this.pdd = res.data.result.pdd;
					this.jd = res.data.result.jd;
					this.gfwx = res.data.result.gfwx;
					this.xsjc = res.data.result.xsjc;
					this.cjwt = res.data.result.cjwt;
					this.zhds = res.data.result.zhds;
					this.collect = res.data.result.collect;
					this.dtwl = res.data.result.dtwl;
					this.yjfk = res.data.result.yjfk;
					this.aboutWe = res.data.result.aboutWe;
					this.lp = res.data.result.lp;
					console.log(res);
				})
				console.log(uni.getStorageSync('user'));
				let ret = getUserinit(uni.getStorageSync('user').phone)
				ret.then(res => {
					console.log('佣金获取', res)
					if (res.code == 100) {
						uni.showToast({
							title: "初始化用户信息失败",
							icon: 'none'
						})
						return
					} else {
						// this.user.username = data.username;
						// this.user.pid = data.PID;
						// this.user.ye = data.CommissionSurplus;
						// this.user.zfbname = data.zfbname;
						// this.user.avatar = data.avatar;
						uni.setStorageSync('user_data', res.result)
						this.user_data = uni.getStorageSync('user_data');
						if (uni.getStorageSync("user").pid == "") {
							this.tbsqFlag = false;
							uni.setStorageSync("tbsqFlag", false);
						} else {
							this.tbsqFlag = true;
							uni.setStorageSync("tbsqFlag", true);
						}
					}
				})
			},
			getData() {
				try {
					uni.setStorageSync("invitecode", uni.getStorageSync('user').invitecode)
					if (!uni.getStorageSync('user')) {
						uni.reLaunch({
							url: '/pages/index/login'
						})
						return
					}
					uni.showLoading({
						title: '加载中...'
					})
					this.getUser();
					uni.hideLoading()
				} catch (e) {
					uni.hideLoading()
					uni.showToast({
						title: "初始化用户信息失败",
						icon: 'none'
					})
					console.log('error', e.message);
				}
				//数据预加载
				this.randomfn();
				console.log(uni.getStorageSync("goodsList"))
			},
			randomfn() {
				uni.removeStorageSync("goodsList")
				let ary = [];
				for (let i = 0; i < this.tabBars.length; i++) {
					if (i < 1) {
						getGoodsList({
							page: this.page,
							type: this.tabBars[i].name
						}).then(res => {
							let aryItem = {
								data: []
							};
							console.log(this.tabBars[i].name);
							aryItem.data = res.result;
							ary.push(aryItem);
							this.goodsList.push(aryItem);
							uni.setStorageSync("goodsList", this.goodsList);
						});
					}
				}
				return ary;
			},
			jump(url) {
				if (url == 'tx') {
					uni.showModal({
						title: '爱省购提醒',
						content: '功能开发中...',
						showCancel: false,
						confirmText: '知道啦',
					});
				}
				uni.navigateTo({
					url: `/pages/index/${url}`
				})
			},
			copy(str) {
				var params = new Object();
				params.scene = 'WXSceneSession',
					params.summary = str;
				share.wxContent(params);
				uni.setClipboardData({
					data: str,
					success: () => {
						uni.showToast({
							title: '已复制邀请码',
							icon: 'success',
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.syData_head view {}

	.syData_head {
		font-weight: bold;
	}

	.inviteCode {
		color: #FFDAD4;
		display: flex;
	}

	.user_info .text {
		display: flex;
	}

	.username {
		font-size: 1rem;
	}

	.userType {
		padding: 0upx 10upx;
		height: 40upx;
		line-height: 40upx;
		background-color: #990000;
		font-size: 0.5rem;
		color: white;
		border-radius: 10upx;
	}

	.uni-media-list-logo image {
		border: 5upx solid #FF8768;
		border-radius: 150upx;
	}

	.uni-media-list-logo {
		width: 120upx;
		height: 120upx;
	}

	.teamList {
		text-decoration: underline;
	}

	.teamList,
	.user_info {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.setIcon {
		position: absolute;
		padding: 20upx;
		right: 0upx
	}

	.head {
		align-items: center;
		justify-content: center;
		color: white;
		background: #333;
		height: 300upx;
		text-align: center;
		background: url(../../static/user/user_head.png);
		padding: 40upx;
	}

	.head_title {
		font-size: 32upx;
	}

	.detail-container {
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	.hyzx .content>view {
		align-items: center;
	}

	.sy .content image {
		width: 70upx;
		height: 70upx;
	}

	.hyzx .content image,
	.other .content image,
	.other .content2 image {
		width: 60upx;
		height: 60upx;
	}

	.other .content view,
	.other .content2 view {
		flex: 1;
	}

	.other .content2 {
		margin-top: 30upx;
		text-align: center;
	}

	.other .content {
		margin-top: 20upx;
	}

	.other {
		background-color: #fff;
		border-radius: 20upx;
		margin: 20upx;
		padding: 20upx;
	}

	.hyzx view img {
		width: 100upx;
		margin: auto;
		height: 100upx;
	}

	.hyzx .content view {
		flex: 1;
	}

	.hyzx .content {
		margin-top: 20upx;
	}

	.hyzx {
		background-color: #fff;
		border-radius: 20upx;
		margin: 20upx;
		padding: 20upx;
	}

	.uni-list-cell {
		box-sizing: border-box;
	}

	.syData .content view {
		text-align: center;
		flex: 1;
	}

	.syData .content {
		width: 75%;
		margin: auto;
		font-weight: bold;
	}

	.syData .more {
		color: #666;
	}

	.syData .title2 view {
		flex: 1;
		text-align: center;
		color: #b9b9b9;
	}

	.syData .title2 {
		width: 75%;
		margin: auto;
		box-sizing: border-box;
	}

	.syData .title {
		justify-content: space-between;
	}

	.syData {
		background-color: white;
		margin: 20upx;
		border-radius: 20upx;
	}

	/* 公告 */
	.notice {
		background-color: #fff;
		padding-left: 20upx;
	}

	.sy view text {
		text-align: center;
	}

	.sy view img {
		margin: auto;
		width: 100upx;
		height: 100upx;
	}

	.sy view {
		flex: 1;
	}

	.sy {
		margin-top: 20upx;
		padding: 20upx;
		background-color: white;
	}

	.yj .yj1 text {
		text-align: center;
		font-size: 1rem;
	}

	.yj .yj1 {
		flex-direction: column;
	}

	.yj {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 20upx;
		margin: -60upx 20upx 20upx;
	}

	.yj view {
		display: flex;
		flex-direction: row;
		flex: 1;
		color: #990000;
	}

	.yj view text {
		font-weight: bold;
	}

	.title {
		padding: 10upx 10upx;
	}

	.userInfo image {
		border-radius: 1rem;
		width: 2rem;
		height: 2rem;
	}

	.userInfo {
		background-color: #333333;
		color: white;
		height: 150px;
		border-bottom-left-radius: 50px;
	}

	.page2 {
		background-color: #ECECEC;
		padding-bottom: 50px;
		padding-top: 20upx;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120upx;
		text-align: center;
	}
</style>
