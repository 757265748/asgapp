const router = require('koa-router')();
const { Sql } = require('../../config/db');
const msql = new Sql();

//商品收藏增加
router.post('/post/good/goodcollection/add', async (ctx) => {
    let data = ctx.request.body;
    console.log('data信息', data);
    await msql.query(`INSERT good_collection (phone,volume,quanhoujia,youhuiquan,zk_final_price,title,pict_url,num_iid) value ('${data.phone}','${data.volume}','${data.quanhoujia}','${data.youhuiquan}','${data.zk_final_price}','${data.title}','${data.pict_url}','${data.num_iid}')`)

    ctx.body = {
        code: 200,
        msg: "insert success"
    }
})
//商品收藏减少
router.post('/post/good/goodcollection/delete', async (ctx) => {
    let data = ctx.request.body;
    console.log('删除的信息', data);
    await msql.query(`DELETE FROM good_collection WHERE phone = '${data.phone}' and num_iid='${data.num_iid}'`)
    ctx.body = {
        code: 200,
        msg: "insert success"
    }
})
//收藏商品集合
router.get('/get/good/goodcollection/list', async (ctx) => {
    let user = ctx.query.user
    let result = await msql.query(`select *from good_collection where phone = ${user}`);
    console.log(result);
    if (!result) {
        return ctx.body = {
            code: 100,
            msg: '暂无收藏商品。'
        }
    }

    ctx.body = {
        code: 200,
        result,
    }
})
module.exports = router;

