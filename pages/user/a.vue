<template>
	<view class="uni-tab-bar">
			<view class="head back_3">
				<view>我的团队</view>
				<view>{{team_count}}</view>
				<view>我的邀请码:{{user.invitecode}}</view>
			</view>
		<scroll-view id="tab-bar" class="uni-swiper-tab" style="background-color: #E9CEA1;font-weight: bold;" scroll-x
		 :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}
				<view v-show="tabIndex==index" style="height: 4upx;background-color: #A9731A;width: 100%;margin: auto;"></view>
			</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					<!-- <block v-for="(newsitem,index2) in tab.data" :key="index2">
						
					</block> -->
					123
					<view v-if="tabIndex==1" class="item uni-flex uni-row between" v-for="(item,index) in team_list1" :key="'key'+index">
						<view class="uni-flex uni-row">
							<view class="flex_1" style="display: flex;align-items:center;"><image src="../../static/bar/selectuser.png" style="width:80upx;height: 80upx;" mode="aspectFill"></image></view>
							<view class="uni-flex uni-column">
								<view>{{item.username}}</view>
								<view class="userType_1">{{item.jurisdiction}}</view>
							</view>
						</view>
						<view class="uni-flex uni-column">
							<view>邀请人数&nbsp;{{item.count1}}&nbsp;人</view>
							<view>邀请人：{{item.inviteusername}}</view>
						</view>
					</view>
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import {
		GetTeamEmp
	} from '@/api/user.js';
	const tpl = {
		data0: {
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
			"source": "DCloud",
			"comment_count": 639
		},
		
	};
	export default{
		data() {
			return {
				sysH: uni.getSystemInfoSync().windowHeight,
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 1,
				newsitems: [],
				tabBars: [{
					name: '潜在用户',
					id: 'qzyh'
				}, {
					name: '一线团队',
					id: 'yxtd'
				},{
					name: '二线团队',
					id: 'extd'
				}],
				items1: [
					'我的订单',
					'团队订单',
					'团队奖金'
				],
				current1: 0,
				activeColor1: '#333',
				activeBack1: '#E9CEA1',
				activeBorder1: 'transparent',
				deadBack1: 'transparent',
				deadBorder1: '#fff',
				deadColor1: '#fff',
				items: [
					'全部',
					'已付款',
					'已结算',
					'已关闭'
				],
				current: 0,
				activeBack: '#E9CEA1',
				activeBorder: 'transparent',
				activeColor: '#333',
				deadBack: '#fff',
				deadBorder: 'transparent',
				deadColor: '#969696',
				orders: [],
				spends: [],
				CLSD: [],
				closed: [],
				timer: new Object(),
				relation_id: "",
				team_list1:new Object(),
				team_list2:new Object(),
				user:null,
				team_count:0,
				searchValue:''
			}
		},
		onLoad() {
			this.user=uni.getStorageSync("user");
			console.log(this.user);
			this.newsitems = this.randomfn()
			console.log(this.newsitems);
			try{
				var webView = this.$mp.page.$getAppWebview();
				webView.setTitleNViewButtonStyle(0, {
					text: '搜索',
					width: '100px',
					color: '#fff'
				});
			}catch(e){
				//TODO handle the exception
			}
			this.getTeamList(1);//传团员id
		},
		//点击键盘搜索按键
		onNavigationBarSearchInputConfirmed(e){
			console.log(e);
			this.searchTeam(this.searchValue);
		},
		//监听输入框变化
		onNavigationBarSearchInputChanged(e){
			console.log(e);
			this.searchValue=e.text;
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.text=='搜索'){
				this.searchTeam(this.searchValue);
			}
		},
		methods:{
			searchTeam(v){
				let list=this.team_list1;
				switch(this.tabIndex){
					case 0:
						list=this.team_list;
					break;
					case 1:
						list=this.team_list1;
					break;
					case 2:
						list=this.team_list2;
					break;
				}
				console.log(list);
				let listResult=list;
				for (let item in list) {
					console.log(v);
					if(v==list[item].username){
						console.log(list[item]);
						listResult.push(list[item]);
						break;
					}
				}
				switch(this.tabIndex){
					case 0:
						this.team_list=listResult;
					break;
					case 1:
						console.log(listResult);
						this.team_list1=listResult;
					break;
					case 2:
						this.team_list2=listResult;
					break;
				}
			},
			//获取团员列表
			getTeamList(TeamId){
				GetTeamEmp({
					TeamId:TeamId,
					TeamType:1,
					sort:''
				}).then(res=>{
					console.log(res);
					if(res.data.code==200){
						this.team_list1=res.data.result;
						this.team_count+=res.data.result.length;
					}
				})
				GetTeamEmp({
					TeamId:TeamId,
					TeamType:2,
					sort:''
				}).then(res=>{
					console.log(res);
					if(res.data.code==200){
						this.team_list2=res.data.result;
						this.team_count+=res.data.result.length;
					}
				})
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				for (let i = 1; i <= 10; i++) {
					// this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
			
				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
					console.log(width);
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
						console.log(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingText: '没有更多了',
						data: []
					};
					if (i < 1) {
						for (let j = 1; j <= 10; j++) {
							aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
						}
					}
					ary.push(aryItem);
				}
				return ary;
			}
		}
	}
</script>

<style>
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
	.page{
		overflow: hidden;
	}
	/* css重写 */
	.uni-tab-bar .swiper-box{
		height: calc(100%-120px)!important;
	}
	.uni-tab-bar .active {
		animation: none !important;
		-webkit-transform: none !important;
		-webkit-animation-fill-mode: none !important;
		animation-fill-mode: none !important
	}
	
	.uni-swiper-tab {
		height: 80upx;
		line-height: 70upx;
	}
	/*  */
	.headTab,
	.headTab_1 {
		padding: 20upx 0;
	}
	/* .tab-bar{
		position: fixed;
	} */
	/* .tab-bar
	.headTab,
	.headTab_1 {
		position: fixed;
	} */
	
	.headTab {
		background-color: #333;
	}
	
	.headTab_1 {
		background-color: #EEEFF1;
		box-sizing: border-box;
	}
	
	.headTab .segmented-control view {
		color: white;
	}
	
	.uni-tab-bar .active {
		color: #AA7623;
	}
	
	.swiper-box {
		background-color: #EEEFF1;
	}
	
	.item{
		margin: 15upx;
		border-bottom: 1px solid #ccc;
	}
	.userType_1{
		color: #ccc;
		font-size: .8rem;
	}
	.swiper-tab-list{
		width: 33.3%;
	}
	.head view{
		text-align: center;
		margin: 10upx;
	}
	.head{
		padding-top: 80upx;
		color: white;
		padding-bottom: 10upx;
	}
</style>
