 import {Http} from '@/util/http.js'
 
 class Comission extends Http{
	 getnowbalance(data){
		 return this.request('/api/post/yj/balance',data,'POST');
	 }
 }
 
 export {Comission}