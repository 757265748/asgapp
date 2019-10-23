import {
	BASE_URL,
	baseUrl
} from '@/api/config.js'
export function sendcode(phone, type) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/${type}/sendyzm`,
			data: {
				phone: phone
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//测试
export function registerLp1(phone) {
	//location.href=`${BASE_URL}/api/get/user/login/register/success/?lp=1&phone=`+phone;
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/login/register/success/?lp=1&phone=`+phone,
			data: {
				phone,
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}

//bind zfb
export function bindzfb(zfbname, name, code, phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/bindzfb`,
			data: {
				phone,
				name,
				code,
				zfbname
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function postRegister({
	phone,
	code,
	yqm
}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/register`,
			data: {
				phone,
				code,
				yqm
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function postLogin(phone, code) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/mob/login`,
			data: {
				phone,
				code
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}


export function changeName({
	phone,
	name
}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/changename`,
			data: {
				phone,
				name
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
// 更换手机绑定手机旧手机验证发送验证码
export function changePhoneyzm(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/changephone/sendyzm`,
			data: {
				phone,
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
// 更换手机绑定手机旧手机验证
export function changePhone(phone, code) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/changephone/changephone`,
			data: {
				phone,
				code
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
// 用户更换手机绑定验证码
export function newPhoneyzm(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/newphone/sendyzm`,
			data: {
				phone,
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
// 用户更换手机绑定
export function newPhone(phone, code) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/newphone/newphone`,
			data: {
				phone,
				code
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function getUserinit(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/yj/getcommission`,
			method: "POST",
			data: {
				phone,
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				console.log('init user error', err.message)
			}
		})
	})
}
//用户佣金提现
export function userTx(pid, phone, money) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/yj/tx`,
			method: "POST",
			data: {
				pid,
				phone,
				money
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				console.log('init user error', err.message)
			}
		})
	})
}
//佣金详情线上
export function getProfOnline(pid) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/yj/getprofitmsg`,
			method: "POST",
			data: {
				pid,
			},
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				console.log('init user error', err.message)
			}
		})
	})
}
