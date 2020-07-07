<template>
	<view class="main">
		<view class="head">
			<view class="title uni-flex uni-column">
				<image src="../../static/logoB.png" mode=""></image>
				<text>爱省购商务招商合作</text>
			</view>
		</view>
		<view class="body">
			<view class="title">招商合作:</view>
			<view class="item uni-flex uni-column" v-for="(item,index) in data">
				<view class="content">{{item.news_title}}</view>
				<view class="call_me uni-flex uni-row">
					<view v-html="item.news_content"></view>
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
				title:'招商合作',
				currentH:uni.getSystemInfoSync().screenHeight,
				data:[]
			}
		},
		onReady(){
			this.get_newslist();
		},
		methods:{
			get_newslist(){
				news.get_newslist({
					news_type:this.title
				}).then(res=>{
					console.log(res);
					this.data=res.data;
				})
			}
		}
	}
</script>

<style>
	.body .title{
		font-weight: bold;
		font-size: 1rem;
		padding: 0 20upx 30upx;
	}
	.head .title text{
		text-align: center;
		font-size: 1rem;
	}
	.head .title image{
		height: 200rpx;
		width: 200rpx;
		border-radius: 200rpx;
	}
	.head .title{
		justify-content: center;
		align-items: center;
		padding: 50upx;
	}
	.body .item{
		border-top: 1px solid #ccc;
		padding: 20upx;
	}
</style>
