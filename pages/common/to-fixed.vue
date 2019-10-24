<template>
	<view>{{quanhoujia}}</view>
</template>

<script>
	export default{
		props:{
			priceY:{
				type:Number
			},
			youhuiquan:{
				type:Number
			}
		},
		computed:{
			quanhoujia(){
				console.log(this.priceY-this.youhuiquan);
				return (this.priceY-this.youhuiquan).toFixed(1);
			}
		}
	}
</script>

<style>
</style>
