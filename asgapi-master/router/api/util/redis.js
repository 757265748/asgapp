const { redisConfig } = require('../../../config/config');
const redis = require('redis')
const redisClient = redis.createClient(redisConfig);

function setRedisItem(key, value, exprires) {
    redisClient.set(key, value);
    if (exprires) {
        redisClient.expire(key, exprires);
    }
}
function getRedisItem(key) {
    return new Promise((resovle,reject)=>{
        redisClient.get(key, function(err,value){
            if(err)return
            resovle(value);
        })
    })  
}
function pushRedisItem(key, value, cb) {
    redisClient.rpush(key, value, cb);
}
function getRedisList(key, cb) {
    redisClient.lrange(key, 0, -1, cb);
}
module.exports = { setRedisItem, getRedisItem, pushRedisItem, getRedisList }