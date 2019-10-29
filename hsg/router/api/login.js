const router = require('koa-router')();
const { Sql } = require('../../config/db');
const md5 = require('../../config/md5com');
const sendmsg = require('./js/sendmsg');
const _util = require('./util/util');
const { setRedisItem, getRedisItem } = require('./util/redis');
const msql = new Sql();

router.post('/post/user/pc/login', async (ctx) => {
    let data = ctx.request.body
    console.log('传参', data);
    let result = await checkdata(data);
    // console.log(result);
    // ctx.session['user_id'] = data.data;
    // console.log('loginsession', ctx.session['user_id']);
    ctx.body = result;
})
router.post('/post/user/mob/login', async (ctx) => {
    let data = ctx.request.body;
    //let code = await getRedisItem(data.phone);// 验证码的值
    //if (!code || data.code != code) {
    //    return ctx.body = {
    //        code: 100,
    //        msg: '验证码无效！'
    //    }
    //}
    let user = await msql.query(`select * from user where Phone =  ${data.phone}`);
    console.log('yhss', user)
    return ctx.body = {
        code: 200,
        result: {
            invitecode: user[0].invitecode,
            phone: user[0].phone,
            username: user[0].username,
            zfbname: user[0].zfbname
        }
    }

})
router.post('/post/user/mob/login/sendyzm', async (ctx) => {
    let data = ctx.request.body;
    let isUser = await _util.checkuser(data.phone)
    console.log('yh', isUser);
    if (!isUser) {
        return ctx.body = {
            code: 100,
            msg: "用户不存在请先注册"
        }
    }
    // let code = await getRedisItem(data.phone);// 验证码的值
    // if (code) {
    //     return ctx.body = {
    //         code: 100,
    //         msg: "请勿频繁发送！"
    //     }
    // }
    code = await sendmsg(data.phone);
    setRedisItem(data.phone, code, 300);
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
// 获取用户头像
router.get('/get/user/avatar/:id', async (ctx) => {
    let id = ctx.params.id

    console.log('id的值', id)
    ctx.body = {
        id,
    }
})
//检查用户数据
async function checkdata(data) {
    console.log('检查数据源', data);
    let pwd = data.password;
    pwd = md5.md5(pwd + md5.MD5_SUFFIX);
    let str = `select * from user where phone = '${data.user}'`;
    let ret = await msql.query(str);
    ret = ret[0];
    console.log(ret)
    if (!ret) {
        return {
            code: 100,
            msg: '用户尚未注册'
        }
    } else if (pwd != ret.pwd) {
        return {
            code: 100,
            msg: '用户密码不正确'
        }
    } else {
        return {
            code: 200,
            msg: "suceess",
            user: {
                name: ret.username,
                phone: ret.phone,
                yqcode: ret.invitecode,
                pid: ret.pid,
                avatar: ret.avatar,
                operatorcode: ret.operatorcode,
                jurisdiction: ret.jurisdiction
            },
        }
    }
}

module.exports = router;