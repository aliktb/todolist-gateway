const ROUTES = [
    {
        url: '/demo',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/demo`]: '/demo',
            },
        }
    },
    {
        url: '/actuator/health',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/actuator/health`]: '/actuator/health',
            },
        }
    },
    {
        url: '/tasks',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/tasks`]: '/tasks',
            },
        }
    }
]

exports.ROUTES = ROUTES;