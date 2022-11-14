const ROUTES = [
    {
        url: '/first',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/first`]: '/demo',
            },
        }
    },
    {
        url: '/health',
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 100
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/health`]: '/actuator/health',
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