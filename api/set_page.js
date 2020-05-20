import {
	BASE_URL
} from '@/api/config.js'
export const set_page={
	first_page:function(){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${BASE_URL}/api/get/set_page/getData`,
				method:'get',
				header:{
					'content-header':'application/json',
				},
				success:(res)=>{
					resolve(res);
				},
				fail:(error)=>{
					console.log(error);
				}
			})
			console.log();
		})
	},
	my_page:function(){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${BASE_URL}/api/get/set_page/getMyData`,
				method:'get',
				header:{
					'content-header':'application/json',
				},
				success:(res)=>{
					resolve(res);
				},
				fail:(error)=>{
					console.log(error);
				}
			})
			console.log();
		})
	}
}
