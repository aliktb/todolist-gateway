const ROUTES = [
    {
        url: '/first',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: process.env.API_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/first`]: '/demo',
            },
        }
    }
]

exports.ROUTES = ROUTES;