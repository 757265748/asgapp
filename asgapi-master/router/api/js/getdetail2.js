// 获取商品图片属性详情
const http  = require('http');
function getDetail2(num_iid) {
    return new Promise((resolve, reject) => {
        const option = {
            hostname: `h5api.m.taobao.com`,
            path: `/h5/mtop.taobao.detail.getdesc/6.0/?data={"id":"${num_iid}"}&qq-pf-to=pcqq.group`,
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
                if (result.data) { 
                    // console.log('获取的图片',image);
                    resolve(result.data.pcDescContent)
                }else{
                    resolve('');
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
module.exports = { getDetail2 }