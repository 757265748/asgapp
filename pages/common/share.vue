<template>
	<view class="main" :style="{height:heightH+100+'px'}">
		<view class="head">奖励收益预估:￥{{shares.yj}}</view>
		<view class="body">
			<view class="goodsDes" id="stone">
				<view class="title">
					<textarea @input="bindTextAreaBlur" :value="shares.title" style="height: 50px;" />
					</view>
				<view class="text">[原价]&nbsp;{{shares.zk_final_price}}元</view>
				<view class="text">[券后价]&nbsp;{{shares.reserve_price}}元</view>
				<view class="text" v-if="syShow">——————</view> 
				<view class="text" v-if="syShow">[用爱省购再省]&nbsp;{{shares.yj}}元</view>
				<view class="text" v-if="yqmShow">——————</view>
				<view class="text" v-if="yqmShow">[邀请码]&nbsp;{{shares.invitecode}}</view>
				<view class="text" v-if="tklShow">——————</view>
				<view class="text" v-if="tklShow">{{shares.copykey}}</view>
				<view class="text" v-if="linkShow">——————</view>
				<view class="text" v-if="linkShow">[商品短链接]<br/>{{shares.item_url}}</view>
			</view>
			<view class="controls">
				<view class="checkControls">
					<checkbox-group>
						<label @tap="checkboxChange('tkl')">
							<checkbox :checked="tklShow" value="tkl" color="#FFCC33" style="transform:scale(0.7)" />淘口令
						</label>
						<label @tap="checkboxChange('sy')">
							<checkbox :checked="syShow" value="sy" color="#FFCC33" style="transform:scale(0.7)" />显示收益
						</label>
						<label @tap="checkboxChange('yqm')">
							<checkbox :checked="yqmShow" value="yqm" color="#FFCC33" style="transform:scale(0.7)" />邀请码
						</label>
						<label @tap="checkboxChange('link')">
							<checkbox :checked="linkShow" value="link" color="#FFCC33" style="transform:scale(0.7)" />商品短链接
						</label>
					</checkbox-group>
				</view>
				<view class="copyControls">
					<view @tap="copykey('tkl')">仅复制淘口令</view>
					<view @tap="copykey('link')">仅复制链接</view>
				</view>
			</view>
			<view class="photos">
				<view class="mainPhoto">
					<view class="image">
						<image :src="shares.imgUrl" style="width: 100%;height: 100%;" mode=""></image>
					</view>
				</view>
				<view class="smallPhoto">
					<view>
						<view v-for="(item,index) in shares.small_images" style="position: relative;">
							<image :src="item" style="width: 100%;height: 100px;" mode=""></image>
							<!-- <checkbox @tap="checkboxChange('img',item,index)" class="imgChecked" :checked="imgDownloads[index]" :value="item" color="#FFCC33" style="transform:scale(0.7)" /> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foot">
			<button type="primary" size="mini" @tap="copykey('wa');">复制分享文案</button>
			<button type="primary" size="mini" @click="togglePopup('bottom-share')">分享图片</button>
		</view>
		<uni-popup :show="type === 'bottom-share'" style="z-index: 9999;" position="bottom" @hidePopup="togglePopup('')">
			<view style="display: block;">
				<view class="bottom-title">分享到</view>
				<view class="bottom-content">
					<view v-for="(item, index) in bottomData" :key="index" class="bottom-content-box">
						<view @tap="share(item.text)">
							<view :class="item.name" class="bottom-content-image">
								<text class="icon">{{ item.icon }}</text>
							</view>
							<view class="bottom-content-text">{{ item.text }}</view>
						</view>
					</view>
				</view>
				<view class="bottom-btn" @click="togglePopup('')">取消分享</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup.vue'
	import downloader from '@/common/js/img-downloader.js';
	import {addSendCircle,sendCircleExisit,shareCount} from '@/api/goods.js'
	export default {
		components:{
			uniPopup
		},
		onShow() {
			uni.hideLoading();//防止分享时用户留在微信界面导致的持续加载问题
		},
		onLoad(options) {
			this.id=options.id;
			console.log(options); 
			this.shares=options;
			this.shares.small_images=this.shares.small_images.split(",");
			console.log(this.shares.small_images);
			console.log("http://39.108.215.49:8009/"+uni.getStorageSync("invitecode")+"/"+uni.getStorageSync("invitecode")+".png");
			uni.getSystemInfo({
			　　success: function(res) { // res - 各种参数
			　　   console.log(res.windowWidth); // 屏幕的宽度 
			　　    let info = uni.createSelectorQuery().select("#stone");
			　　　  　info.boundingClientRect(function(data) { //data - 各种参数
			　　　  　console.log(data)  // 获取元素宽度
			　　    }).exec()
			       }
			});
			this.imgs.push(this.shares.imgUrl);
			// this.shares.imgUrl="http://10.10.10.8:85/SerFile/"+uni.getStorageSync("invitecode")+"/"+uni.getStorageSync("invitecode")+".png"
			// setTimeout(function(){
				
			// },1500)
		},
		data() {
			return {
				shares:new Object(),
				heightH: uni.getSystemInfoSync().windowHeight,
				type: '',
				id:'',
				shareCount:0,
				shareImg:false,
				bottomData: [{
						text: '微信好友',
						icon: '\ue6a4',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx'
					},
					{
						text: '发圈',
						icon: '\ue647',
						name: 'wx'
					},
					// {
					// 	text: 'QQ好友',
					// 	icon: '\ue66b',
					// 	name: 'qq'
					// },
				],
				tklShow:false,
				syShow:false,
				yqmShow:false,
				linkShow:false,
				imgDownloads:[false,false,false,false],
				imgs:[]
			}
		},
		onBackPress(e) {
			uni.setStorageSync("webview",true);//从webview返回时  取缓存值的标记
			// uni.navigateTo({
			// 	url:'/pages/common/goods-detail?id='+this.id
			// })
		},
		methods: {
			bindTextAreaBlur: function (e) {
				this.shares.title=e.detail.value;
				console.log(e.detail.value)
			},
			//判断checkbox
			checkboxChange: function (type,src,index) {
				if(type=='sy'){
					this.syShow=this.syShow?false:true;
				}else if(type=="yqm"){
					this.yqmShow=this.yqmShow?false:true;
				}else if(type=="link"){
					this.linkShow=this.linkShow?false:true;
				}else if(type=="tkl"){
					this.tklShow=this.tklShow?false:true;
				}else if("img"){
					this.imgDownloads[index]=this.imgDownloads[index]?false:true;
					if(this.imgDownloads[index]==true){
						console.log(this.imgDownloads[index]);
						this.imgs.push(src);
						console.log(this.imgs);
						this.imgDownloads[index]=false;
					}else{
						console.log(this.imgDownloads[index]);
						this.imgs.splice(index,1);
						console.log(this.imgs);
					}
				}
			},
			togglePopup(type) {
				this.type = type;
			},
			//复制淘口令
			copykey(type) {
				if(type=='tkl'){
					uni.setClipboardData({// this.shares.title+this.shares.short+
						data: this.shares.copykey,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						} 
					});
				}else if(type=='link'){
					uni.setClipboardData({
						data: this.shares.item_url,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						}
					});
				}else if(type=='wa'){ 
					console.log(this.shares.title);
					var data=this.shares.title+"\n[原价] "+this.shares.zk_final_price+"\n[券后价] "+this.shares.reserve_price;
					console.log(this.syShow);
					console.log(this.yqmShow);
					console.log(this.linkShow);
					if(this.syShow){
						console.log(0);
						data+="\n[用爱省购再省] "+this.shares.yj; 
					}if(this.yqmShow){
						console.log(1);
						data+="\n[邀请码] "+this.shares.invitecode;
					}if(this.linkShow){
						console.log(2);
						data+="\n[商品链接]\n"+this.shares.item_url;
					}if(this.tklShow){
						console.log(3);
						data+="\n[淘口令]\n"+this.shares.copykey;
					}
					uni.setClipboardData({
						data: data,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						} 
					});
				}
			},
			saveImg(scene,type){
				let that = this;
				let imgs = new Array();
				for(let i in this.shares.small_images){
					console.log(this.shares.small_images[i]);
					imgs.push(this.shares.small_images[i])
				}
				// imgs.push(this.shares.imgUrl);//带二维码的图片
				// let newImgSrcs = [];
				// let obj = this.shares.imgSrcs;
				// for (let item in obj) {
				// 	newImgSrcs.push(obj[item].image);
				// }
				// console.log(JSON.stringify(newImgSrcs));
				// uni.navigateTo({
				// 	url: `/pages/common/share?id=${this.shares.goodsId}&pict_url=${this.shares.pict_url}&youhuiquan=${this.shares.youhuiquan}&yj=,
				// 	${this.shares.yj}&title=${this.shares.title}&zk_final_price=${this.shares.zk_final_price}&reserve_price=
				// 	${this.shares.reserve_price}&small_images=${newImgSrcs}&copykey=${this.shares.comment}&item_url=
				// 	${this.shares.short_url}&invitecode=${this.shares.invitecode}&imgUrl=${this.imgUrl}`
				// })
				that.type = ''; //还原底部
				if (imgs.length >= 1) {
					console.log(imgs.length)
					for (var item in imgs) {
						console.log(imgs[item])
						let promise = downloader.load(imgs[item], 'img'+item); //下载
						if (item >= imgs.length - 1) {
							console.log(item);
							promise.then(([err, res]) => { //下载结果
								console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
								uni.hideLoading();
								// #ifdef APP-PLUS
								if (res.errMsg == "saveImageToPhotosAlbum:ok") {
									uni.showModal({
										content: "图片已保存至手机图库\n文案已自动复制",
										showCancel: true,
										confirmText: "打开微信",
										success(res) {
											if (res.confirm) {
													// uni.share({
													// 	provider: "weixin",
													// 	scene: scene,
													// 	type: type,
													// 	href: this.shares.item_url,
													// 	title: this.shares.title,
													// 	summary: this.shares.item_description,
													// 	imageUrl: "http://39.108.215.49:8009/20191113/20191113150404456WaterMarkfinish.png",
													// 	success: function(res) {
													// 		console.log("success:" + JSON.stringify(res));
													// 	},
													// 	fail: function(err) {
													// 		console.log("fail:" + JSON.stringify(err));
													// 	}
													// });
												plus.runtime.openURL(`weixin://`);
												that.type = ''; //还原底部
											} else {
												that.type = ''; //还原底部
											}
										}
									})
								}
								// #endif
								// #ifdef H5
								if (res.statusCode == 200) {
									uni.showModal({
										content: "图片已保存至手机图库\n文案已自动复制",
										showCancel: true,
										confirmText: "打开微信",
										success(res) {
											if (res.confirm) {
												location = "weixin://";
												that.type = ''; //还原底部
											} else {
												that.type = ''; //还原底部
											}
										}
									})
								}
								// #endif
							});
						}
					}
					return;
				}
			},
			share(value) {
				uni.showLoading({
					title:'请稍等...',
					mask:true
				})
				let that = this;
				// if(this.imgs.length>=1){
				// 	for (var item in this.imgs) {
				// 		let promise = downloader.load(this.imgs[item], item); //下载
				// 		if(item>=this.imgs.length){
				// 			promise.then(([err, res])=>{                 //下载结果
				// 			    console.log(err, res);                   // err 和 res 只会有一个存在，另一个为null  
				// 				// #ifdef APP-PLUS
				// 				if(res.errMsg=="saveImageToPhotosAlbum:ok"){
				// 					uni.showModal({
				// 						content:"图片已保存至手机图库\n文案已自动复制",
				// 						showCancel:true,
				// 						confirmText:"打开微信",
				// 						success(res) {
				// 							if(res.confirm){
				// 								console.log("weixin");
				// 								location="weixin://"
				// 							}
				// 						}
				// 					})
				// 				}
				// 				// #endif
				// 				// #ifdef H5
				// 				if(res.statusCode==200){
				// 					uni.showModal({
				// 						content:"图片已保存至手机图库\n文案已自动复制",
				// 						showCancel:true,
				// 						confirmText:"打开微信",
				// 						success(res) {
				// 							if(res.confirm){
				// 								location="weixin://"
				// 							}
				// 						}
				// 					})
				// 				}
				// 				// #endif
				// 			});
				// 		}
				// 	}
				// 	return; 
				// }
				if(value=="微信好友"){
					// this.saveImg('WXSceneSession',0);
					
					// let promise = downloader.load(this.shares.imgUrl, 'image'); //下载
					// promise.then(([err, res]) => { //下载结果
					// 	console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
					// 	uni.hideLoading();
					// 	if (res.errMsg == "saveImageToPhotosAlbum:ok") {
					// 		uni.showModal({
					// 			content: "图片已保存至手机图库\n文案已自动复制",
					// 			showCancel: true,
					// 			confirmText: "打开微信",
					// 			success(res) {
					// 				if (res.confirm) {
					// 					console.log("weixin");
					// 					plus.runtime.openURL(`weixin://`);
					// 					that.shareAdd++; //页面分享次数+1
					// 					that.sendCircle(); //数据库分享次数更新
					// 				}else{
					// 					that.type='';//还原底部
					// 				}
					// 			}
					// 		})
					// 	}
					// });
					that.type='';//还原底部
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: this.shares.item_url,
						title: this.shares.title,
						summary: this.shares.item_description,
						imageUrl: this.shares.imgUrl,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						},
						complete() {
							uni.hideLoading();
						}
					});
				}else if(value=="朋友圈"){
					this.saveImg('WXSenceTimeline',0);
					// let promise = downloader.load(this.shares.imgUrl, 'image'); //下载
					// promise.then(([err, res]) => { //下载结果
					// 	console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
					// 	uni.hideLoading();
					// 	if (res.errMsg == "saveImageToPhotosAlbum:ok") {
					// 		uni.showModal({
					// 			content: "图片已保存至手机图库\n文案已自动复制",
					// 			showCancel: true,
					// 			confirmText: "打开微信",
					// 			success(res) {
					// 				if (res.confirm) {
					// 					uni.share({
					// 					    provider: "weixin",
					// 					    scene: "WXSenceTimeline",
					// 					    type: 2,
					// 					    imageUrl: that.shares.imgUrl,
					// 					    success: function (res) {
					// 							uni.hideLoading();
					// 					        console.log("success:" + JSON.stringify(res));
					// 					    },
					// 					    fail: function (err) {
					// 							uni.hideLoading();
					// 					        console.log("fail:" + JSON.stringify(err));
					// 					    }
					// 					}); 
					// 					// console.log("weixin");
					// 					// plus.runtime.openURL(`weixin://`);
					// 					that.shareAdd++; //页面分享次数+1
					// 				}else{
					// 					that.type='';//还原底部
					// 				}
					// 			}
					// 		})
					// 	}
					// });
				}else if(value=="QQ好友"){
					uni.share({
						provider: "qq",
						type: 2,
						imageUrl: this.shares.small_images[0],
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				}else if(value=="发圈"){
					sendCircleExisit({
						goodsId:this.id
					}).then(res=>{
						uni.hideLoading();
						console.log(this.id);
						console.log(res.data);
						//如果该商品已发圈则分享数+1
						if(res.data.length>0){
							uni.showToast({
								title:'该商品已经发过圈啦 ！',
								icon:'none'
							})
							// shareCount({
							// 	goodsId:this.id,
							// 	shareCount:1
							// }).then(res=>{
							// 	console.log("shareCount+1");
							// });
						}else{
							let imgs=[];
							console.log(this.shares.small_images);
							let obj=this.shares.small_images;
							for (let item in obj) {
								console.log(obj[item]);
								let o={
									image:obj[item]
								};
								imgs.push(o);
							}
							let send_circle_goods={
								title:this.shares.title,
								pict_url:this.shares.pict_url,
								reserve_price:this.shares.reserve_price,
								zk_final_price:this.shares.zk_final_price,
								youhuiquan:this.shares.youhuiquan,
								imgSrcs:imgs,
								shareCount:this.shareCount,
								goodsId:this.id,
								comment:this.shares.copykey,
								invitecode:this.shares.invitecode,
								short_url:this.shares.short_url,
								yj:this.shares.yj
							}
							console.log(send_circle_goods);
							uni.setStorageSync("send_circle",send_circle_goods);
							addSendCircle({
								title:this.shares.title,
								pict_url:this.shares.pict_url,
								reserve_price:this.shares.reserve_price,
								zk_final_price:this.shares.zk_final_price,
								youhuiquan:this.shares.youhuiquan,
								imgSrcs:this.shares.small_images.join(','),
								shareCount:this.shareCount,
								goodsId:this.id,
								comment:this.shares.copykey,
								invitecode:this.shares.invitecode,
								short_url:this.shares.short_url,
								description:this.shares.description,
								yj:this.shares.yj
							}).then(res=>{
								console.log(res);
								if(res.data.code==200){
									uni.showToast({
										title:'发圈成功！'
									})
								}
							});
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.imgChecked{
		position: absolute;
		left: 0;
		top: 0;
	}
	uni-textarea{
		height: 50px;
		min-height: 50px;
	}
	.text{
		color: #939191;
		font-size: 12px;
		line-height: 18px;
	}
	.main {
		background-color: #E6E6E6;
	}

	.head,
	.body,
	.foot {
		border-radius: 10upx;
	}

	.head {
		border-radius: 10upx;
		height: 30px;
		background-color: white;
		text-indent: 20px;
		color: #F0AD4E;
	}

	.goodsDes,
	.controls,
	.photos {
		margin: 10px;
		background-color: white;
		border-radius: 10upx;
	}

	.goodsDes {
		padding: 10px 20px;
		height: auto;
	}

	.controls {
		height: 80px;
		padding: 5px;
	}

	.photos {
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-bottom: 50px;
	}
	.mainPhoto>.image{
		width: 100%;
		height: 300px;
	}
	.mainPhoto,.smallPhoto{
		flex: 1 1 0%;
	}
	.smallPhoto>view{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.smallPhoto>view>view{
		height: 100px;
		width: 50%;
	}
	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 30px;
	}

	.checkControls,
	.copyControls {
		margin: 10px 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.copyControls view {
		margin: 0 20upx;
		padding: 0 10upx;
		border-radius: 20px;
		background-color: pink;
		color: red;
	}

	.foot {
		display: flex;
		flex-direction: row;
	}

	.foot>button {
		flex: 1;
		margin: 0 10px;
		padding: 0;
		border-radius: 30px;
	}

	.foot>button:nth-child(1) {
		background-color: #ff8323;
	}

	.foot>button:nth-child(2) {
		background-color: #f14444;
	}

	//分享
	.bottom-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 35upx;
	}

	.bottom-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 15px 15upx;
		box-sizing: border-box;
	}

	.bottom-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90upx;
		height: 90upx;
		overflow: hidden;
		background: #007aff;
		border-radius: 10upx;
	}

	.bottom-content-text {
		font-size: 26upx;
		color: #333;
		margin-top: 10upx;
	}

	.bottom-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
	}

	.bottom-content-image.wx {
		background: #00ce47;
	}

	.bottom-content-image.qq {
		background: #00b6f6;
	}

	.bottom-content-image.sina {
		background: #ff766a;
	}

	.bottom-content-image.copy {
		background: #07ccd0;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1028200 */
		src: url('https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf') format('truetype');
	}

	.icon {
		font-family: 'iconfont';
		font-size: 40upx;
		color: #fff;
	}
</style>
