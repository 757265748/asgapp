<template>
	<view class="content">
		<nav-bar color="#fff" background="#ff000" @back="back"></nav-bar>
		<web-view :src="src"></web-view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	export default {
		data() {
			return {
				src:'',
			}
		},
		components: {
			navBar
		},
		onLoad(option) {
			this.src = option.src
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
				})
			}
		}
	}
</script>
