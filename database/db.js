const Sequelize = require('sequelize')

let config = {
    database: 'node_demo',
    username: 'root',
    password: '123qwe'
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    pool : {
        max: 20, //default: 5 最大并发连接数，超过连接数的请求将被拒绝 经测试20可支持到100个并发
        min: 0,
        idle: 10000, //默认值：10000 连接闲置（未使用）10秒后，从池中删除连接
        acquire: 30000, //默认值：10000 抛出错误之前，池将尝试获取连接的最长时间（以毫秒为单位）
        evict: 10000, //默认值：10000 驱逐旧的连接的时间间隔（以毫秒为单位）。将其设置为0可禁用此功能。
        handleDisconnects: true, //默认值：true Controls if pool should handle connection disconnect automatically without throwing errors
    },
    timezone : '-05:00',
    logging: function (sql, detail) {
        // logger为log4js的Logger实例  
          console.debug(sql)
       
    }
})

module.exports = {
    sequelize : sequelize,
    config : config
}