const router = require('koa-router')();
const { Sql } = require('../../config/db');

const msql = new Sql();
//用户中心页用户佣金信息
router.post('/post/yj/getcommission', async (ctx) => {
    let data = ctx.request.body;
    console.log('佣金APIrun,Pid：', data.phone)
    let res = await msql.query(`CALL GetCommissionNew(${data.phone})`);
    res = res[0][0];
    console.log('该用户的佣金信息', res);
    if (!res) {
        return ctx.body = {
            code: 100,
            msg: "查询失败"
        }
    }
    ctx.body = {
        code: 200,
        msg: '查询成功',
        result: res
    }
})
//获取佣金
router.get('/get/yj/getyj', async (ctx) => {
    let result = await msql.query('select * from commissionratio')
    let data = {}
    data.tz = { role: result[0].role, ratio: result[0].ratio }
    data.one = { role: result[1].role, ratio: result[1].ratio }
    data.two = { role: result[2].role, ratio: result[2].ratio }
    data.three = { role: result[3].role, ratio: result[3].ratio }
    ctx.body = {
        code: 200,
        result: data
    }
})
//更改佣金比列
router.post('/post/yj/upcommission', async (ctx) => {
    let { tzratio, oneratio, tworatio, threeratio } = ctx.request.body
    await msql.query(`UPDATE commissionratio SET ratio = '${tzratio / 100}' WHERE type = 0`)
    await msql.query(`UPDATE commissionratio SET ratio = '${oneratio / 100}' WHERE type = 1`)
    await msql.query(`UPDATE commissionratio SET ratio = '${tworatio / 100}' WHERE type = 2`)
    await msql.query(`UPDATE commissionratio SET ratio = '${threeratio / 100}' WHERE type = 3`)
    ctx.body = {
        code: 200,
        msg: '修改成功'
    }

})
//
router.post('/post/yj/getprofitmsg', async (ctx) => {
    let { pid } = ctx.request.body;
    console.log(pid)
    let result = await msql.query(`CALL OnlineCommission('${pid}')`)
    result = result[0][0];
    if (!result) {
        return ctx.body = {
            code: 100,
            msg: 'error'
        }
    }
    ctx.body = {
        code: 200,
        result
    }
})
//获取实时余额
router.post('/post/yj/balance', async (ctx) => {
    let { pid } = ctx.request.body;
    let result = await msql.query(`select CommissionSurplus from commission_total WHERE pid = '${pid}'`);
    result = result[0]
    result = result || 0;
    ctx.body = {
        code: 200,
        result
    }
})
//提现申请
router.post('/post/yj/tx', async (ctx) => {
    let { pid, phone, money } = ctx.request.body;
    console.log('提现申请', pid, phone, money)
    let date = new Date();
    let nowdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
    // console.log(nowdata);
    await msql.query(` CALL CashWithdrawal('${pid}','${money}','${nowdate}','${phone}')`)

    ctx.body = {
        code: 200,
        msg: 'suceess'
    }
})
// 提现申请列表
router.get('/get/yj/txlist', async (ctx) => {
    let data = await msql.query('select * from commissiontrans')
    let status = new Map().set(0, '审核中').set(1, '审核通过').set(2, '审核失败')
    for (let item of data) {
        item.TransDate = item.TransDate.toLocaleString();
        item.StautsType = status.get(item.StautsType)
    }
    ctx.body = {
        code: 200,
        data
    }
})
module.exports = router