const { createClient } = require('redis');

let redisClient = null;
let isConnected = false;

// Simple In-Memory Fallback Cache
const memoryCache = new Map();
const MEMORY_TTL_MS = 3600 * 1000; // 1 hour default

const connectRedis = async () => {
    try {
        if (!process.env.REDIS_URL) {
            console.log('⚠️  No REDIS_URL set, using Memory Cache fallback');
            return null;
        }

        redisClient = createClient({
            url: process.env.REDIS_URL,
            socket: {
                connectTimeout: 5000,
                reconnectStrategy: (retries) => {
                    if (retries > 3) {
                        console.log('⚠️  Redis reconnection failed. Using Memory Cache.');
                        return false;
                    }
                    return Math.min(retries * 100, 3000);
                }
            }
        });

        redisClient.on('error', (err) => {
            if (!err.message.includes('ECONNREFUSED')) {
                console.error('Redis error:', err.message);
            }
            isConnected = false;
        });

        redisClient.on('connect', () => {
            console.log('✅ Redis connected');
            isConnected = true;
        });

        // Use a race to prevent hanging
        await Promise.race([
            redisClient.connect(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Redis connection timeout')), 5000))
        ]);

        return redisClient;
    } catch (error) {
        console.error('Redis connection failed:', error.message);
        console.log('⚠️  Falling back to Memory Cache');
        isConnected = false;
        return null;
    }
};

const getCache = async (key) => {
    // 1. Try Redis first
    if (isConnected && redisClient) {
        try {
            const data = await redisClient.get(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Redis get error:', error.message);
        }
    }

    // 2. Fallback to Memory
    const entry = memoryCache.get(key);
    if (entry) {
        if (Date.now() < entry.expiry) {
            return entry.data;
        } else {
            memoryCache.delete(key);
        }
    }
    return null;
};

const setCache = async (key, data, ttlSeconds = 3600) => {
    // 1. Set in Redis if available
    if (isConnected && redisClient) {
        try {
            await redisClient.setEx(key, ttlSeconds, JSON.stringify(data));
        } catch (error) {
            console.error('Redis set error:', error.message);
        }
    }

    // 2. Always set in Memory for fast access anyway
    memoryCache.set(key, {
        data,
        expiry: Date.now() + (ttlSeconds * 1000)
    });
    
    // Prune memory cache if it gets too large
    if (memoryCache.size > 1000) {
        const firstKey = memoryCache.keys().next().value;
        memoryCache.delete(firstKey);
    }
};

const deleteCache = async (pattern) => {
    if (isConnected && redisClient) {
        try {
            const keys = await redisClient.keys(pattern);
            if (keys.length > 0) {
                await redisClient.del(keys);
            }
        } catch (error) {
            console.error('Redis delete error:', error.message);
        }
    }
    // Delete from memory (pattern support is hard for Map, so we clear what we can match or clear all)
    // For simplicity with Map, we loop and check
    for (const key of memoryCache.keys()) {
        if (key.includes(pattern.replace('*', ''))) {
            memoryCache.delete(key);
        }
    }
};

const clearAllCache = async () => {
    if (isConnected && redisClient) {
        try {
            await redisClient.flushDb();
        } catch (error) {
            console.error('Redis flush error:', error.message);
        }
    }
    memoryCache.clear();
};

module.exports = { connectRedis, getCache, setCache, deleteCache, clearAllCache };
