const router = require('koa-router')();
const { Sql } = require('../../config/db');
const msql = new Sql();
//订单列表获取
router.post('/post/orderlist', async (ctx) => {
    let { operatorcode } = ctx.request.body
    // let {operatorcode} = ctx.query
    let data = await msql.query(`CALL Getopertororderlist('${operatorcode}')`)
    data = data[0][0]
    console.log('数据', data)
    if (!data) {
        return ctx.body = {
            code: 100,
            msg: "暂无订单数据"
        }
    }
    ctx.body = {
        code: 200,
        data,
    }
})
//订单月查询
router.post('/post/order/searchmonth', async (ctx) => {
    let { adzone_id} = ctx.request.body
    // let { ordernum } = ctx.query
    let results = await msql.query(`select * from orderlist where adzone_id = ${adzone_id} and DATE_FORMAT( create_time, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' ) `)
   
    ctx.body = {
        code: 200,
        results
    }

})

//订单历史查询
router.post('/post/order/searchtotal', async (ctx) => {
    let { adzone_id} = ctx.request.body
    // let { ordernum } = ctx.query
    let results = await msql.query(`select * from orderlist where adzone_id = ${adzone_id} `)
   
    ctx.body = {
        code: 200,
        results
    }

})

//订单查询
router.post('/post/order/search', async (ctx) => {
    let { ordernum } = ctx.request.body
    // let { ordernum } = ctx.query
    let result = await msql.query(`select * from orderlist where trade_parent_id = ${ordernum} `)
    let data = {
        trade_parent_id: result[0].trade_parent_id,
        trade_id: result[0].trade_id,
        pay_price: result[0].pay_price,
        commission: result[0].commission,
        tk_status: result[0].tk_status,
        order_type: result[0].order_type,
        total_commission_fee: result[0].total_commission_fee,
        alipay_total_price: result[0].alipay_total_price,
        create_time: result[0].create_time
    }
    ctx.body = {
        code: 200,
        data
    }

})
module.exports = router