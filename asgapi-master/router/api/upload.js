const router = require('koa-router')();
const koabody = require('koa-body');
const path = require('path');
const fs = require('fs');
const mkdir = require('./util/mkdir')
const { Sql } = require('../../config/db');
const msql = new Sql();
router.post('/post/upload/:type', koabody({ jsonLimit: '2mb', multipart: true }), async (ctx) => {
    let type = ctx.params.type
    const data = ctx.request.files;
    console.log('表单',ctx.request.body,data)
    const { phone } = ctx.request.body
    let ret = await _upload(data, type);
    if (type == 'avatar') {
        await msql.query(`UPDATE user SET avatar = '${ret}' WHERE Phone = '${phone}'`)
    }

    ctx.body = {
        code: 200,
        result: ret
    }
})

//上传
async function _upload(data, type) {
    let fspath = path.join(__dirname, `../../static/uploads/${type}`);
    console.log('文件路径', fspath);
    await mkdir(fspath) //判断文件路径是否存在不存在则创建
    let filename = `${Date.parse(new Date())}.${data.file.name.slice(-3)}`;
    const savePath = path.join(`${fspath}`, `${filename}`)
    const reader = fs.createReadStream(data.file.path)
    const writer = fs.createWriteStream(savePath)

    return new Promise((resolve, reject) => {
        var stream = reader.pipe(writer);
        stream.on('finish', function () {
            resolve(`http://localhost:3302/uploads/${type}/${filename}`);
        });
    })
}
module.exports = router




