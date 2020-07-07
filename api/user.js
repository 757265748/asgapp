import {
	BASE_URL,
	baseUrl
} from '@/api/config.js';
export function excute_set_info(data) {
	return new Promise((resolve, reject) => {
		set_info({
			id: data.id,
			columnName: data.columnName,
			columnValue: data.columnValue
		}).then(res => {
			console.log(res);
			resolve(res);
		})
	})
}
export function insert_opinion(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/insert_opinion`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data: {
				content: data.content,
				create_date: data.create_date,
				create_user:data.create_user,
				imgs:data.imgs
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function set_info(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/set_info`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: data.id,
				columnName: data.columnName,
				columnValue: data.columnValue
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
export function team_order(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/order/team_order`,
			method: "post",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: data.id
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//赋予权限
export function give_jurisdiction(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/give_jurisdiction`,
			method: "post",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: data.id
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//我的收益
export function my_income(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/yj/my_income`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			data: {
				id: data.id
			},
			success: (res) => {
				console.log(res);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//支付宝提现  有问题
export function daifukuan_merchant(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/commission/daifukuan_merchant`,
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//升级为团长
export function SJTeam(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/SJTeam`,
			data: {
				id: data.id
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res.data[0]);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//获取团员
export function GetTeamEmp(data) {
	console.log(data)
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/post/user/GetTeamEmp`,
			data: {
				TeamId: data.TeamId,
				TeamType: data.TeamType,
				sort: data.sort
			},
			method: "POST",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//发送验证码
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
//修改用户头像
export function uploadHeadImg(phone, headImg) {
	console.log(phone, headImg);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/upload_headImg`,
			data: {
				phone: phone,
				headImg: headImg
			},
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				console.log('uploadHeadImg:', err)
			}
		});
	})
}
//测试
export function registerLp1(phone) {
	//location.href=`${BASE_URL}/api/get/user/login/register/success/?lp=1&phone=`+phone;
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/login/register/success/?lp=1&phone=` + phone,
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
	console.log(phone, code);
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
				console.log(res.data);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('ERROR_MSG', err)
			}
		});
	})
}
//获取用户信息
export function getUserInfo(phone) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/api/get/user/getData`,
			data: {
				phone
			},
			method: "get",
			header: {
				'content-header': 'application/json'
			},
			success: (res) => {
				console.log(res.data);
				resolve(res.data);
			},
			fail: (err) => {
				console.log('getUserInfo:', err)
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
