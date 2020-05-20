<template>
	<view class="page">
		<view></view>
		<view class="body">
			<view class="team_list">
				<view class="team_item uni-flex row between" v-for="(item,index) in team_list" :key="index">
					<view class="" style="display: flex;align-items:center;margin-right: 10upx;">
						<image :src="item.avatar?item.avatar:'../../static/bar/selectuser.png'" style="width:80upx;height: 80upx;" mode="aspectFill"></image>
					</view>
					<view class="uni-flex uni-column between" style="flex: 4;">
						<view style="margin-left: 10upx;">{{item.username}}</view>
						<view class="userType">{{item.jurisdiction}}</view>
					</view>
					<view class="uni-flex uni-row" style="align-items: center;">
						<button size="mini" class="uni-btn-custer" :disabled="item.type==2||buttonStatus[index].upTeam" @tap="upTeam(item,index)">升为团长</button>
						<button size="mini" class="uni-btn-custer"  :disabled="item.TeamQX==1||buttonStatus[index].give_jurisdiction" @tap="give_jurisdiction(item,index)">赋予权限</button>
						<!-- <view class="uni-btn-custer" @tap="upTeam(item.id)">升为团长</view>
						<view class="uni-btn-custer" @tap="give_jurisdiction(item.id)">赋予权限</view> -->
					</view>
				</view>
				<view style="text-align: center;color: #666666;margin-top: 10px;">没有更多了</view>
			</view>
		</view>
		<view></view>
	</view>
</template>

<script>
	import {
		SJTeam,
		GetTeamEmp,
		daifukuan_merchant,
		give_jurisdiction
	} from '@/api/user.js';
	import {} from '@/api/comission.js';
	export default {
		components: {},
		data() {
			return {
				user: null,
				team_list: [],
				buttonStatus: []
			}
		},
		onShow() {
			this.user = uni.getStorageSync("user");
			let u = this.user;
		},
		onLoad() {
			this.user = uni.getStorageSync("user");
			let u = this.user;
			this.getTeamList(u.id, 1); //团员id  团队类型
			this.getTeamList(u.id, 2); //团员id  团队类型
		},
		methods: {
			//升为团长
			upTeam(item,index) {
				SJTeam({
					id: item.id
				}).then(res => {
					console.log(res);
					uni.showToast({
						title: res.msg,
						icon: "none"
					})
				});
				this.buttonStatus[index].upTeam=true;
			},
			//赋予权限
			give_jurisdiction(item,index) {
				give_jurisdiction({
					id:item.id
				}).then(res => {
					console.log(res);
					uni.showToast({
						title: res.msg,
						icon: "none"
					})
				})
				this.buttonStatus[index].give_jurisdiction=true;
			},
			//获取团员列表
			getTeamList(TeamId, TeamType) {
				GetTeamEmp({
					TeamId: TeamId,
					TeamType: TeamType,
					sort: ''
				}).then(res => {
					console.log(res);
					if (res.data.code == 200) {
						this.team_list = this.team_list.concat(res.data.result);
						this.buttonStatus=[];
						for (let item in this.team_list) {
							console.log(this.team_list[item]);
							let btnStatus = {
								upTeam: this.team_list[item].TeamType==2?true:false,
								give_jurisdiction: this.team_list[item].TeamQX==1?true:false
							}
							this.buttonStatus.push(btnStatus);
						}
						// for (let i=0;i<this.team_list.length;i++) {
						// 	console.log(this.team_list[i]);
						// 	let btnStatus = {
						// 		upTeam: false,
						// 		give_jurisdiction: false
						// 	}
						// 	this.buttonStatus.push(btnStatus);
						// 	console.log(buttonStatus[i].give_jurisdiction);
						// }
					}
				})
			}
		}
	}
</script>

<style scoped>
	.team_item {
		padding: 10upx;
		border-bottom: 1upx #666;
		border-bottom-style: dotted;
	}

	.uni-btn-custer {
		background-color: #333;
		color: #fff;
		padding: 4upx 10upx;
		margin: 0 10upx;
		border-radius: 10upx;
		height: 60upx;
		text-align: center;
	}
</style>
