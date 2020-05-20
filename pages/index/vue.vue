<template>
	<view>
		<QSGradientSwiper height="300" circular ref="QSGradientSwiper"></QSGradientSwiper>
		<view class="topView">QS-Gradient-Swiper</view>
	</view>
</template>

<script>
	import QSGradientSwiper from '@/components/QS-Gradient-Swiper/QS-Gradient-Swiper-vue.vue';
	export default {
		components: {
			QSGradientSwiper
		},
		data() {
			return {

			}
		},
		onReady() {
			this.$refs.QSGradientSwiper.setData([{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=791a660d9c2397ddd679980c6983b216/591f9758d109b3de80a0bb82c1bf6c81810a4c89.jpg',
					backgroundColor: '#b36d61'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=e8b1d9c798cad1c8d0bbfc2f4f3c67c4/ab5e4efbfbedab64dbb08428fa36afc37b311eed.jpg',
					backgroundColor: '#e0eee8'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=a06847cac5fcc3ceb4c0c93ba244d6b7/85d3bc014a90f60394f557af3412b31bb151ed67.jpg',
					backgroundColor: '#221620'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=3792b3922da446237ecaa56aa8237246/c4be73094b36acaf746d5f1471d98d1000e99c1e.jpg',
					backgroundColor: '#e3e7f2'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=d97763e5f5dcd100cd9cf829428a47be/bc48eec4b74543a96096332413178a82b801141e.jpg',
					backgroundColor: '#79b3db'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=f480662e3cadcbef01347e0e9cae2e0e/8f5b1cd8bc3eb13517d8e851ab1ea8d3fc1f4489.jpg',
					backgroundColor: '#927469'
				},
				{
					path: 'http://imgsrc.baidu.com/forum/w%3D580/sign=b5dea914cefdfc03e578e3b0e43e87a9/45c1f303738da9774430d9c1bd51f8198718e38a.jpg',
					backgroundColor: '#c4c8af'
				}
			]);
		}
	}
</script>

<style>
</style>
