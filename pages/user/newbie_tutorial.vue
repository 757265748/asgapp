<template>
	<view class="list">
		<uni-popup ref="showimage" :type="type" :mask-click="true" @change="change">
			<view class="uni-image">
				<view v-html="item.video"></view>
				<view class="uni-image-close" @click="cancel('image')">
					<uni-icons type="clear" color="#fff" size="30" />
					<view class="uni-icon uni-icon-clear"></view>
				</view>
			</view>
		</uni-popup>
		<view class="item" v-for="(item,index) in data" :key="index">
			<view style="height: 200px;" v-html="item.surfaceImg" @click="togglePopup('center', 'image',item)"></view>
			<view class="title uni-flex uni-row" @tap="download(item.video)">
				<view>
					<text>{{item.news_title}}</text>
					<text>(点击下载此视频)</text>
				</view>
				<view class="uni-icon uni-icon-download" style="color: #969696;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		news
	} from '@/api/news.js'
	import pupop from '@/components/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni-icon.vue'
	import downloader from '@/common/js/img-downloader.js';
	export default {
		components: {
			pupop,
			uniIcons
		},
		data() {
			return {
				title: '新手教程',
				type: '',
				data: [],
				item: new Object(), //选中的项
			}
		},
		onReady() {
			this.newbie_tutorial();
		},
		onBackPress() {
			this.$refs['showpopup'].close()
			this.$refs['showtip'].close()
			this.$refs['showimage'].close()
			this.$refs['showshare'].close()
		},
		methods: {
			download(video) {
				uni.showToast({
					title:'正在下载...',
					icon:'none'
				})
				console.log(video);
				let url=video.substring(video.indexOf("src")+5,video.indexOf('" type'));
				console.log(url);
				let promise = downloader.load(url, 'video'); //下载
				promise.then(([err, res]) => { //下载结果
					console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
					uni.hideLoading();
					if (res.errMsg == "saveImageToPhotosAlbum:ok") {
						uni.showToast({
							title:'下载完成!',
						})
					}
				});
			},
			newbie_tutorial() {
				news.newbie_tutorial({
					news_type: this.title
				}).then(res => {
					this.data = res.data;
					for (let item in this.data) {
						console.log(this.data[item].news_content);
						let content = this.data[item].news_content;
						this.data[item].surfaceImg = content.substr(content.indexOf('<img'), content.indexOf('/>') - 1);
						console.log(this.data[item].surfaceImg);
						this.data[item].video = content.substring(content.indexOf('<video'), content.indexOf('</video>') + 8);
					}
				})
			},
			togglePopup(type, open, item) {
				this.item = item;
				switch (type) {
					case 'top':
						this.content = '顶部弹出 popup'
						break

					case 'bottom':
						this.content = '底部弹出 popup'
						break
					case 'center':
						this.content = '居中弹出 popup'
						break
				}
				this.type = type
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
		}
	}
</script>

<style>
	.item p {
		height: 100%;
	}

	.uni-image-close {
		margin-top: 20px;
		text-align: center;
	}

	.title {
		align-items: center;
		justify-content: space-between;
		background-color: white;
		height: 60upx;
		padding: 0 20upx;
	}

	.item {
		margin: 20upx 30upx;
		position: relative;
	}

	image {
		width: 750rpx;
		height: 500rpx;
	}

	.video {
		width: 750rpx;
		height: 400rpx;
		background-color: #808080;
	}

	.btn {
		margin-top: 5px;
		margin-bottom: 5px;
		;
	}
</style>
