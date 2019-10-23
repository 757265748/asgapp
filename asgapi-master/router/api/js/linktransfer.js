// 获取商品图片属性详情
const http = require('https');
const querystring = require('querystring')
function linkTransfer(num_iid, adzoneid = 'mm_234890166_197900069_54657250100') {
    return new Promise((resolve, reject) => {
        const data = {
            apkey: 'af030b85-4e9a-a924-bd79-c4a1d6ed8cae',
            pid: adzoneid,
            tbname: '饕餮hcz',
            itemid: num_iid,
            shorturl: 1,
            tpwd: 1,
        }
        const params = querystring.stringify(data)
        const option = {
            hostname: `api.open.21ds.cn`,
            path: `/apiv1/getitemgyurl?${params}`,
            method: 'GET'
        }
        const req = http.request(option, function (res) {
            console.log('url', option.path)
            let result = ''
            res.setEncoding('utf-8');
            res.on('data', function (chunk) {
                result += chunk;
            })
            res.on('end', function () {

                result = JSON.parse(result);
                console.log('1',result);
                resolve(result.result.data)
            })
        })
        req.on('error', function (e) {
            console.log(e.message)
        })
        req.end();
    })
}
// linkTransfer(581830303391)
module.exports = { linkTransfer }