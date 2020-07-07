<template>
	<view class="main">
		<view class="background"></view>
		<view class="head">
			<view class="background">
				<view class="info">
					<view class="headImg">
						<image :src="user.avatar||'../../static/logoB.png'" mode="aspectFit"></image>
					</view>
					<view>{{user.username}}</view>
					<view>{{user.jurisdiction}}</view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="grade">
				<view class="title">你已经是最高等级</view>
				<view class="list">
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
					<view class="item">
						<image src="../../static/avatar.jpg" mode="aspectFit"></image>
						<view>购物能反佣</view>
						<text>最高90%</text>
					</view>
				</view>
			</view>
			<view class="team task">
				<view class="direction" @tap="togglePopup('center', 'image')">团队说明</view>
				<view>团队人数（非任务）</view>
				<view class="dare">极限挑战</view>
				<view>一线团队+二线团队</view>
				<view class="uni-flex uni-row slider-group">
					<view class="slider">
						<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#FFF8A4" block-color="#8A6DE9"
						 block-size="0" />
					</view>
					<view class="value">{{sliderValue}}/100（人）</view>
				</view>
			</view>
			<view class="income task">
				<view class="direction">团队说明</view>
				<view>团队人数（非任务）</view>
				<view class="dare">极限挑战</view>
				<view>一线团队+二线团队</view>
				<view class="uni-flex uni-row slider-group">
					<view class="slider">
						<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9"
						 block-size="20" />
					</view>
					<view class="value">0/100（人）</view>
				</view>
			</view>
			<view class="remark task">
				<view class="direction">团队说明</view>
				<view>团队人数（非任务）</view>
				<view class="dare">极限挑战</view>
				<view>一线团队+二线团队</view>
				<view class="uni-flex uni-row slider-group">
					<view class="slider">
						<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9"
						 block-size="20" />
					</view>
					<view class="value">0/100（人）</view>
				</view>
			</view>
		</view>
		<uni-popup ref="showimage" :type="type" :mask-click="true" @change="change">
			<view class="content">
				<view class="background">
					<view class="text">
						"我的团队"里面显示的人数,
						是"一线团队"+"二线团队"的人数.
					</view>
				</view>
				<view class="title">极限挑战</view>
				<view class="btn_group uni-flex uni-row">
					<button size="mini" type="default">去邀请好友</button>
					<button size="mini" type="default">赚佣金</button>
				</view>
				<view class="uni-image-close" @click="cancel('image')">
					<view class="line"></view>
					<view class="uni-icon uni-icon-clear" style="color: white;"></view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import popup from '@/components/uni-popup.vue'
	export default {
		data() {
			return {
				type: '',//popup
				currentH: uni.getSystemInfoSync().screenHeight - 45,
				user: new Object(),
				sliderValue:0
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			this.currentH = uni.getSystemInfoSync().screenHeight - plus.statusBarHeight;
			// #endif
			this.user = uni.getStorageSync("user");
			console.log(this.user);
			console.log(this.currentH);
		},
		methods: {
			a(){
				console.log(111);
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			togglePopup(type, open) {
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break
			
					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			sliderChange(e) {
				console.log('value 发生变化：' + e.detail.value)
				this.sliderValue=e.detail.value;
			}
		}
	}
</script>

<style>
	uni-slider .uni-slider-handle-wrapper{
		height: 16upx;
	}
	.text{
		border: 1px solid orange;
		padding: 10upx;
		background-color: #fff3e2;
	}
	.content{
		width: 80%;
		margin: auto;
		padding: 10upx 0;
		white-space: normal;
		background-color: white;
		border-radius: 20upx;
	}
	.title{
		text-align: center;
		margin: 20upx 0;
	}
	.content .background{
		background-color: #ccc;
		margin: 10upx 10upx;
		padding: 10upx 10upx;
	}
	.line{
		height: 160upx;
		width: 2upx;
		margin: auto;
		background-color: #333;
		position: absolute;
		left: 49.9%;
		top: -156upx;
		margin: auto;
		z-index: -1;
	}
	.uni-image-close {
		text-align: center;
		position: relative;
		top: 160upx;
	}
	.uni-slider-thumb{
		display: none;
	}
	.dare{
		padding: 5upx 10upx;
		background: linear-gradient(to right,black,#bd9244);
		color: white;
		width: 120rpx;
		border-radius: 10upx;
		text-align: center;
		font-size: .5rem;
		margin: 20upx;
	}
	.direction{
		position: absolute;
		right: 0;
		background-color: yellow;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		padding: 5upx 10upx;
		box-sizing: border-box;
		font-size: .5rem;
	}
	.body{
		padding-bottom: 20upx;
	}
	.slider-group>.slider {
		flex: 8;
	}

	.slider-group>.value {
		flex: 5;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.task {
		margin: 20upx 20upx 0;
		padding: 20upx;
		border-radius: 10upx;
		background-color: white;
		position: relative;
	}
	.task view{
		font-size: .5rem;
	}

	.grade {
		height: 600rpx;
		background-color: white;
		margin: 20upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border-radius: 10upx;
	}

	.grade .title {
		box-sizing: border-box;
		display: flex;
		flex: 2;
		justify-content: center;
		align-items: center;
	}

	.grade .list {
		display: flex;
		flex: 9;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.grade .list .item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 200rpx;
		height: 200rpx;
	}

	.head .info {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20upx;
	}

	.head>.background {
		width: 100%;
		height: 300rpx;
		background-color: #EA4D3E;
	}

	.head .info view {
		text-align: center;
		color: white;
	}

	.head {
		height: 220rpx;
	}
	/* .head .info .headImg {
		width: 100rpx;
	} */
	.headImg image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
	}

	.main {
		background-color: #ccc;
		overflow: hidden;
	}

	/* 
	.main>.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #ccc;
		z-index: -2;
	} */
</style>
