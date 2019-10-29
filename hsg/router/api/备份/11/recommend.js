const router = require('koa-router')();
const { Sql } = require('../../config/db');
 
const msql = new Sql();
router.get('/get/good/recommend', async(ctx) =>{
    let result = await msql.query('select * from recomond_good');
    console.log(result[0]);
    ctx.body = {
        code:200,
        result,
    }
})
router.get('/get/user/login/register/success/',async (ctx)=>{
    let result=ctx.request;
	let request=result.query;
	if(request.p){
	ctx.response.redirect('https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://39.108.215.49:80/api/get/user/login/register/success/&state=1212&view=web&phone='+request.p);	
	}else if(request.code){
		ctx.body={
			code:request.code
		}
	}else{
		ctx.body={
			code:100
		}	
	}

})


module.exports = router