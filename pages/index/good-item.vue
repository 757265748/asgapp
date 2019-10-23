<template>
	<view class="content">
		<nav-bar title="聚划算"></nav-bar>
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
			<scroll-view scroll-y>
				<block>
					<product-list></product-list>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/nav-bar.vue'
	import productList from "@/components/product-list.vue"
	import {
		getGoodsList,
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				active: 0,
				isup: 3,
				count: 0,
				productList: null,
			}
		},
		components: {
			navBar,
			productList,
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
		methods: {
			//条件筛选
			screentap(index) {
				if (index == 3) {
					this.active = index;
					this.isup = this.count % 2 == 0 ? this.isup = 0 : this.isup = 1;
					this.count++;
					console.log("this.isip", this.isup)
					this._getGoodsList({screen:index,jg:0});
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
				let ret = getGoodsList({
					page,
					type,
					screen,
					jg
				});
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.productList = res.result;
					} else {
						this._showError()
					}
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.content{
		width: 100%;
		height: 100%;
	}
	.container {
		position: relative;
		// margin-top: 100upx;
		padding: 0 10upx;
		width: calc(100% - 20upx);
		height: 100%;
	}

	.screen-wrap {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 30upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20upx 0;
		background: #fff;

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
</style>
