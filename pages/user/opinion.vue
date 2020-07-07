<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="opinion">
			<textarea v-model="opinion_content" @input="input_change" maxlength="200" placeholder="请输入反馈意见" />
			<view class="uni-flex uni-row">
				<text>{{opinion_font_count}}</text>/
				<text>200</text>
			</view>
		</view>
		<view class="imgs" @tap="openAlbum">
			<view class="uni-icon uni-icon-plusempty"></view>
			<text>添加照片<br/>(最多3张)</text>
		</view>
		<view class="uni-flex uni-row" style="flex-wrap: wrap;">
			<view class="add-img-item" v-for="(item, index) in imgList" :key="index">
				<image class="add-img" @click="imgInfo(index)" :src="item.path" mode="aspectFill"></image>
			</view>
		</view>
		<button type="default" class="submit" @tap="sumbit">提交</button>
	</view>
</template>

<script>
	import {
		insert_opinion
	} from '../../api/user.js'
	function dateFormat(fmt, date) {
		let ret;
		const opt = {
			"Y+": date.getFullYear().toString(), // 年
			"m+": (date.getMonth() + 1).toString(), // 月
			"d+": date.getDate().toString(), // 日
			"H+": date.getHours().toString(), // 时
			"M+": date.getMinutes().toString(), // 分
			"S+": date.getSeconds().toString() // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		};
		for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
				fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			};
		};
		return fmt;
	}
	export default{
		data(){
			return {
				user:new Object(),
				imgList: [],
				paths:[],
				cloudimgList: [],
				imgCount: 3, //最多支持9张上传，可以修改
				headImg:'',
				currentH:uni.getSystemInfoSync().screenHeight,
				opinion_font_count:0,
				opinion_content:''
			}
		},
		onReady() {
			this.user=uni.getStorageSync("user");
			console.log(this.user);
		},
		methods:{
			imgInfo(i) {
				let tempList = [];
				this.imgList.forEach(img => {
					tempList.push(img.path);
				});
				console.log(tempList);
				//显示图片
				uni.previewImage({
					current: i,
					loop: false,
					urls: tempList,
					indicator: 'default'
				});
			},
			delImg(i) {
				uni.showModal({
					content: '确定删除这张吗',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(i, 1);
							this.imgCount++;
						} else if (res.cancel) {
			
						}
					}
				});
			},
			delcloudImg(i) {
				var _self = this;
				uni.showModal({
					content: '确定删除云服务器上面这张图吗',
					success: res => {
						if (res.confirm) {
							this.$cloud.deleteFile({
								fileList: [this.cloudimgList[i]],
								success(res) {},
								fail(err) {
									console.log(err);
								},
								complete(res) {
									uni.showToast({
										title: '删除成功！',
										icon: 'none'
									});
									_self.cloudimgList.splice(i, 1);
								}
							});
						} else if (res.cancel) {
			
						}
					}
				});
			},
			input_change(){
				this.opinion_font_count=this.opinion_content.length;
				if(this.opinion_content.length>=200){
					uni.showToast({
						title:"已是字数最大限制！",
						icon:'none'
					})
				}
				console.log(this.opinion_content.length);
			},
			sumbit(){
				insert_opinion({
					content:this.opinion_content,
					create_date:dateFormat('YYYY-mm-dd HH:MM:SS',new Date()),
					create_user:this.user.username,
					imgs:this.paths
				}).then(res => {
					console.log(res);
				});
			},
			openAlbum(phone) {
				if(this.imgList.length>=3){
					return
				}
				uni.chooseImage({
					// sourceType:['camera'],
					sourceType: ['album'],
					count: 1,
					sizeType: ['compressed'],
					success: e => {
						uni.showLoading({
							title: '上传图片',
							mask: false
						});
						this.imgList = [...this.imgList, ...e.tempFiles];
						this.imgCount = 3 - this.imgList.length;
						console.log(JSON.stringify(e.tempFiles));
						console.log(...e.tempFiles);
						this.$cloud.uploadFile({
							filePath: e.tempFiles[0].path,
							success: (res) => {
								//保存图片的路径
								console.log(res.fileID);
								this.paths=this.paths.concat(res.fileID);
								this.user.avatar=res.fileID;
								console.log(this.paths);
								uni.hideLoading();
								uni.showToast({
									title: '上传成功！',
									icon: 'none'
								});
							},
							fail: (err) => {
								console.log(err);
							},
							complete(){
								uni.hideLoading();
							}
						})
					}
				});
			}
		}
	}
</script>

<style>
	.add-img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
	}
	
	.add-img-del {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 8rpx;
		top: 17rpx;
		//background-color: rgba(238, 0, 0, 1);
		border-radius: 20rpx;
	}
	.add-img-item {
		/* width:210rpx;
		height:210rpx; */
		width: 180rpx;
		height: 180rpx;
		border-radius: 24rpx;
		position: relative;
		margin: 20rpx;
	}
	.add-img-box {
		display: flex;
		width: 750rpx;
		//padding: 0 40rpx;
		padding-left: 10rpx;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.submit{
		margin: 50upx 20upx 0;
		background-color: #191919;
		color: #DDBB83;
		border-radius: 40upx;
	}
	.imgs .uni-icon{
		font-size: 80upx;
		color: #DFDFDF;
	}
	.imgs text{
		font-size: 20upx;
		color: #666665;
	}
	.imgs{
		background-color: #F4F4F4;
		border-radius: 20upx;
		width: 200upx;
		height: 200upx;
		margin: 20upx 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main{
		background-color: white;
		padding: 20upx;
	}
	.opinion textarea{
		width:100%;
		border-radius: 20upx;
		background-color: #F4F4F4;
		padding: 20upx;
	}
	.opinion text{
		color: #666665;
	}
	.opinion{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
