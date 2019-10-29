/**
 * 用户注册接口
 * 
 *  */
const router = require('koa-router')();
const { Sql } = require('../../config/db');
const md5 = require('../../config/md5com');
const _util = require('./util/util')
const sendmsg = require('./js/sendmsg')
const msql = new Sql();
const { setRedisItem, getRedisItem } = require('./util/redis');
router.post('/post/user/mob/register', async (ctx) => {
    let data = ctx.request.body;
    let yqm = await msql.query(`select * from user where InviteCode = ${data.yqm} `);
    console.log('yqm', yqm);
    if (!yqm[0]) {
        return ctx.body = {
            code: 100,
            msg: "邀请码不存在！"
        }
    }
    let code = await getRedisItem(data.phone);
    if (code != data.code) {
        return ctx.body = {
            code: 100,
            msg: "验证码无效"
        }
    }
    let InviteCode = _util.createCode(data.phone,8);
    
    let pwd = md5.md5('123456' + md5.MD5_SUFFIX);
    console.log('users',data,pwd);
    let ret = await msql.query(`CALL Register('${data.phone}','${pwd}','${data.yqm}','${InviteCode}',@a,@b)`)
    console.log('注册成功信息',ret);
    ctx.body = { 
        code:200,
        msg:"注册成功!",
        result:{
            phone:data.phone,
            invitecode:InviteCode,
            username:data.phone
        }
     };
})
router.post('/post/user/mob/register/sendyzm', async (ctx) => {
    let data = ctx.request.body;
    let isExistence = await _util.checkuser(data.phone);
    if (isExistence) {
        return ctx.body = {
            code: 100,
            msg: '用户已存在,请直接登录'
        }
    }
    // let code = await getRedisItem(data.phone);// 验证码的值

    // if (code) {
    //     return ctx.body = {
    //         code: 100,.s
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
router.post('/post/user/login/register/success/',async (ctx)=>{
    this.redirect('/index/reUser');
})
//检查用户是否存在
// async function checkuser(data) {
//     console.log(data);
//     let user = await msql.query(`select *from user where phone = ${data.phone}`);
//     user = user[0];
//     return user ? true : false
// }
module.exports = router;






// async function checkdata(data) {
//     console.log(data);
//     let pwd = '123456';
//     pwd = md5.md5(pwd + md5.MD5_SUFFIX);
//     let user = await msql.query(`select *from user where phone = ${data.user}`);
//     user = user[0]; //查询用户是否已经存在
//     // console.log(user);
//     if (user) {
//         return {
//             code: 100,
//             msg: '用户已存在请直接登入'
//         }
//     } else {
//         console.log('邀请码是1',data.yqm);
//         let checkyqm = await msql.query(`SELECT *from user where InviteCode = '${data.yqm}'`);//检查邀请码是否有效
//         checkyqm = checkyqm[0];
//         console.log('yqmIs: ',checkyqm);
//         if (!checkyqm) {
//             return {
//                 status: 100,
//                 msg: '邀请码无效',
//             }
//         }
//         let newyqm = _util.RndNum(8);
//         user = await msql.query(`INSERT user (Username,Phone,pwd,InviteCode,type) value ('${data.user}','${data.user}','${pwd}','${newyqm}','3')`)
//         if (user.serverStatus == 2) {
//             return {
//                 status: 200,
//                 msg: '注册成功！',
//                 user: {
//                     name: data.user,
//                     phone: data.user,
//                     yqcode: newyqm
//                 },
//             }
//         }
//     }
// }