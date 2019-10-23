<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<input class="uni-input" name="title" placeholder="文章标题" />
			<input class="uni-input" name="miaoshu" placeholder="文章描述" />
			<input class="uni-input" name="imgurl" placeholder="图片地址" />
			<input class="uni-input" name="url" placeholder="跳转链接" />
			<button formType="submit">分享到微信群或好友</button>
			<button type="default" formType="reset">清空以上信息</button>
			<view class="banquan">里客云科技开发</view>
		</form>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		// 执行事件
		methods: {
			formSubmit: function(e) {
				var title = e.detail.value.title;
				var miaoshu = e.detail.value.miaoshu;
				var imgurl = e.detail.value.imgurl;
				var url = e.detail.value.url;
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: url,
					title: title,
					summary: miaoshu,
					imageUrl: imgurl,
					success: function(res) {
						console.log(JSON.stringify(res));
						uni.showToast({title:'已分享', duration:2000});
					},
					fail: function(err) {
						var errrr = JSON.stringify(err);
						if (errrr) {
							uni.showModal({
								title: '表单不能留空',
								content: '请完善所有信息再发起分享',
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					}
				});
			},
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.content {
		width: 100%;
		margin: 20px auto;
	}

	.content .uni-input {
		width: 80%;
		height: 45px;
		margin: 8px auto;
		border: 1px solid #ccc;
		margin-bottom: 8px;
		padding-left: 8px;
		border-radius: 10px;
		font-size: 16px;
		color: #333;
	}

	.content button {
		width: 80%;
		height: 45px;
		line-height: 45px;
		margin: 8px auto;
		border: 1px solid #ccc;
		margin-bottom: 8px;
		padding-left: 8px;
		border-radius: 10px;
		font-size: 16px;
		color: #fff;
		background: #56b273;
		border: none;
	}

	button::after {
		border: none;
	}

	.content .banquan {
		text-align: center;
		margin-top: 50px;
		font-size: 15px;
		color: #666;
	}
</style>
