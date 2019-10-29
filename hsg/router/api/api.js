const router = require('koa-router')();
const goods = require('./goods');
const login = require('./login');
const register = require('./register')
const friendgoods = require('./friendgoods');
const getcommission = require('./commission');
const getrecommend = require('./recommend');
const kwsearch = require('./searchword');
const msgchange = require('./msgchange');
const goodcollection = require('./goodcollection');
const upload = require('./upload')
const operatordetail = require('./operatordetail');
const user = require('./user');
const operatoritemdetail = require('./operatoritemdetail');
const order = require('./order');
const itemidnews = require('./itemidnews');
const voucherhistory = require('./voucherhistory');
const news = require('./news');


router.use(news.routes(), news.allowedMethods());
router.use(order.routes(), order.allowedMethods());
router.use(upload.routes(), upload.allowedMethods());
router.use(goodcollection.routes(), goodcollection.allowedMethods());
router.use(msgchange.routes(), msgchange.allowedMethods());
router.use(kwsearch.routes(), kwsearch.allowedMethods());
router.use(getrecommend.routes(), getrecommend.allowedMethods());
router.use(getcommission.routes(), getcommission.allowedMethods());
router.use(friendgoods.routes(), friendgoods.allowedMethods());
router.use(register.routes(), register.allowedMethods());
router.use(goods.routes(), goods.allowedMethods());
router.use(login.routes(), login.allowedMethods());
router.use(operatordetail.routes(), operatordetail.allowedMethods());
router.use(user.routes(), user.allowedMethods());
router.use(operatoritemdetail.routes(), operatoritemdetail.allowedMethods());
router.use(itemidnews.routes(), itemidnews.allowedMethods());
router.use(voucherhistory.routes(), voucherhistory.allowedMethods());
module.exports = router