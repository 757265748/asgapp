exports.config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '123456',
    database: 'tb',
    insecureAuth: true,
    multipleStatements: true, // 允许查询多条语句
}

exports.redisConfig = {
    port:6379,
    host:'127.0.0.1',
    no_ready_check:true,
    
}