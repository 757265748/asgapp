import {
	BASE_URL
} from '@/api/config.js'
export function getGoodsList(data) {
	console.log('data!!', data);
	console.log(data.type);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/listgoods`,
			data: {
				page: data.page || 0,
				type: data.type == "全部" ? '' : data.type || '',
				screen: data.screen || '',
				jg: data.jg || ''
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}
export function order(end_time, start_time) {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: 'https://api.open.21ds.cn/apiv1/tbkorderdetailsget',
			url: `${BASE_URL}/api/get/good/getOrder`,
			data: {
				end_time: end_time,
				start_time: start_time,
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('获取商品列表信息出错', err)
			}
		});
	})
}
//获取商品小图
export function getSmallImg(id) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getSmallImg`,
			data: {
				id,
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('获取商品列表信息出错', err)
			}
		});
	})
}
//获取图片详情
export function getItemsDes(num_iid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getItemsDes`,
			data: {
				num_iid
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('获取商品列表信息出错', err)
			}
		});
	})
}
export function getItems(page, itemid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getItems`,
			data: {
				page,
				itemid
			},
			method: 'GET',
			header: {
				'content-header': 'application/json',
			},
			success: (res) => {
				resolve(res.data);
				console.log(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log("getitems error" + err);
			}
		})
	})
}
export function test(phone) {
	// console.log('data!!',data)
	console.log(phone);
	plus.runtime.openURL(
		"https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://39.108.215.49:8009/html/code.html?phone=" +
		phone + "&state=1212&view=web");
	// 	return new Promise((resolve, reject) => {
	// 		uni.request({
	// 			url: `${BASE_URL}/api/get/user/login/register/success/`,
	// 			data: {
	// 				phone:phone,
	// 				code:code
	// 			},
	// 			method: "GET",
	// 			header: {
	// 				'content-header': 'application/json'
	// 			},
	// 			success: (res) => {
	// 				plus.runtime.openURL("https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://39.108.215.49:8009/html/code.html?phone="+res.data.phone+"&state=1212&view=web");
	// 				resolve(res.data);
	// 			},
	// 			fail: (err) => {
	// 				console.log("error");
	// 			}
	// 		});
	// 
	// 	})
}
export function getGoodDetail(id, table, pid = 'mm_133093062_391450189_107723950192', phone = "") {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/detailgoods`,
			data: {
				id,
				table,
				pid,
				phone
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}
//获取商品信息
export function getItemInfo(itemid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getItemInfo`,
			data: {
				itemid,
			},
			method: 'GET',
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				console.log("getiteminfo error", err);
			}
		})
	});
}


export function getRecommend() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/recommend`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}
export function getHotListGood() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/hotlist`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getOtherGood(page,type) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/othergood`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				page,
				type,
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}

export function getDetailImg(num_iid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: 'https://hws.m.taobao.com/cache/desc/5.0',
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: num_iid,
				'qq-pf-to': 'pcqq.group'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('获取图片列表信息出错', err)
			}
		});

	})
}

export function getKeyWord(type, page = 0) {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: `${BASE_URL}/api/get/good/kwsearch`,
			url: `${BASE_URL}/api/get/good/listgoods`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				type,
				page,
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('关键字查询出错', err)
			}
		})
	})
}

export function getCollection(user) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/goodcollection/list`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				user
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('get collection message error', err)
			}
		})
	})
}
export function addCollection(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/add`,
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			data,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('add collection message error', err)
			}
		})
	})
}
export function deleteCollection(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/delete`,
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			data,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('delete collection message error', err)
			}
		})
	})
}
export function getCTK(data) {
	console.log(data.page);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getCTK`,
			method: 'GET',
			header: {
				'content-type': 'application/json'
			},
			data,
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('delete collection message error', err)
			}
		})
		
		
		// uni.request({
		// 	url: "https://api.zhetaoke.com:10001/api/api_all.ashx",
		// 	data: {
		// 		appkey: "ebfdd8eefc514645a3bb85604d7d3c20",
		// 		page: data.page,
		// 		page_size: 20,
		// 		sort: "new",
		// 		commission_rate_start: 50,
		// 		cid: 1
		// 	},
		// 	success: (res => {
		// 		console.log(res);
		// 		resolve(res);
		// 	}),
		// 	fail: function(err) {
		// 		console.log(err);
		// 	}
		// })
	})
}

export function getRelationId(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/getRelationId`,
			method: 'POST',
			header: {
				'content-type': 'application/json',
			},
			data,
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log("getRelationId error!" + err);
			}
		})
	})
}
// export function getDetailImg(num_iid) {
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: 'http://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/',
// 			method: "GET",
// 			header: {
// 				'content-header': 'application/json'
// 			},
// 			data: {
// 				data:{"id":num_iid},
// 				'qq-pf-to':'pcqq.group'
// 			},
// 			success: (res) => {
// 				resolve(res.data);
// 			},
// 			fail: (err) => {
// 				console.log('获取图片列表信息出错', err)
// 			}
// 		});
// 
// 	})
// }
