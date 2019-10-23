const { Sql } = require('../../../config/db');
const msql = new Sql()
function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}
function createCode(user_id, n) {
    const source_string = 'E5FCDG3HA4B1NPJ2RSTV67MWX89KLYZ0';
    let num = user_id;


    let code = '';

    while (num > 0) {

        let mod = num % 32

        num = (num - mod) / 32

        code = code + source_string[mod - 1];
    }
    code = (Array(n).join(0) + code).slice(-n).toString().toUpperCase();
    code = code.replace(0,RndNum(1));
    return code;

}

//检查用户是否存在
async function checkuser(phone) {
    // console.log(phone);
    let user = await msql.query(`select *from user where phone = ${phone}`);
    user = user[0];
    return user ? true : false
}
//createCode(18050784265);

// console.log(createCode(13774889226, 8));
// for(let i = 0; i<100;i++){
//     let a = RndNum(6);
//     console.log('code',a);
// }

module.exports = { RndNum, createCode,checkuser }