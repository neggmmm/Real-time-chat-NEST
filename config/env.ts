
export default {
    host: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    port: process.env.PORT,
    isProduction: process.env.NODE_ENV === 'production',
}