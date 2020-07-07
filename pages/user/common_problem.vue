<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="list">
			<view class="item uni-flex uni-row" v-for="(item,index) in data">
				<view class="image">
					<image src="../../static/avatar.jpg" mode=""></image>
				</view>
				<view class="question">
					<view class="q_item" v-for="(item_q,index_q) in item.item_qs" v-html="item_q"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		news
	} from '@/api/news.js'
	export default{
		data(){
			return {
				currentH:uni.getSystemInfoSync().screenHeight,
				title: '常见问题',
				data:[]
			}
		},
		onReady() {
			this.common_problem();
		},
		methods:{
			common_problem() {
				news.common_problem({
					news_type: this.title
				}).then(res => {
					let data = res.data;
					this.data = res.data;
					for (let item in data) {
						this.data[item].item_qs=[];
						console.log(data[item].news_content.split('</p>'));
						let list_q=data[item].news_content.split('</p>');
						list_q.pop();
						for(let item_q in list_q){
							list_q[item_q]=list_q[item_q]+'</p>';
							this.data[item].item_qs.push(list_q[item_q]);
						}
					}
					console.log(this.data);
				})
			},
		}
	}
</script>

<style>
	.item{
		align-items: center;
		height: 200rpx;
		margin: 20upx 0;
	}
	.main{
		background-color: #F5F5F5;
	}
	.q_item{
		border-bottom: 1px solid #F5F5F5;
		padding: 0 20upx;
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	.question{
		background-color: white;
		height: 100%;
		box-sizing: border-box;
		margin-left: 10upx;
	}
	.list{
		margin: 20upx 40upx;
	}
	.image{
		height: 100%;
	}
	image{
		width: 200rpx;
		height: 100%;
	}
</style>
