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

router.get('/get/user/login/register/success',async(ctx)=>{
	var request=ctx.query;
	var code=request.code;
	var phone =request.phone;
	location="http://39.108.215.49:8009/GetRelationIdWebService.asmx/GetRelationId?phone="+phone+"&code="+code;
	
})

module.exports = router