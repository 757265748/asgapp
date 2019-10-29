const router = require('koa-router')();
const { Sql } = require('../../config/db');

const msql = new Sql();

router.post('/post/pc/voucherhistory-select', async (ctx) => {
    let data = ctx.request.body;
    console.log("data",data)
    console.log("keyCode",data.KeyCode)

    let results = await _query(`SELECT * FROM VoucherHistory where keyCode = '${data.KeyCode}'`);
   
    ctx.body = {
        code: 200,

        results,

    };
})

router.get('/get/pc/voucherhistory-select', async (ctx) => {
    // let {keyCode} = ctx.request.body;
    // console.log("data",keyCode)

    let results = await _query(`SELECT * FROM VoucherHistory `);
   
    ctx.body = {
        code: 200,

        results,

    };
})

router.post('/post/pc/voucherhistory-updateorinsert', async (ctx) => {
    let {keyCode} = ctx.request.body;
    console.log("data",keyCode)

    let results = await _query(`SELECT * FROM VoucherHistory where keyCode = '${keyCode}'`);
    if(results.length){
        await _query(`update VoucherHistory set number = number+1 where keyCode = '${keyCode}'`);
    }else{
        await _query(`insert VoucherHistory(keyCode,number) values('${keyCode}',1`);
    }
    ctx.body = { status: 200, msg: '操作成功！' };
})

async function _query(str) {
    let ret = await msql.query(str);
    // msql.endSql();
    return ret;
}
module.exports = router;