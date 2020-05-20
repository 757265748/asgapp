const router = require('koa-router')();
const { getSearch } = require('./js/search');
const { Sql } = require('../../config/db');
const msql = new Sql();
router.get('/get/good/kwsearch', async (ctx) => {
    let keyword = ctx.query.keyword;
    let page = ctx.query.page;
    console.log('keyword', keyword)
    let result = await msql.query(`select * from yhq_goods where item_description like '%${keyword}%'  LIMIT ${page},20`);
    console.log(result)
    if (result.length == 0) {
        return ctx.body = {
            code: 100,
            msg: '未查到相关优惠券',
        }
    }
    ctx.body = {
        code: 200,
        result,
    }
})
module.exports = router;