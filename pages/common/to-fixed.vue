<template>
	<view class="quanhoujia">￥{{quanhoujia}}</view>
</template>

<script>
	export default{
		props:{
			priceY:{
				type:String,
				default:""
			},
			youhuiquan:{
				type:Number
			}
		},
		computed:{
			quanhoujia(){
				try{
					return (Number(this.priceY)-this.youhuiquan).toFixed(1);
				}catch(e){
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style>
	.quanhoujia{
		color: #FF0000;
	}
</style>
