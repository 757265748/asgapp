<template>
	<view class="gotop"  @click="goTop">
		<uni-icon type="gotop" size="30" color="#FF4040"></uni-icon>
	</view>
</template>
<script>
	export default {
		props: {
		},
		data() {
			return {
			 
			}
		},
		methods: {
			 goTop(){
				 this.$emit('goTop');
			 }
		}
	}
</script>
<style lang="less" scoped>
	.gotop {
		position: fixed;
		right: 20px;
		bottom: 100px;
		z-index: 999;
		border-radius: 50%;
		font-weight: 600;
	}
</style>
