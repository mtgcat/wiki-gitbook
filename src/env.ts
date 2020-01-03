export const env = {
  domain: process.env.DOMAIN || 'localhost',
  port: process.env.PORT || '3000',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/koa-base-template',
  environment: process.env.ENVIRONMENT || 'local',
}
