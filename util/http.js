import {
	BASE_URL
} from '@/util/config.js'
const ERROR_CODE = {
	1: '抱歉出了一个错误',
	400: '服务器请求出错'
}
class Http {
	request(url, data = {}, method = "GET") {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${BASE_URL}${url}`,
				data,
				method,
				header: {
					'content-header': 'application/json'
				},
				success: (res) => {
					console.log(res);
					// let code = res.statusCode.toString()
					let code = res.code;
					if (code.startsWith('2')) {
						resolve(res.data)
					} else {
						// console.log(code)
						this._show_error(code)
					}
				},
				fail: (err) => {
					this._show_error(1)
				}
			});

		})
	}
	_show_error(err_code) {
		if (!err_code) {
			err_code = 1
		}
		uni.showToast({
			title: ERROR_CODE[err_code],
			icon: 'none',
			duration: 2000
		})
	}
}

export {
	Http
}
