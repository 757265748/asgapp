const router = require('koa-router')();
const {
	Sql
} = require('../../config/db');
const {
	getDetail
} = require('./js/getdetail')
const {
	getDetail2
} = require('./js/getdetail2')
const {
	linkTransfer
} = require('./js/linktransfer')
const msql = new Sql();
//商品列表
router.get('/get/good/listgoods', async (ctx) => {
	console.log('执行查询商品列表')
	let page = ctx.query.page * 20 || 0;

	let type = ctx.query.type || '';
	let screen = ctx.query.screen || 0; // screen:0精选默认， 1销量，2最新，3价格
	let jg = ctx.query.jg || ''; // jg ：1升序， 0降序
	let listgoods = '';
	console.log('pages', page, 'type', type == false)
	// ctx.set('Last-modified',new Date)
	if (type) {
		if (screen == 0) {
			listgoods = await _query(`SELECT *FROM yhq_goods  WHERE type = '${type}'  limit ${page},20`);
		} else if (screen == 1) {
			listgoods = await _query(`SELECT *FROM yhq_goods  WHERE type ='${type}' ORDER BY volume DESC  limit ${page},20`);
		} else if (screen == 2) {
			listgoods = await _query(
				`SELECT *FROM yhq_goods WHERE type ='${type}'  ORDER BY coupon_start_time DESC  limit  ${page},20`);
		} else if (screen == 3 && jg == 0) {
			listgoods = await _query(
				`SELECT * FROM yhq_goods WHERE type ='${type}'  ORDER BY quanhoujia DESC  limit  ${page},20`);
		} else if (screen == 3 && jg == 1) {
			listgoods = await _query(
				`SELECT * FROM yhq_goods WHERE type ='${type}'  ORDER BY quanhoujia ASC limit  ${page},20`);
		}
	} else if (!type) {
		if (screen == 0) {
			listgoods = await _query(`SELECT *FROM yhq_goods   limit ${page},20`);
		} else if (screen == 1) {
			listgoods = await _query(`SELECT *FROM yhq_goods    ORDER BY volume DESC  limit ${page},20`);
		} else if (screen == 2) {
			listgoods = await _query(`SELECT *FROM yhq_goods    ORDER BY coupon_start_time DESC  limit  ${page},20`);
		} else if (screen == 3 && jg == 0) {
			listgoods = await _query(`SELECT * FROM yhq_goods   ORDER BY quanhoujia DESC  limit  ${page},20`);
		} else if (screen == 3 && jg == 1) {
			listgoods = await _query(`SELECT * FROM yhq_goods   ORDER BY quanhoujia ASC limit  ${page},20`);
		}
	}
	// console.log(listgoods);
	// let result = _filter(listgoods, screen, jg);//商品条件过滤 

	ctx.body = {
		code: 200,
		result: listgoods,

	};
})
//商品详情
router.get('/get/good/detailgoods', async (ctx) => {
	console.log("商品详情开始查询");
	let id = ctx.query.id;
	let table = ctx.query.table;
	let pid = ctx.query.pid
	let phone = ctx.query.phone
	let isCollection = 0;
	table = table || 'yhq_goods'
	console.log('NUMID', id, table, pid);
	let result = await msql.query(`SELECT *from ${table}  where num_iid = '${id}' `);

	result = result[0]
	if (!result) {
		return {
			code: 100,
			msg: '查无此商品'
		}
	}
	let linkt = await linkTransfer(id, pid);
	if (phone) {
		isCollection = await msql.query(`select * from good_collection where phone = '${phone}'and num_iid='${id}' `)
		console.log('商品收藏：', isCollection[0]);
		isCollection = isCollection[0] ? 1 : 0
	}

	let small_images = result.small_images.split(',');
	result.small_images = small_images
	// result.detailimg = detailimg
	result.short_url = linkt.short_url
	result.tkl = linkt.tpwd
	result.isCollection = isCollection;
	// console.log('tp',small_images);
	ctx.body = {
		code: 200,
		msg: '获取商品详情成功',
		result,
	}

})
// 热销单品
router.get('/get/good/hotlist', async (ctx) => {
	let result = await msql.query(`select *from hot_good limit 0,10`)
	ctx.body = {
		code: 200,
		result,
	}
})
//其他类型商品、 如淘抢购，聚划算，
router.get('/get/good/othergood1', async (ctx) => {
	let page = ctx.query.page * 20 || 0;
	console.log('pages', page)
	let type = ctx.query.type || 'tqg_goods'
	let screen = ctx.query.screen || 0; // screen:0精选默认， 1销量，2最新，3价格
	let jg = ctx.query.jg || ''; // jg ：1升序， 0降序
	let result = null;
	if (screen == 0) {
		result = await msql.query(`select * from ${type} limit ${page},20`)
	} else if (screen == 1) {
		result = await msql.query(`SELECT  * from ${type}  ORDER BY volume DESC limit ${page},20`)
	} else if (screen == 2) {
		result = await msql.query(`SELECT  * from ${type}  ORDER BY coupon_start_time DESC limit ${page},20`)
	} else if (screen == 3 && jg == 0) {
		result = await msql.query(`SELECT  * from ${type}  ORDER BY quanhoujia DESC limit ${page},20`)
	} else if (screen == 3 && jg == 1) {
		result = await msql.query(`SELECT  * from ${type}  ORDER BY quanhoujia ASC limit ${page},20`)
	}
	result[0].zk_final_price = parseFloat(result[0].zk_final_price);
	console.log('cc', result[0].zk_final_price)
	if (!result) {
		return ctx.body = {
			code: 100,
			msg: '查无商品',
		}
	}
	ctx.body = {
		code: 200,
		result,
	}
})
router.get('/get/good/othergood', async (ctx) => {
	let page = ctx.query.page * 20 || 0;
	let type = ctx.query.type || 'tqg_goods'
	let screen = ctx.query.screen || 0; // screen:0精选默认， 1销量，2最新，3价格
	let jg = ctx.query.jg || ''; // jg ：1升序， 0降序
	console.log('pages:'+page+"-"+type+"-"+screen+"-"+jg);
	return new Promise((resolve, reject) => {
		const data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		if(type=="special_offer"){
			data = {
				page: page,
				pagesize: 20,
				endprice: 9.9,
				apkey: apkey,
			}
			//https://api.open.21ds.cn/op_api_v1/getitems?apkey=af030b85-4e9a-a924-bd79-c4a1d6ed8cae&page="+page+"&pagesize=100&itemtype=tqg				
			//https://api.open.21ds.cn/op_api_v1/getitems?apkey=af030b85-4e9a-a924-bd79-c4a1d6ed8cae&page="+page+"&pagesize=100&endprice=9.9
			//https://api.open.21ds.cn/op_api_v1/getitems?apkey=af030b85-4e9a-a924-bd79-c4a1d6ed8cae&page="+page+"&pagesize=100&keyword=母婴
		}else if(type=="tqg_goods"){
			data = {
				page: page,
				pagesize: 20,
				itemtype:"tqg",
				apkey: apkey,
			}
		}
		const params = querystring.stringify(data)
		const option = {
			hostname: `api.open.21ds.cn`,
			path: `/op_api_v1/getitems?${params}`,
			method: 'GET'
		}
		const req = http.request(option, function(res) {
			console.log('url', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
			})
			res.on('end', function() {
				result = JSON.parse(result);
				console.log('1', result);
				resolve(result.data);
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
	})
	console.log('cc', result[0].zk_final_price)
	if (!result) {
		return ctx.body = {
			code: 100,
			msg: '查无商品',
		}
	}
	ctx.body = {
		code: 200,
		result,
	}
})
async function _query(str) {
	let ret = await msql.query(str);
	// msql.endSql();
	return ret;
}


module.exports = router;
