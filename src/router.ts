import * as Router from 'koa-router'
import { build } from './utils'

const router = new Router()



router.get('/build', build)


export { router }