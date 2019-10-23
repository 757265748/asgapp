const router = require('koa-router')();
const { Sql } = require('../../config/db');
const md5 = require('../../config/md5com');
const _util = require('./util/util')

const msql = new Sql();

//运营商列表
router.post('/post/pc/operatordetail-select', async (ctx) => {
    console.log('执行查询运营商列表')
    //let page = ctx.query.page * 20 || 0;
    let results = await _query(`SELECT * FROM Operator`);
    ctx.body = {
        code: 200,
        results,
    };
})
//会员列表
router.post('/post/pc/memberlist', async (ctx) => {
    let { operatorcode } = ctx.request.body
    // let {opteatecode} = ctx.query
    console.log('adsf', operatorcode);
    let result = await msql.query(`CALL operatorUserInfo('${operatorcode}')`)
    result = result[0]
    console.log('data', result, 'code is', operatorcode)
    if (!result[0]) {
        return ctx.body = {
            code: 100,
            msg: 'no data'
        }
    }
    ctx.body = {
        code: 200,
        result
    }
})
//新增运营商
router.post('/post/pc/operatordetail-insert', async (ctx) => {
    let data = ctx.request.body;
    let InviteCode = _util.createCode(data.phone,8);
    
    let pwd = md5.md5('123456' + md5.MD5_SUFFIX);
    let nowdate = data.EffectiveTime.slice(0,10)
    console.log("data",data);
    let ret = await msql.query(`CALL insertoperator('${data.OperatorCode}','${data.OperatorName}','${data.OperatorPID}','${data.phone}','${pwd}','${InviteCode}','${nowdate}')`)

    ctx.body = { code: 200, msg: '新增成功！' };
})

//修改运营商
router.post('/post/pc/operatordetail-update', async (ctx) => {
    let data = ctx.request.body;
    console.log("data",data)
    let results = await msql.query(`select  * from Operator where  OperatorPID = '${data.OperatorPID}'`)
    if (results.length > 0) {
        let Operator = await msql.query(`update Operator set OperatorName ='${data.OperatorName}',OperatorCode = '${data.OperatorCode}' where OperatorPID = '${data.OperatorPID}'`)

        ctx.body = { code: 200, msg: '修改成功！' };
    } else {
        let InviteCode = _util.createCode(data.phone,8);
    
        let pwd = md5.md5('123456' + md5.MD5_SUFFIX);
        let nowdate = data.EffectiveTime.slice(0,10)
        console.log("nowdate",nowdate);
        let ret = await msql.query(`CALL insertoperator('${data.OperatorCode}','${data.OperatorName}','${data.OperatorPID}','${data.phone}','${pwd}','${InviteCode}','${nowdate}')`)

        // let Operator = await msql.query(`INSERT Operator (OperatorPID,OperatorName,OperatorCode) value ('${data.OperatorPID}','${data.OperatorName}','${data.OperatorCode}')`)
        // let pidtable = await msql.query(`update pidtable set status =1 where pid = '${data.OperatorPID}'`)
        ctx.body = { code: 200, msg: '新增成功！' };
    }

})

//删除运营商
router.post('/post/pc/OperatorDetail-delete', async (ctx) => {
    let data = ctx.request.body;
    //console.log(`delete Operator from where OperatorPID = '${data.OperatorPID}'`)
    let Operator = await msql.query(`delete from Operator  where OperatorPID = '${data.OperatorPID}'`)

    ctx.body = { code: 200, msg: '删除成功！' };
})

//获取PID
router.post('/post/pc/pidtable', async (ctx) => {
    let data = ctx.request.body;
    //console.log(`delete Operator from where OperatorPID = '${data.OperatorPID}'`)
    let results = await msql.query(`select  * from pidtable where status=0 LIMIT 0 , 1`)

    ctx.body = { code: 200, results };
})
//获取会员详细信息
router.post('/post/pc/usermessage', async (ctx) => {
    let { phone } = ctx.request.body
    let data = await msql.query(`select * from user where phone = '${phone}'`)
    data = data[0]
    delete data.pwd

    ctx.body = {
        code: 200,
        data
    }
})
//权重升级
router.post('/post/pc/upgradelevel', async (ctx) => {
    let { phone, type } = ctx.request.body
    console.log('等级', type);
    let jurisdiction = type == 2 ? '团长' : '合伙人'
    console.log('等级', type, jurisdiction);
    await msql.query(`update user set type = '${type}' , jurisdiction = '${jurisdiction}' where phone = '${phone}'`)
    let data = await msql.query(`select * from user where phone = '${phone}'`)
    data = data[0]
    delete data.pwd
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
