// 获取商品图片属性详情
const http = require('https');
function getDetail(num_iid) {
    return new Promise((resolve, reject) => {
        const option = {
            hostname: `hws.m.taobao.com`,
            path: `/cache/desc/5.0?id=${num_iid}&qq-pf-to=pcqq.group`,
            method: 'GET'
        }
        const req = http.request(option, async function (res) {
            console.log('url', option.hostname+option.path);
            let result = ''
            res.setEncoding('utf-8');
            res.on('data', function (chunk) {
                result += chunk;
            })
            res.on('end', function () {
                // console.log('1',str);
                result = JSON.parse(result)
                console.log('result.', result);
                if (result.sellerId) {
                    var regx = /<[^>]*>|<\/[^>]*>/gm;
                    var len = result.wdescContent.pages.length;
                    var image = '';
                    for (var i = 0; i < len; i++) {

                        if (result.wdescContent.pages[i].indexOf("<txt>") != -1) {
                            image+= "";
                        } else {
                            image+= "<img src='" + result.wdescContent.pages[i].replace(regx, "") + "' style='width:100%;max-width:100%'>";
                        }
                    }
                    // console.log('获取的图片',image);
                    resolve(image)
                }
                // console.log('商品详情',str);
            })
        })
        req.on('error', function (e) {
            console.log('商品详情获取出错',e.message)
        })
        req.end();
    })
}
// getDetail(576001827513)
module.exports = { getDetail }