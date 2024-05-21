const redisClient = require('../config/redisConfig');

const setCache = (key, value, expiration = 3600) => {
    redisClient.setex(key, expiration, JSON.stringify(value));
};

const getCache = (key, callback) => {
    redisClient.get(key, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, JSON.parse(data));
        }
    });
};

module.exports = { setCache, getCache };