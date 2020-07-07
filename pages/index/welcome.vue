<template>
	<view>
		<button type="default" @click="weixin_Authorize">授权</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			weixin_Authorize(){
				// #ifdef APP-PLUS
				plus.webview.create('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
				// #endif
				// #ifndef APP-PLUS
				location='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
				// #endif
			}
		}
	}
</script>

<style>
</style>
