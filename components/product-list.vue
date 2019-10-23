<template>
	<view class="page">
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index" @click="godetail(product.num_iid)">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.pict_url"></image>
					<!-- <image v-if="renderImage" class="uni-product-image" :src="product.item_url"></image> -->
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.quanhoujia}}</text>
					<text class="uni-product-price-original">￥{{product.quanhoujia}}</text>
				</view>
				<view class="uni-product-price">
					<text class="small-gray">{{product.volume}}人已购</text>
					<text class="uni-product-tip">{{product.youhuiquan}}元券</text>
				</view>
				<view v-if='isShow' class="cancle" @tap.stop="cancle(index)">
					<uni-icon type="shoucang" color="#ff0000"></uni-icon>
					<!-- 取消 -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		deleteCollection
	} from '@/api/goods.js'
	export default {
		props: {
			productList: [Array, Object],
			table: {
				type: String,
				default: 'yhq_goods'
			},
			isShow: {
				type: [Boolean, String],
				default: false
			}
		},
		data() {
			return {
				renderImage: true
			};
		},
		computed:{
			quanhoujia(){
				return 
			}
		},
		onLoad() {
			console.log(this.productList);
		},
		methods: {
			godetail(id) {
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}&table=${this.table}`
				})
			},
			cancle(index) {
				console.log('需要取消的ID', this.productList[index].num_iid)
				deleteCollection({
					phone: this.getUser(),
					num_iid: this.productList[index].num_iid
				}).then(res => {
					uni.showToast({
						title: '已取消',
					})
					this.productList.splice(index, 1);
				})
			},
			getUser() {
				try {
					let user = uni.getStorageSync('user');
					return user.phone
				} catch (e) {
					//TODO handle the exception
				}
			}
		},

	};
</script>

<style lang="less" scoped>
	/* product */
	.uni-product-list {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.uni-product {
		/* padding: 20upx; */
		display: flex;
		flex-direction: column;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #ff0000;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	.small-gray {
		font-size: 24upx;
		color: #aeaeae;
	}

	.cancle {
		text-align: center;
	}
</style>
