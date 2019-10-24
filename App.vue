
<script>
	import {
		BASE_URL
	} from '@/api/config.js'
	var str="【【双11提前享】CHANEL 香奈儿山茶花润泽微精华水气泡水 水漾质地】https://c.tb.cn/h.eKzNWWq?sm=867622 點￡擊☆鏈バ接，再选择瀏覽●噐○咑№亓；或復zんíゞ这句话₤e1KdYJ9FFio₤后咑閞👉淘灬寳👈";
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show');
			var firstIndex=str.indexOf("这句话");
			if(firstIndex!=-1){
				var lastIndex=str.indexOf("后咑閞");
				var tpwd=str.substring(firstIndex+4,lastIndex-1);
				if(tpwd&&tpwd.length==11){
					console.log("访问api",tpwd);
					this.getTPwd(tpwd);
				}
			}
			
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			getTPwd: async function(tpwd){
				uni.request({
					url: BASE_URL+'/api/get/good/getOrderIdByTpwd',
					method: 'GET',
					data: {
						"tpwd":tpwd,
					},
					success: res => {
						console.log("访问淘口令成功",res.data.result);
						var goodsId=res.data.result;
					},
					fail: (e) => {
						console.log("访问淘口令失败",e);
					},
				});
			},
			xx:function(){
				
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/css/common.css";
	@import "./common/css/uni.css";
	page {
		background-color: #fff;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
		/* padding-bottom: 120upx; */
	}
</style>
