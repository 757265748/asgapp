<template>
	<view class="page" :style="{height:currentH+'px'}">
		<view class="form-group uni-flex uni-row">
			<view class="name">{{name}}:&nbsp;&nbsp;</view>
			<view class="input"><input type="text" v-model="input" /></view>
		</view>
		<view class="btn" @tap="submit">确定</view>
	</view>
</template>

<script>
	import {
		uploadHeadImg,
		getUserInfo,
		set_info,
		excute_set_info
	} from '@/api/user.js'
	export default{
		data(){
			return {
				currentH:uni.getSystemInfoSync().windowHeight,
				name:'',
				input:'',
				user:new Object()
			}
		},
		onLoad(options) {
			console.log(options);
			this.user=uni.getStorageSync("user");
			this.name=options.name;
			this.key=options.key;
			this.input=options.input;
		},
		methods:{
			submit(){
				try{
					excute_set_info({
						id:uni.getStorageSync("user").id,
						columnName:this.key,
						columnValue:this.input
					}).then(res=>{
						console.log(res);
						if(res.code==200){
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
							uni.navigateBack({
								delta:1
							})
						}
					})
				}catch(e){
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style>
	.page{
		background-color: #eaeaea;
		position: fixed;
		width: 100%;
	}
	.form-group{
		margin: 30upx 0;
		padding: 10upx 20upx;
		background-color: white;
	}
	.name{
		flex: 1;
	}
	.input{
		flex: 4;
	}
</style>
