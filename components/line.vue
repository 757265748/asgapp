<template>
	<view class="line" :style="{background:'#eee','width':'100%','height':heightSize}"></view>
</template>
<script>
	export default {
		props: {
			height: String,
		},
		computed:{
			heightSize(){
				return `${this.height}px`
			}
		}
	}
</script>
