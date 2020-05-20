import {
	BASE_URL
} from '@/api/config.js'
//店铺查询
export function getTbkShop(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getTbkShop`,
			data: {
				keyword:data?data.keyword:''
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('店铺查询:', err)
			}
		});

	})
}
//添加收藏
export function insert_collect(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/insert_collect`,
			data: {
				item_id:data.item_id,
				user_id:data.user_id,
				pict_url:data.pict_url,
				title:data.title,
				price:data.price,
				create_date:data.create_date
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('添加收藏:', err)
			}
		});

	})
}
//查询收藏
export function select_collect(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/select_collect`,
			data: {
				user_id:data.user_id
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('查询收藏:', err)
			}
		});

	})
}
//获取详情图片
export function getDescImg(id) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getDescImg`,
			data: {
				item_id:id
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('淘宝精选:', err)
			}
		});

	})
}
//猜你喜欢(重构版)
export function getMaterialItem(id) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getMaterialItem`,
			data: {
				item_id:id
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				// console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('淘宝精选:', err)
			}
		});

	})
}
export function ztkTaobaoJX(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://api.zhetaoke.com:10001/api/api_all.ashx`,
			data: {
				appkey: "6e34a4e525f34c1c82194ebd8a1bd84e",
				page: data.page || 1,
				page_size: 10,
				sort: "new",
				cid: 0,
				pinpai: 1,
				pinpai_name: ""
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				// console.log(JSON.stringify(res.data.content));
				resolve(res.data.content);
			},
			fail: (err) => {
				reject(err);
				console.log('淘宝精选:', err)
			}
		});

	})
}
//五分钟添加一次发圈
export function send_circle_addGoods(data) {
	let pageIndex = data.pageIndex;
	let random = Math.round(Math.random() * 9);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/addGoods`,
			data: {
				pageIndex: pageIndex,
				random: random
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				// console.log(JSON.stringify(res.data.content));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('淘宝精选:', err)
			}
		});

	})
}
//添加发圈
export function addSendCircle(data) {
	console.log(data);
	if(data.youhuiquan=='undefined'||data.youhuiquan==undefined){
		data.youhuiquan=0;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/insert`,
			data: {
				title: data.title,
				pict_url: data.pict_url,
				reserve_price: data.reserve_price,
				zk_final_price: data.zk_final_price,
				youhuiquan: data.youhuiquan,
				imgSrcs: data.imgSrcs,
				shareCount: data.shareCount,
				goodsId: data.goodsId,
				comment: data.comment,
				invitecode: data.invitecode,
				short_url: data.short_url,
				description: data.description,
				yj: data.yj
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('发圈', err)
			}
		});

	})
}
//发圈分享次数
export function shareCount(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/shareCount`,
			data: {
				goodsId: data.goodsId,
				shareCount: data.shareCount
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('发圈', err)
			}
		});

	})
}
//获取发圈数据
export function getSendCircleData(data) {
	let pageNo = data.pageNo;
	let pageSum = data.pageSum;
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/getData`,
			method: "GET",
			data: {
				pageNo: pageNo,
				pageSum: pageSum
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('发圈', err)
			}
		});

	})
}
//淘宝长链接或短链接解析商品ID API
export function sclicktoid(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/sclicktoid`,
			data: {
				sclickurl: data.sclickurl
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('淘宝长链接或短链接解析商品ID API:', err)
			}
		});

	})
}
//万能高佣转链API接口
export function doItemHighCommissionPromotionLinkByAll(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/doItemHighCommissionPromotionLinkByAll`,
			data: {
				content: data.content
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('万能高佣转链API接口:', err)
			}
		});

	})
}
export function getRelation_id(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/getRelation_id`,
			method: "GET",
			data: {
				phone: data.phone
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('getrelationId', err)
			}
		});

	})
}

//发圈商品是否存在
export function sendCircleExisit(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/exisit`,
			method: "GET",
			data: {
				goodsId: data.goodsId
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('发圈exisit:', err)
			}
		});

	})
}
export function sendCircleDelete(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/send_circle/delete`,
			method: "GET",
			data: {
				goodsId: data.goodsId
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('发圈delete:', err)
			}
		});

	})
}
/* 获取平台活动url */
export function pthd(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/pthd`,
			data: {
				aid: data.aid,
				relationId: data.relationId
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('获取平台活动:', err)
			}
		});

	})
}
/* 喵有券淘抢购/聚划算/9.9 */
export function getItemList(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getItemList`,
			data: {
				type: data.type,
				page: data.page
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('喵有券淘抢购/聚划算/9.9:', err)
			}
		});
	})
}
//瞄有券全网商品new
export function getTkMaterialItem(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getItemList`,
			data: {
				type: data.type,
				page: data.page,
				sort: data.sort || 'asc'
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
				console.log('瞄有券全网商品new:', err)
			}
		});
	})
}
/* 折淘客极品爆款 */
export function ztkActivify(data) {
	let d = {};
	switch (data.type) {
		case '极品爆款':
			d = {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: data.page,
				page_size: 10,
				sort: 'new',
				baodan: 1
			}
			break;
		case '天猫超市':
			d = {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: 1,
				page_size: 10,
				sort: 'new',
				tianmaochaoshi: 1
			}
			break;
		case '天猫国际':
			d = {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: 1,
				page_size: 10,
				sort: 'new',
				jh: 'haitao'
			}
			break;
		case '19.9':
			d = {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: 1,
				page_size: 10,
				sort: 'new',
				price: '0.0-19.9'
			}
			break;
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://api.zhetaoke.com:10001/api/api_all.ashx`,
			data: d,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				// console.log(JSON.stringify(res.data));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('折淘客:', err)
			}
		});

	})
}
export function ztkTab(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/ztkTab`,
			data: data,
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('验证出错', err)
			}
		});

	})
}
export function ztkLunbo() {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: `${BASE_URL}/api/get/good/lunbo`,
			url: `https://api.zhetaoke.com:10001/api/api_lunbo.ashx`,
			data: {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: 1,
				page_size: 20
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				// console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('ztk轮播获取失败', err)
			}
		});

	})
}
export function ztkLunboGoods(url) {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: `${BASE_URL}/api/get/good/lunbo`,
			url: url,
			data: {
				appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
				page: 1,
				page_size: 20,
				sort: "sale_num_desc",
				jh: "haitao"
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('ztk轮播获取失败', err)
			}
		});

	})
}
export function validyzm(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/register/validyzm`,
			data: {
				phone: phone
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('验证出错', err)
			}
		});

	})
}
export function sendyzm(phone, type) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/register/sendyzm`,
			data: {
				phone: phone
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('验证出错', err)
			}
		});

	})
}
//获取全网商品
export function getGoodsList(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/listgoods`,
			// url: `${BASE_URL}/api/get/good/getTkMaterialItem`,
			data: {
				page: data.page || 0,
				type: data.type,
				sort: data.sorts
			},
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {

				// console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('获取商品列表信息出错', err)
			}
		});

	})
}
//生成二维码图片
export function getShareImgUrl(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			// url: `http://51atk.com:8009/GetRelationIdWebService.asmx/GetPic`,
			// url: `https://oa.fpc98.com/SerFile/Service.asmx/GetPic`,
			url: `http://39.108.215.49:8090/generateImages.do`,
			//url: `${BASE_URL}/api/get/good/getShareImgUrl`,
			// data: {
			// 	url:'https://img.alicdn.com/i2/2454216386/TB1KvxnjGagSKJjy0FaXXb0dpXa_!!0-item_pic.jpg',
			// 	InvitationCode:'123456'
			// },
			data: {
				url: data.url, //图片路径
				CodeContent: data.CodeContent, //二维码内容
				TitleContent: data.TitleContent, //商品标题
				NowPrice: data.NowPrice, //现价
				OldPrice: data.OldPrice, //原价
				RedecePrice: data.RedecePrice, //优惠券
				InvitationCode: data.InvitationCode //邀请码
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
				console.log('获取分享图片信息出错', err)
			}
		});

	})
}
//获取订单商品
export function order(relation_id) {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: 'https://api.open.21ds.cn/apiv1/tbkorderdetailsget',
			url: `${BASE_URL}/api/post/orderlist`,
			data: {
				relation_id: relation_id
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(JSON.stringify(res));
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
//获取图片详情图
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
				console.log(JSON.stringify(res));
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
				console.log('获取商品列表信息出错', err)
			}
		});
	})
}
//淘抢购/聚划算/9.9元淘客商品库
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
				//console.log(res.data);
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
export function getGoodDetail(id, relationid) {
	console.log(id, relationid);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/doItemHighCommissionPromotionLink`,
			data: {
				itemid:id,
				relationid:relationid
			},
			method: 'GET',
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data.result);
			},
			fail: (err) => {
				console.log("getiteminfo_myq error", err);
			}
		})
		// uni.request({
		// 	url: `http://51atk.com:8090/httpClient.do`,
		// 	// url: `http://192.168.150.89:8080/httpClient.do`,
		// 	data: {
		// 		itemid: id,
		// 		apkey: 'af030b85-4e9a-a924-bd79-c4a1d6ed8cae',
		// 		pid: 'mm_133093062_63750231_107561750044',
		// 		tbname: 'qq470474509',
		// 		shorturl: 1,
		// 		tpwd: 1,
		// 		relationid: relationid,
		// 		hasiteminfo: 1
		// 	},
		// 	method: "GET",
		// 	header: {
		// 		'content-header': 'application/json'
		// 	},
		// 	success: (res) => {
		// 		console.log(JSON.stringify(res));
		// 		resolve(res.data);
		// 	},
		// 	fail: (err) => {
		// 		console.log(err)
		// 	}
		// });

	})
}
//猜我喜欢
export function guessYouLike(itemid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/guessYouLike`,
			data: {
				itemid
			},
			method: 'GET',
			header: {
				'content-header': 'application/json',
			},
			success: (res) => {
				resolve(res.data);
				//console.log(JSON.stringify(res.data));
			},
			fail(res) {
				reject(res);
				console.log(res);
			}
		})
	})
}
//获取收藏商品
export function exisitCollection(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/good/goodcollection/exisit`,
			data: {
				phone
			},
			method: 'POST',
			header: {
				'content-header': 'application/json',
			},
			success: (res) => {
				resolve(res.data);
				//console.log(JSON.stringify(res.data));
			},
			fail(res) {
				reject(res);
				console.log(res);
			}
		})
	})
}
//获取商品信息
export function getItemInfo(itemid) {
	return new Promise((resolve, reject) => {
		// uni.request({
		// 	url: `http://51atk.com:8090/merchandiseNews.do`,
		// 	data: {
		// 		itemid,
		// 	},
		// 	method: 'GET',
		// 	header: {
		// 		'content-header': 'application/json'
		// 	},
		// 	success: (res) => {
		// 		resolve(res);
		// 	},
		// 	fail: (err) => {
		// 		console.log("getiteminfo error", err);
				
		// 	}
		// })
		uni.request({
			url: `${BASE_URL}/api/get/good/doItemHighCommissionPromotionLink.do`,
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
				console.log("getiteminfo_myq error", err);
			}
		})
	});
}
//获取双11预收商品
export function getS11() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/getS11`,
			method: 'GET',
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
				console.log(res);
			},
			fail: (err) => {
				console.log("getiteminfo error", err);
			}
		})
	});
}
//获取推荐商品
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
//获取热销商品（从数据库获取的）
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
//获取9.9商品
export function getOtherGood(params) {
	console.log(params.page, params.type);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/good/othergood`,
			method: "GET",
			header: {
				'content-header': 'application/json'
			},
			data: {
				page: params.page,
				type: params.type
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
//获取简版商品信息
export function getKeyWord(type, page) {
	return new Promise((resolve, reject) => {
		console.log(type,page);
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
//获取收藏商品
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
//添加收藏
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
//取消收藏
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
export function existUser(phone) {
	console.log(phone);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/exist`,
			method: 'POST',
			header: {
				'content-type': 'application/json',
			},
			data: {
				phone: phone
			},
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
