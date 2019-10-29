const SMSClient = require('../util/message')
const _util = require('../util/util');
//阿里云短信key
module.exports = function (PhoneNumbers) {
    return new Promise((resolve, reject) => {
        const accessKeyId = 'LTAIaTyZkTEoxElB'
        const secretAccessKey = 'KaRTyu8dHZPaIwGmchGh58LDqAhHN0'
        //初始化sms_client
        let smsClient = new SMSClient({ accessKeyId, secretAccessKey })
        let code = _util.RndNum(6);
        //发送短信
        smsClient.sendSMS({
            PhoneNumbers,
            SignName: '爱省购',
            TemplateCode: 'SMS_152805139',
            TemplateParam: `{"code":"${code}"}`
        }).then(function (res) {
            let { Code } = res
            if (Code === 'OK') {
                resolve(code)
                //处理返回参数
                console.log('', res)
            }
        }, function (err) {
            console.log(err)
        })
    })
}