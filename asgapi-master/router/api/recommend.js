const router = require('koa-router')();
const { Sql } = require('../../config/db');
 
const msql = new Sql();
router.get('/get/good/recommend', async(ctx) =>{
    let result = await msql.query('select * from recomond_good');
    console.log(result[0]);
    ctx.body = {
        code:200,
        result,
    }
})

module.exports = router