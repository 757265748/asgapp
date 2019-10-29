const router = require('koa-router')();
const { Sql } = require('../../config/db');
const { getDetail } = require('./js/getdetail')
const { getDetail2 } = require('./js/getdetail2')
const { linkTransfer } = require('./js/linktransfer')
const msql = new Sql();
const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
const pid="mm_133093062_391450189_107723950192";
//商品列表
router.get('/get/good/listgoods1', async (ctx) => {
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
            listgoods = await _query(`SELECT *FROM yhq_goods  WHERE type = '${type}' and  coupon_end_time > now() limit ${page},20`);
        } else if (screen == 1) {
            listgoods = await _query(`SELECT *FROM yhq_goods  WHERE type ='${type}' and  coupon_end_time > now() ORDER BY volume DESC  limit ${page},20`);
        } else if (screen == 2) {
            listgoods = await _query(`SELECT *FROM yhq_goods WHERE type ='${type}' and  coupon_end_time > now()  ORDER BY coupon_start_time DESC  limit  ${page},20`);
        } else if (screen == 3 && jg == 0) {
            listgoods = await _query(`SELECT * FROM yhq_goods WHERE type ='${type}' and  coupon_end_time > now()  ORDER BY quanhoujia DESC  limit  ${page},20`);
        } else if (screen == 3 && jg == 1) {
            listgoods = await _query(`SELECT * FROM yhq_goods WHERE type ='${type}' and  coupon_end_time > now()  ORDER BY quanhoujia ASC limit  ${page},20`);
        }
    } else if (!type) {
        if (screen == 0) {
            listgoods = await _query(`SELECT *FROM yhq_goods  WHERE coupon_end_time > now()  limit ${page},20`);
        } else if (screen == 1) {
            listgoods = await _query(`SELECT *FROM yhq_goods  WHERE coupon_end_time > now()  ORDER BY volume DESC  limit ${page},20`);
        } else if (screen == 2) {
            listgoods = await _query(`SELECT *FROM yhq_goods  WHERE coupon_end_time > now()  ORDER BY coupon_start_time DESC  limit  ${page},20`);
        } else if (screen == 3 && jg == 0) {
            listgoods = await _query(`SELECT * FROM yhq_goods WHERE coupon_end_time > now()  ORDER BY quanhoujia DESC  limit  ${page},20`);
        } else if (screen == 3 && jg == 1) {
            listgoods = await _query(`SELECT * FROM yhq_goods  WHERE coupon_end_time > now() ORDER BY quanhoujia ASC limit  ${page},20`);
        }
    }
    // console.log(listgoods);
    // let result = _filter(listgoods, screen, jg);//商品条件过滤 

    ctx.body = {
        code: 200,
        result: listgoods,

    };
})
router.get('/get/good/listgoods', async (ctx) => {
    return new Promise((resolve, reject) => {
	let page =  1;
	let type = ctx.query.type || ''
	let sort = ctx.query.sort || '';
	console.log(type);
		let data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		if(type=="special_offer"){
			data = {
				page: page,
				pagesize: 20,
				endprice:'9.9',
				apkey: apkey,
			}
			
		}else if(type=="tqg_goods"){
			data = {
				page: page,
				pagesize: 20,
				itemtype:"tqg",
				apkey: apkey,
			}
		}else if(type==""){
			data = {
				pageno: page,
				pagesize: 20,
				keyword:'全部',
				apkey: apkey,//mm_133093062_391450189_107723950192
				adzoneid:"107723950192",
				siteid:"391450189",
				tbname:"qq470474509",
				hascoupon:"true",
				sort:sort
			}
		}else{
			data = {
				pageno: page,
				pagesize: 20,
				keyword:type,
				apkey: apkey,//mm_133093062_391450189_107723950192
				adzoneid:"107723950192",
				siteid:"391450189",
				tbname:"qq470474509",
				hascoupon:"true",
				sort:sort
			}
		}
		const params = querystring.stringify(data)
		const option = {
				hostname: `api.open.21ds.cn`,
				path: `/apiv2/gettkmaterial?${params}`,
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
				result = JSON.parse(result).data;
				//console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
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
})

router.get('/get/good/getOrder',async (ctx)=>{
    return new Promise((resolve,reject)=>{
	let request=ctx.query;
	let end_time=request.end_time;
	let start_time=request.start_time;
	let data={
	    apkey:apkey,
	    end_time:end_time,
	    start_time:start_time,
	    tbname:"qq470474509"
	};
	const params=querystring.stringify(data);
	const option={
	    hostname: `api.open.21ds.cn`,
	    path: `/apiv2/tbkorderdetailsget?${params}`,
	    method: 'GET'
	};
	const req = http.request(option, function(res) {
			console.log('url', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
			})
			res.on('end', function() {
				result = JSON.parse(result).data;
				console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
    })
});
router.get('/get/good/getOrderIdByTpwd',async (ctx)=>{
    return new Promise((resolve,reject)=>{
	let request=ctx.query;
	let tpwd=request.tpwd;
	let data={
	    apkey:apkey,
	    tpwd:tpwd
	};
	const params=querystring.stringify(data);
	const option={
	    hostname: `api.open.21ds.cn`,
	    path: `/apiv2/tpwdtoid?${params}`,
	    method: 'GET'
	};
	const req = http.request(option, function(res) {
			console.log('url', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
			})
			res.on('end', function() {
				result = JSON.parse(result).data;
				console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
    })
});
router.get('/get/good/guessYouLike',async (ctx)=>{
    return new Promise((resolve,reject)=>{
	let request=ctx.query;
	let item_id=request.item_id;
	let data={
	    apkey:apkey,
	    material_id:'6708',
		item_id:item_id
	};
	const params=querystring.stringify(data);
	const option={
	    hostname: `api.open.21ds.cn`,
	    path: `/apiv2/gettkmaterial2?${params}`,
	    method: 'GET'
	};
	const req = http.request(option, function(res) {
			console.log('url', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
			})
			res.on('end', function() {
				result = JSON.parse(result).data;
				//console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
    })
});
router.get('/get/good/getItems', async (ctx) => {
    return new Promise((resolve, reject) => {
	let page = ctx.query.page||1;
	let itemid=ctx.query.itemid;
	let table=ctx.query.table;
		let data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		data = {
				page: page,
				apkey: apkey,
				itemid:itemid
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
				result = JSON.parse(result).data;
				console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
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
})
router.get('/get/good/getCTK', async (ctx) => {
    return new Promise((resolve, reject) => {
	let page = ctx.query.page * 20 || 1;
		let data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		if(type=="special_offer"){
			data = {
				page: page,
				pagesize: 20,
				endprice:'9.9',
				apkey: apkey,
			}
			
		}else if(type=="tqg_goods"){
			data = {
				page: page,
				pagesize: 20,
				itemtype:"tqg",
				apkey: apkey,
			}
		}else if(type=="全部"){
			data = {
				page: page,
				pagesize: 20,
				apkey: apkey
			}
		}else{
			data = {
				page: page,
				pagesize: 20,
				keyword:type,
				apkey: apkey
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
				result = JSON.parse(result).data;
				//console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
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
})

router.get('/get/good/getItemsDes', async (ctx) => {
    return new Promise((resolve, reject) => {
	let num_iid = ctx.query.num_iid;
		let data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		data = {
			apkey: apkey,
			num_iid
		}
		const params = querystring.stringify(data)
		const option = {
			hostname: `api.open.21ds.cn`,
			path: `/apiv2/getitemdesc?${params}`,
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
				result = JSON.parse(result).data;
				console.log('1', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
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
})

router.get('/get/good/getItemInfo', async (ctx) => {
    return new Promise((resolve, reject) => {
	let itemid=ctx.query.itemid
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
			let data = {
				apkey: apkey,
				itemid:itemid
			}
	
		const params = querystring.stringify(data)
		const option = {
			hostname: `api.open.21ds.cn`,
			path: `/apiv2/getiteminfo?${params}`,
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
				result = JSON.parse(result).data;
				console.log('1', result);
				console.log(itemid);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
	})
})

router.get('/get/good/getSmallImg', async (ctx) => {
     return new Promise((resolve, reject) => {
		let data={};
		let itemid = ctx.query.id;
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		data = {
				itemid:itemid,
				apkey: apkey,
				pid:'mm_133093062_391450189_107723950192',
				tbname:'qq470474509'
			}
		const params = querystring.stringify(data)
		const option = {
			hostname: `api.open.21ds.cn`,
			path: `/apiv1/getiteminfo?${params}`,
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
				console.log('小图获取成功');
				resolve(result);
				ctx.body=result;
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
	})
})



router.get('/get/good/detailgoods', async (ctx) => {
    console.log("商品详情开始查询");
	let itemid = ctx.query.id;
	let relationId = ctx.query.relationId;
//	let pid = 'mm_133093062_63750231_20726150150';
//	let pid = 'mm_133093062_63750231_107561750044';
	let isCollection = 0;
	return new Promise((resolve, reject) => {
		let data={};
		data = {
				itemid:itemid,
				apkey: apkey,
				pid:'mm_133093062_63750231_107561750044',
				tbname:'qq470474509',
				shorturl: 1,
		        tpwd: 1,
				relationid:relationId
			}
		console.log(ctx.query);
		const params = querystring.stringify(data)
		const option = {
			hostname: `api.open.21ds.cn`,
			path: `/apiv2/getitemgyurl?${params}`,
			method: 'GET'
		}
		const req = http.request(option, function(res) {
			console.log('u', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
			})
			res.on('end', function() {
				result = JSON.parse(result);
				console.log('111', result);
				resolve(result);
				console.log('cc', result[0])
				
				let linkt = linkTransfer(itemid, pid);
				
				//let small_images = result.small_images.split(',');
				//let small_images=result.result.data
				//result.small_images = small_images
				// result.detailimg = detailimg
				//result.short_url = linkt.short_url
				//result.tkl = linkt.tpwd
				 //console.log('tp',small_images);
				//let small_images=await getimgs(apkey, id);
				//console.log(small_images);
				//getSmallImg(apkey, id).then(res => {
				  //  small_images=res.data.n_tbk_item.small_images.string;
				    //console.log(res.data.n_tbk_item.small_images);
				    
				//});
				ctx.body = {
				        code: 200,
				        msg: '获取商品详情成功',
				        //small_images:small_images,
				        result,
			            }
			})
		})
		req.on('error', function(e) {
			console.log(e.message)
		})
		req.end();
	})
});
//商品详情
router.get('/get/good/detailgoods1', async (ctx) => {
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
        result = await msql.query(`select * from ${type} WHERE coupon_end_time > now() limit ${page},20`)
    } else if (screen == 1) {
        result = await msql.query(`SELECT  * from ${type} WHERE coupon_end_time > now() ORDER BY volume DESC limit ${page},20`)
    } else if (screen == 2) {
        result = await msql.query(`SELECT  * from ${type} WHERE coupon_end_time > now() ORDER BY coupon_start_time DESC limit ${page},20`)
    } else if (screen == 3 && jg == 0) {
        result = await msql.query(`SELECT  * from ${type} WHERE coupon_end_time > now() ORDER BY quanhoujia DESC limit ${page},20`)
    } else if (screen == 3 && jg == 1) {
        result = await msql.query(`SELECT  * from ${type} WHERE coupon_end_time > now() ORDER BY quanhoujia ASC limit ${page},20`)
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
const http = require('https');
const querystring = require('querystring');
router.get('/get/good/othergood', async(ctx) =>{
	return new Promise((resolve, reject) => {
	let page = 1;
	let type = ctx.query.type || 'item'
	let screen = ctx.query.screen || 0; // screen:0精选默认， 1销量，2最新，3价格
	let jg = ctx.query.jg || ''; // jg ：1升序， 0降序
	console.log('pages:'+page+"-"+type+"-"+screen+"-"+jg);
		let data={};
		const apkey="af030b85-4e9a-a924-bd79-c4a1d6ed8cae";
		if(type=="special_offer"){
			data = {
				page: page,
				pagesize: 20,
				endprice: 9.9,
				apkey: apkey,s
			}
			
		}else if(type=="tqg_goods"){
			data = {
				page: page,
				pagesize: 20,
				itemtype:"tqg",
				apkey: apkey,
			}
		}else{
			data = {
				page: page,
				pagesize: 20,
				itemtype:"item",
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
			console.log('url22211', option.path)
			let result = ''
			res.setEncoding('utf-8');
			res.on('data', function(chunk) {
				result += chunk;
				console.log(result);
			})
			res.on('end', function() {
				result = JSON.parse(result);
				console.log('11111111111', result);
				resolve(result);
				ctx.body={
				    code:200,
				    result	
				}
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

