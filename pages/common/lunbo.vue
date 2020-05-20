<template>
	<view class="">
		123{{imgs}}
		<QSGradientSwiper height="300" circular ref="QSGradientSwiper"></QSGradientSwiper>
	</view>
</template>

<script>
	import QSGradientSwiper from '@/components/QS-Gradient-Swiper/QS-Gradient-Swiper-vue.vue';
	export default {
		components: {
			QSGradientSwiper
		},
		props:{
			imgs:Array
		},
		onLoad() {
			console.log(this.imgs);
		},
		onReady() {
			console.log(this.imgs);
			this.$refs.QSGradientSwiper.setData(this.imgs);
		}
	}
</script>

<style>
</style>
