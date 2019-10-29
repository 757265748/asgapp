const router = require('koa-router')();
const { Sql } = require('../../config/db');
const sendmsg = require('./js/sendmsg');
const _util = require('./util/util')
const { setRedisItem, getRedisItem } = require('./util/redis');
const msql = new Sql();
const multer = require('koa-multer');//加载koa-multer模块
//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });
//路由
router.post('/post/user/avatard', upload.single('file'), async (ctx, next) => {
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }
})

router.post('/post/user/changename', async (ctx) => {
    let data = ctx.request.body;
    let ret = await msql.query(`UPDATE user SET Username = '${data.name}' WHERE Phone = '${data.phone}'`)
    console.log(ret)
    return ctx.body = {
        code: 200,
        msg: "修改成功"
    }
})
router.post('/post/user/changephone/sendyzm', async (ctx) => {
    let data = ctx.request.body;
    let code = await sendmsg(data.phone);
    console.log(data.phone, code);
    setRedisItem(data.phone, code, 300);
    let scode = await getRedisItem(data.phone);
    console.log('set', data.phone, scode);
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
router.post('/post/user/bindzfb', async (ctx) => {
    let { name, phone, code, zfbname } = ctx.request.body;
    console.log('用户信息', name, phone, code, zfbname)
    let scode = await getRedisItem(zfbname);
    if (!code || code != scode) {
        return ctx.body = {
            code: 100,
            msg: '验证码无效'
        }
    }
    let ret = await msql.query(`UPDATE user SET realname = '${name}', zfbname='${zfbname}' WHERE phone = ${phone}`);
    console.log('set', ret.affectedRows);
    if (ret && ret.affectedRows != 1) {
        return ctx.body = {
            code: 100,
            msg: '修改失败请检查手机号码是否正确'
        }
    }
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
router.post('/post/user/changephone/changephone', async (ctx) => {
    let data = ctx.request.body;
    let code = await getRedisItem(data.phone);
    console.log('get', data.phone, code);
    if (!code || data.code != code) {
        return ctx.body = {
            code: 100,
            msg: "验证码无效"
        }
    }
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
router.post('/post/user/newphone/sendyzm', async (ctx) => {
    let data = ctx.request.body;
    let isExistence = await _util.checkuser(data.phone);
    if (isExistence) {
        return ctx.body = {
            code: 100,
            msg: '用户已存在'
        }
    }
    code = await sendmsg(data.phone);
    setRedisItem(data.phone, code, 300);
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
router.post('/post/user/newphone/newphone', async (ctx) => {
    let data = ctx.request.body;

    let code = await getRedisItem(data.phone);
    if (!code || data.code != code) {
        return ctx.body = {
            code: 100,
            msg: "验证码无效"
        }
    }
    await msql.query(`UPDATE user SET Phone = '${data.phone}' WHERE Phone = '${data.phone}'`)
    ctx.body = {
        code: 200,
        msg: 'sucess'
    }
})
//后台用户密码更改
router.post('/post/user/uppsw', async (ctx) => {
    let { phone, oldpsw, newpsw } = ctx.request.body;


    let isTure = await msql.query(`SELECT * from user where phone = '${phone}' and pwd ='${oldpsw}'`)
    isTure = isTure[0]
    if (!isTure) {
        return ctx.body = {
            code: 100,
            msg: '旧密码验证失败，请重新输入'
        }
    }
    await msql.query(`update user set pwd = '${newpsw}' where phone = '${phone}'`)
    ctx.body = {
        code: 200,
        msg: '修改成功'
    }
})
module.exports = router