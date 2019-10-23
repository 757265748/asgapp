<template>
	<view class="content">
		<nav-bar :title="title" @back='back'></nav-bar>
		<view class="container">
			<view class="screen-wrap">
				<view :class="{on :active==0}" @click="screentap('0')">精选</view>
				<view :class="{on :active==1}" @click="screentap('1')">销量</view>
				<view :class="{on :active==2}" @click="screentap('2')">最新</view>
				<view class='jg-wrap' @click="screentap('3')">
					<text :class="{on :active==3}">价格</text>
					<view class="jgicon">
						<uni-icon type="uparrow" size="12" :color="up">
						</uni-icon>
						<uni-icon type="downarrow" size="12" :color="down">
						</uni-icon>
					</view>
				</view>
			</view>
			<view class="good-wrap">
				<product-list :productList="recommend" :table='type'></product-list>
				<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar.vue'
	import productList from "@/components/product-list.vue"
	import uniLoadMore from '@/components/uni-load-more.vue';
	import {
		getOtherGood,
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				type:'',
				screen:'',
				jg:'',
				page:1,
				active: 0,
				isup: 3,
				count: 0,
				recommend: null,
				title:"",
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
			}
		},
		components: {
			navBar,
			productList,
			uniLoadMore
		},
		computed: {
			up() {
				let color = this.isup == 0 ? '#ff0000' : '#ccc'
				return color
			},
			down() {
				let color = this.isup == 1 ? '#ff0000' : '#ccc';
				return color;
			}
		},
		onLoad(option) {
			this.type = option.type || '';
			this.title = option.title || '爱省购';
			this._getGoodsList({type:this.type});
		},
		//到底加载更多
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let ret = getOtherGood({
				page: this.page,
				type: this.type,
				screen:this.screen,
				jg: this.jg
			});
			ret.then(res => {
				if (res.code == 200) {
					if (res.result.length == 0) {
						this.loadingType = 3;
						return
					}
					this.recommend = this.recommend.concat(res.result);
					this.page++;
					this.loadingType = 0;
				} else {
					this._showError()
				}
			})
		},
		methods: {
			back(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			_showError() {
				uni.showToast({
					title: "出错了...",
					icon: 'none',
					mask: true
				})
			},
			//条件筛选
			screentap(index) {
				this.screen = index;
				if (index == 3) {
					this.active = index;
					this.isup = this.count % 2 == 0 ? this.isup = 0 : this.isup = 1;
					this.count++;
					console.log("this.isip", this.isup)
					this.jg = this.isup;
					this._getGoodsList({screen:index,jg:this.isup});
					return
				}
				this._getGoodsList({screen:index});
				this.active = index
				this.isup = 3;
			},
			_getGoodsList({page = 0, type = '', screen = '', jg = ''}) {
				uni.showLoading({
					title: '加载中..'
				})
				let ret = getOtherGood({
					page,
					type:this.type,
					screen,
					jg
				});
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.recommend = res.result;
						console.log(this.recommend)
					} else {
						this._showError()
					}
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100%;
		height: 100%;
	}

	.container {
		position: relative;
		margin-top: 100upx;
		padding: 0 10upx;
		width: calc(100% - 20upx);
		height: 100%;
	}

	.screen-wrap {
		position: fixed;
		top: 0;
		height: 30upx;
		width: 100%;
		margin-top: 120upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20upx 0;
		background: #fff !important;
		border-bottom: 1px solid #f8f8f8;
		z-index: 99;

		.jg-wrap {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}

	// 选中状态
	.on {
		color: red !important;
	}

	.good-wrap {
		margin-top: 212upx;
		width: 100%;
		height: 100%;
		padding-bottom: 20px;
	}
</style>
