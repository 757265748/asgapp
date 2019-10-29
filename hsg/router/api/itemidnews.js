const router = require('koa-router')();
const { Sql } = require('../../config/db');

const msql = new Sql();

//新闻列表
router.post('/post/pc/itemid_news-select', async (ctx) => {
    let data = ctx.request.body;
    //console.log("data",data)

    let results = await _query(`SELECT * FROM itemid_news where OperatorCode = '${data.OperatorCode}'`);
    // console.log(results[1].small_images)
    for (let item of results) {
        if (item.pict_url) {
            item.pict_url = item.pict_url.split(',')
            //item.small_images = item.small_images.split(',')
        } else {
            item.pict_url = []
            //item.small_images = []
        }
    }
    console.log(results)
    ctx.body = {
        code: 200,

        results,

    };
})

//新闻新增
router.post('/post/pc/itemid_news-insert', async (ctx) => {
    let data = ctx.request.body;
    console.log("data", data)

    let results = await _query(`insert itemid_news(num_iid,itemid_content,pict_url,OperatorCode) 
        values('${data.num_iid}','${data.itemid_content}','${data.pic_url.toString()}','${data.OperatorCode}')`);

    ctx.body = {
        code: 200,
        results,

    };
})

//新闻删除
router.post('/post/pc/itemid_news-delete', async (ctx) => {
    let data = ctx.request.body;
    //console.log("data",data)
    let results = await _query(`delete FROM itemid_news where num_iid = '${data.num_iid}'`);

    ctx.body = {
        code: 200,
        results,
    };
})

async function _query(str) {
    let ret = await msql.query(str);
    // msql.endSql();
    return ret;
}
module.exports = router;