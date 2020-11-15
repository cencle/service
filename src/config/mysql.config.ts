const devConfig = {
    host: 'localhost',
    database: 'user',
    user: 'root',
    password: 'Bo950908'
}
const prodConfig = {
    host: 'localhost',
    database: 'user',
    user: 'root',
    password: 'Bo950908'
}
export default process.env.NODE_ENV === 'development' ? devConfig : prodConfig
