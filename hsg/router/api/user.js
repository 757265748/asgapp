const router = require('koa-router')();
const { Sql } = require('../../config/db');
const md5 = require('../../config/md5com');
const msql = new Sql();

//运营商会员列表
router.post('/post/pc/user-select', async (ctx) => {
    let data = ctx.request.body;
    console.log("data", data)
    let results = await _query(`SELECT * FROM user where OperatorCode = '${data.OperatorCode}'`);

    ctx.body = {
        success: 200,

        results,

    };
})

//运营商会员列表(去掉运营商本身)
router.post('/post/pc/user-select1', async (ctx) => {
    let data = ctx.request.body;
    let results;
    console.log("data", data)
    if (data.keycode == '') {
        results = await _query(`SELECT * FROM user where OperatorCode = '${data.OperatorCode}' and  PID != '${data.pid}'`);
    }
    else {
        results = await _query(`SELECT * FROM user where OperatorCode = '${data.OperatorCode}' and  PID != '${data.pid}' and (phone ='${data.keycode}' or username ='${data.keycode}')`);
    }
    ctx.body = {
        success: 200,

        results,

    };
})
//更新用户信息
router.post('/post/user/upuser', async (ctx) => {
    let { data } = ctx.request.body
    let pwd = data.pwd;
    pwd = md5.md5(pwd + md5.MD5_SUFFIX);
    await msql.query(`update user set username ='${data.name}',pwd='${pwd}',phone='${data.phone}',zfb='${data.zfb}',zfbname='${data.zfbname}',sex='${data.sex}',jurisdiction='${data.level}',usercode='${data.usercode}' where phone = '${data.phone}'`)
    ctx.body = {
        code: 200,
        msg: '更新成功'
    }
})
router.post('/post/user/getparent', async (ctx) => {
    let { pid } = ctx.request.body
    console.log('上级pid', pid)
    let data = await msql.query(`CALL getparent('${pid}')`)
    data = data&&data[0]
    console.log(data)
    ctx.body = {
        code: 200,
        data
    }
})
router.post('/post/user/getchildren', async (ctx) => {
    let { pid } = ctx.request.body
    console.log('上级pid', pid)
    let data = await msql.query(`CALL getchildren('${pid}')`)
    data = data&&data[0]
    console.log(data)
    ctx.body = {
        code: 200,
        data
    }
})

async function _query(str) {
    let ret = await msql.query(str);
    // msql.endSql();
    return ret;
}
module.exports = router;