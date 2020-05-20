 import {Http} from '@/util/http.js'
 
 class Comission extends Http{
	 getnowbalance(data){
		 return this.request('/api/post/yj/balance',data,'POST');
	 }
	 
	 tx_zfb(data){
	 	 return this.request('/api/get/commission/tx_zfb',data,'get');
	 }
	 //代付款
	 daifukuan_merchant(data){
	 	 return this.request('/api/get/commission/daifukuan_merchant',data,'get');
	 }
 }
 
 export {Comission}