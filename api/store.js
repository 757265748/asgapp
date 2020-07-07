import {
	BASE_URL
} from '@/api/config.js'
//各大榜单
export const Store = {
	get_ranking_list: function(data) {
		console.log(data);
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${BASE_URL}/api/get/fp/get-ranking-list`,
				method: "get",
				header: {
					'content-header': 'application/json'
				},
				data,
				success: (res) => {
					resolve(res.data);
					if(res.data.code==200){
						resolve(res.data.result);
					}else{
						console.log("system error");
					}
				},
				fail: (err) => {
					console.log('ERROR_MSG', err)
				}
			});
		})
	},
	search: function(data) {
		console.log(data);
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${BASE_URL}/api/get/fp/search`,
				method: "get",
				header: {
					'content-header': 'application/json'
				},
				data,
				success: (res) => {
					resolve(res);
				},
				fail: (err) => {
					console.log('ERROR_MSG', err)
				}
			});
		})
	}
}
