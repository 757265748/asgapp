const router = require('koa-router')();
const { Sql } = require('../../config/db');
const md5 = require('../../config/md5com');
const _util = require('./util/util')

const msql = new Sql();
//获取新闻分类栏目
router.get('/get/news/newcolumn', async (ctx) => {
    let { type } = ctx.query
    // console.log(type)
    let data = await msql.query(`select * FROM columntable where uppercolumn= '${type ? type : ''}'`)
    // console.log('newlist', data)
    ctx.body = {
        code: 200,
        data
    }
})
//获取全部新闻栏目
router.get('/get/news/allnewcolumn', async (ctx) => {
    let { type } = ctx.query
    console.log(type)
    let ret = []
    let data = await msql.query(`select columnlevel FROM columntable where uppercolumn= '${type ? type : ''}'`)
    for (let item of data) {
        ret.push({
            value: item.columnlevel,
            label: item.columnlevel,
            children: []
        })
    }
    for (let item of ret) {
        await addChild(item)
    }
    ctx.body = {
        code: 200,
        data: ret
    }
})
//循环增加子节点
async function addChild(child) {
    // console.log('参数子节点', child)
    let cdata = await msql.query(`select columnlevel FROM columntable where uppercolumn= '${child.value}'`)
    // console.log('子节点', cdata)
    if (!cdata[0]) {
        console.log('no child')
        return
    }
    for (let item of cdata) {
        child.children.push({
            value: item.columnlevel,
            label: item.columnlevel,
            children: []
        })
    }
    // console.log('增加后的', child)
    if (child.children.length > 0) {
        await child.children.forEach(async (item) => {
            await addChild(item)
        })
    }
    return
}
//新增新闻栏目
router.post('/post/news/insertnewscolumn', async (ctx) => {
    let { column1, column2, column3 } = ctx.request.body
    // console.log(column1, column2, column3)
    let ret = await msql.query(`CALL ColumnInsert('${column1 || ''}','${column2 || ''}','${column3 || ''}')`)
    // console.log(ret)
    ret = ret && ret[0][0]
    ctx.body = {
        code: 200,
        msg: ret
    }
})
//获取所有新闻栏目用于新闻栏目列表
router.get('/get/new/getnewscolumn', async (ctx) => {
    let ret = await msql.query(`select columnlevel,levels from columntable`)
    ctx.body = {
        code: 200,
        data: ret
    }
})
//删除新闻栏目
router.post('/post/news/deletenewscolumn', async (ctx) => {
    let { column } = ctx.request.body
    let ret = await msql.query(`CALL columnDel('${column}')`)
    ctx.body = {
        code: 200,
        data: ret
    }
})
//更新新闻栏目
router.post('/post/news/updatacolumn', async (ctx) => {
    let { newval, oldval } = ctx.request.body
    let ret = await msql.query(`CALL columnupdate('${oldval}','${newval}')`)
    console.log(ret)
    ctx.body = {
        code: 200,
        data: ret
    }
})
//插入新闻
router.post('/post/news/insertnews', async (ctx) => {
    let { news_type, news_content, news_title, create_user, id } = ctx.request.body
    let date = new Date()
    console.log(create_user)
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    if (id) {
        await msql.query(`REPLACE INTO news(news_title,news_content,news_create_time,news_type,create_user,id) values ('${news_title}','${news_content}','${date}','${news_type}','${create_user}','${id}') `)

    } else {
        await msql.query(`REPLACE INTO news(news_title,news_content,news_create_time,news_type,create_user) values ('${news_title}','${news_content}','${date}','${news_type}','${create_user}') `)
    }
    ctx.body = {
        code: 200,
        msg: '操作成功'
    }
})

//获取新闻列表
router.get('/get/news/newslist', async (ctx) => {
    let { create_user } = ctx.query

    let data = await msql.query(`select * from news where create_user ='${create_user}'`)
    ctx.body = {
        code: 200,
        data
    }
})
router.post('/post/news/deletenews', async (ctx) => {
    let { id } = ctx.request.body
    // console.log('删除的', id)
    let ret = await msql.query(`delete from news where id='${id}'`)
    // console.log(ret)
    ctx.body = {
        code: 200,
        msg: '删除成功!'
    }
})

module.exports = router