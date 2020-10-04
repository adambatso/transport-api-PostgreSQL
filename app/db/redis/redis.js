import redis from 'redis'
import env from '../../../env'

console.log('%c env.redisPort', 'font-size:20px;color:lime;', env.redisPort);
const port_redis = env.redisPort;

//configure redis client on port 6379
const redis_client = redis.createClient(port_redis);


const getRedisCacheByKey = (key) => {
    return new Promise((resolve, reject) => {

        redis_client.get(key, (err,data) => {
            
            if (err) {
                reject(err);
            }
            if (data) {
                resolve(data);
            }
            else {
                reject("data is null");
            }
            
        
        })
    } )
    
    
    
};

export {
    getRedisCacheByKey,
    redis_client
    
};