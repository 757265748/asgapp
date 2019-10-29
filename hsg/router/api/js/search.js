const http = require('https');
const querystring = require('querystring')
function getSearch(keyword, adzoneid = '54657250100') {
    return new Promise((resolve, reject) => {
        let data = {
            apkey: 'af030b85-4e9a-a924-bd79-c4a1d6ed8cae',
            adzoneid,
            siteid: '197900069',
            tbname: '饕餮hcz',
            sort: 'total_sales',
            keyword,
        }
        let params = querystring.stringify(data);
        const option = {
            hostname: `api.open.21ds.cn`,
            path: `/apiv1/gettkmaterial?${params}`,
            method: 'GET'
        }
        const req = http.request(option, async function (res) {
            // console.log('url',option.url);
            let str = ''
            res.setEncoding('utf-8');
            res.on('data', function (chunk) {
                str +=chunk;
                 
            })
            res.on('end',function(){
                let s = {}
                // str = Object.create(str)
                str = JSON.parse(str)
                if(str.code!=200){
                    console.log(str)
                    return
                }
                resolve(str.data)
            })
        })
        req.on('error', function (e) {
            console.log(e.message)
        })
        req.end();
    })
}
// console.log('aaaa',s);
module.exports = { getSearch }