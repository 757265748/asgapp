<template>
	<view class="content">
		<!-- <nav-bar title="搜索" color="#ffffff" background="#ff0000" @back="back"></nav-bar> -->
		<!-- <view class="search-box">
			<view class="wrap">
				<view class="placeholder">
					<uni-icon type="search" color="#b5b5b5" size="18"></uni-icon>
					<input @confirm='submit' placeholder="搜索商品关键字" @input='_getinput' :value="keyword" />
				</view>
				<uni-icon @click="clear" v-if="isShow" type="clear" color="#b5b5b5" size="18"></uni-icon>
			</view>
		</view> -->
		<view class="container">
			<block v-for="(item,index) in result">
				<media-list :options="item" @click="goDetail(item)"></media-list>
			</block>
			<!-- <product-list :productList="result" table='yhq_goods'></product-list> -->
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import mediaList from '@/components/mediaList.vue'
	import productList from '@/components/product-list.vue'
	import uniLoadMore from '@/components/uni-load-more.vue'
	import {
		getKeyWord,
		getGoodDetail,
		getRelation_id
	} from "@/api/goods.js"
	export default {
		data() {
			return {
				user:null,
				isShow: false,
				result: null,
				keyword: '',
				goodsId:'',
				page: 1,
				loadingType: 0,
				contentText: {
					contentdown: "没有更多了",
					contentrefresh: "正在加载...",
					contentnomore: "正在加载..."
				},
			}
		},
		components: {
			navBar,
			productList,
			uniLoadMore,
			mediaList
		},
		onLoad(option) {
			this.user = uni.getStorageSync('user');
			this.keyword = option.keyword||'';
			this.goodsId=option.goodsId||'';
			console.log(JSON.stringify(option));
			this.getData();
		},
		onNavigationBarSearchInputChanged(e){
			this.getinput(e);
			console.log(e);
		},
		onNavigationBarSearchInputConfirmed(e){
			this.onTap(e.text);
		},
		//到底加载更多
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			console.log(this.page);
			let ret = getKeyWord(this.keyword, this.page);
			ret.then(res => {
				if (res.code == 200) {
					if (res.result.length == 0) {
						this.loadingType = 3;
						return
					}
					this.result = this.result.concat(res.result);
					this.page++;
					this.loadingType = 0;
				} else {
					this.loadingType = 3;
					uni.showToast({
						title: '没有更多了',
						icon:'none'
					})
					return
				}
			})
		},
		methods: {
			goDetail(e) {
				if (!this.user) {
					uni.showToast({
						title: '未登录!',
						icon: 'none'
					});
					return;
				}
				console.log(this.user.pid);
				if(this.user.pid == ''){
					uni.showToast({
						title: '未授权!',
						icon: 'none'
					});
					return;
				}
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				console.log(e);
				// #ifdef APP-PLUS
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${e.item_id}`
				});
				// #endif
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200);
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			getRelationId() {
				console.log(JSON.stringify(uni.getStorageSync("user")));
				try {
					if(uni.getStorageSync("user").pid==""){
						getRelation_id({
							phone:uni.getStorageSync("user").phone
						}).then(res=>{
							console.log(res.data);
							if(res.code==200){
								if(res.data==""){
									uni.showToast({
										title:'你还没有授权淘宝',
										icon:'none'
									})
									 return 0;
								}
								else return res.data;
							}
						})
					}else{
						return uni.getStorageSync("user").pid
					}
				} catch (e) {
					console.log(e);
				}
			},
			getData() {
				uni.showLoading({
					title: '搜索中'
				})
				if(this.goodsId==''){
					let ret = getKeyWord(this.keyword,1);
					ret.then(res => {
						console.log(JSON.stringify(res));
						uni.hideLoading();
						if (res.code == 200) {
							this.result = res.result;
							console.log('搜索结果', this.result);
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							})
						}
					})
				}else{
					console.log(this.getRelationId());
					getGoodDetail(Number(this.goodsId),Number(this.getRelationId())).then(res=>{
						uni.hideLoading();
						console.log(res.data);
						this.result=[];
						let goods=res.data.item_info;
						goods.item_id=res.data.item_id;
						goods.youhuiquan=res.data.youhuiquan;
						goods.commission_rate=res.data.max_commission_rate*100;
						this.result.push(goods);
						console.log(this.result[0]);
					})
				}
			},
			submit(e) {
				this.keyword = e.detail.value.trim();
				this.getData()
			},
			getinput(e){
				this.value = e.text;
				if (this.value) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			},
			_getinput(e) {
				this.keyword = e.detail.value.trim();
				if (this.keyword) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			},
			clear() {
				this.keyword = ''
				this.isShow = false;
			},
			onTap(value) {
				this.keyword = value
				this.isShow = true
				this.getData();
				// console.log(value)
			},
		}
	}
</script>
<style lang="less" scoped>
	.search-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 102upx;
		border-bottom: 1px solid #f8f8f8;
		margin-top: 120upx;
		background: #fff;
		z-index: 999;
		.wrap {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			margin:10upx  auto 0 auto;
			width: 75%;
			height: 50upx;
			padding: 10upx;
			border: 1px solid #eee;
			border-radius: 10upx;
			background: #fff;
		}

		.placeholder {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 0 auto;
			width: 100%;

		}
	}
	.search-title {
		span {
			margin-top: 30rpx;
			color: #000;
			font-size: 30rpx;
			font-weight: 700;
		}
	}

	.all-search-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		margin-top: 30rpx;
	}

	.search-tag {
		margin: 10rpx 20rpx;
		padding: 10rpx 20rpx;
		border-radius: 5px;
		/* margin-top:20rpx;  */
		font-size: 16rpx;
		color: #333;
		font-weight: 600;
		background: #f0f0f0;
	}

	.history {
		margin-top: 50rpx;

		.history-title {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-right: 80rpx;
		}
	}
</style>
