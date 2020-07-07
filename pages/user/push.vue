<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="uni-flex uni-row" v-for="(item,key) in clientId" style="">
			<view style="flex: 2;justify-content: flex-end;">{{key}}:</view>
			<view style="flex: 8;">{{item}}</view>
		</view>
		<view class="message" v-if="message">{{message}}</view>
	</view>
</template>

<script>
	import plusListener from '@/api/push-plus-listener.js'
	export default{
		data(){
			return {
				currentH:uni.getSystemInfoSync().screenHeight,
				clientId:new Object(),
				message:null
			}
		},
		onReady() {
			this.clientId=plus.push.getClientInfo();
			console.log(this.clientId);
			this.checkArguments(); // 处理启动参数
			this.newintentListener(); // 监听后台恢复
			this.pushListener(); // 监听通知栏信息
		},
		methods:{
			newintentListener() {
				// 监听后台恢复
				plus.globalEvent.addEventListener('newintent', e => {
					console.log('globalEvent--->newintent');
					this.checkArguments(); // 检测启动参数
				});
			},
			pushListener() {
				// 开启监听推送  
				// 注意 这里需要监听应用 splashclosed 关闭后 （因为如果开了广告这些  直接执行API跳转是无效的)
				var globalEvent = weex.requireModule('globalEvent');
				globalEvent.addEventListener('splashclosed', (e) => {
					console.log('splashclosed');
					plus.push.addEventListener('click', res => {
						console.log('push--->click');
						this.addEventListenerPushMessage(res, 'click');
					});
					plus.push.addEventListener('receive', res => {
						console.log('push--->receive');
						this.addEventListenerPushMessage(res, 'receive');
					});
				});
			},
			checkArguments() {
				var launcher = plus.runtime.launcher;
				console.log('Shortcut-plus.runtime.launcher: ' + launcher);
				if (launcher == 'shortcut') {
					this.shortcutLauncher();
				}
			},
			addEventListenerPushMessage(push, type) {
				// 处理通知栏信息
				if (typeof push.payload == 'string') {
					push.payload = JSON.parse(push.payload);
				}
				console.log(`接收到推送消息，类型：${type}`, push);
				this.message=push;
				console.log(this.message);
				// 这后面的业务数据需要自己处理 
			
			},
			shortcutLauncher() {
				// 通过快捷方式启动，iOS平台表示通过3D Touch快捷方式，Android平台表示通过桌面快捷方式启动
				try {
					var cmd = JSON.parse(plus.runtime.arguments);
					console.log('Shortcut-plus.runtime.arguments: ' + plus.runtime.arguments);
					var type = cmd && cmd.type;
					// 根据根据type 完成自己的业务逻辑
					setTimeout(r => {
						switch (type) {
							case 'scan':
								uni.scanCode({
									scanType: 'qrCode'
								});
								break;
						}
					}, 800);
			
					console.log(JSON.stringify(cmd));
				} catch (e) {
					console.log('Shortcut-exception: ' + e);
				}
			}
		}
	}
</script>

<style>
	.main{
		background-color: #333;
		color: white;
	}
</style>
