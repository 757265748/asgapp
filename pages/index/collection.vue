<template>
	<view>
		<nav-bar title="我的收藏" background="#ff0000" color="#fff" @back="back"></nav-bar>
		<view class="content uni-flex uni-row">
			<product-list isShow=true :isCollection="true" :productList="collection"></product-list>
			<view class="no-collection" v-if="collection.length==0">暂无收藏商品~~~</view>
		</view>

	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import productList from '@/components/product-list.vue'
	import {
		getCollection
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				collection: [],
			}
		},
		onLoad() {
			this.dataInit();
		},
		components: {
			navBar,
			productList
		},
		methods: {
			back() {
				uni.navigateBack({
					delta:1
				})
			},
			dataInit() {
				let user = this.getUser();
				getCollection(user).then(res => {
					if (res.code != '200') {
						uni.showToast({
							title: "服务器开小差了~",
							icon:"none"
						})
					}
					this.collection = res.result;
					console.log(JSON.stringify(res.result));
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
		}
	}
</script>
<style lang="less" scoped>
	.content {
		position: relative;
		padding: 0 10px;
		margin-top: 110upx;
		height: 100%;

		.no-collection {
			margin-top: 200px;
			text-align: center;
			font-size: 16px;
			color: #ccc;
		}
	}
</style>
