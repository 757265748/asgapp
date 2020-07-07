import {
	BASE_URL
} from '@/api/config.js'
//淘宝官方活动
export function get_tb_topic_list(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get-tb-topic-list`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data,
			success: (res) => {
				console.log(res);
				if(res.data.code==200){
					resolve(res.data.result);
				}else{
					resolve(res.errMsg);
				}
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function insert_lunbo(data) {
	console.log(data);
	console.log(`${BASE_URL}/api/get/fp/insert_lunbo`);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/insert_lunbo`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data:{
				pict_url:data.pict_url,
				link:data.link,
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function insert_goods_1(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/insert_goods_1`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data:{
				tao_id:data.tao_id,
				pict_url:data.pict_url,
				title:data.title,
				size:data.size,
				quanhou_jiage:data.quanhou_jiage,
				tkfee3:data.tkfee3,
				volume:data.volume,
				coupon_info_money:data.coupon_info_money
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function insert_goods_2(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/insert_goods_2`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data:{
				tao_id:data.tao_id,
				pict_url:data.pict_url,
				title:data.title,
				size:data.size,
				quanhou_jiage:data.quanhou_jiage,
				tkfee3:data.tkfee3,
				volume:data.volume,
				coupon_info_money:data.coupon_info_money
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function insert_goods_3(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/insert_goods_3`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data:{
				tao_id:data.tao_id,
				pict_url:data.pict_url,
				title:data.title,
				size:data.size,
				quanhou_jiage:data.quanhou_jiage,
				tkfee3:data.tkfee3,
				volume:data.volume,
				coupon_info_money:data.coupon_info_money
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function insert_tab_goods(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/insert_tab_goods`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_lunbo(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_lunbo`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_goods_1(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_goods_1`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_goods_2(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_goods_2`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_goods_3(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_goods_3`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_tab_goods(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_tab_goods`,
			data:{
				page:data?data.page:1,
				type:data?data.type:'',
				sort:data?data.sort:'',
			},
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function get_activity(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/fp/get_activity`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}