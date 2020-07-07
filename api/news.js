import {
	BASE_URL
} from '@/api/config.js'
export const news={
	get_newslist:function(data){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${BASE_URL}/api/get/news/newslist_app`,
				method:'get',
				header:{
					'content-header':'application/json',
				},
				data,
				success:(res)=>{
					resolve(res.data);
				},
				fail:(error)=>{
					console.log(error);
				}
			})
			console.log();
		})
	},
	//新手教程
	newbie_tutorial:function(data){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${BASE_URL}/api/get/news/newslist_app`,
				method:'get',
				header:{
					'content-header':'application/json',
				},
				data,
				success:(res)=>{
					resolve(res.data);
				},
				fail:(error)=>{
					console.log(error);
				}
			})
			console.log();
		})
	},
	//常见问题
	common_problem:function(data){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:`${BASE_URL}/api/get/news/newslist_app`,
				method:'get',
				header:{
					'content-header':'application/json',
				},
				data,
				success:(res)=>{
					resolve(res.data);
				},
				fail:(error)=>{
					console.log(error);
				}
			})
			console.log();
		})
	}
}