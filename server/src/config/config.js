module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME, 
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS,
        options: {
            dialect: 'postgres',
            host: process.env.HOST || 'localhost',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}