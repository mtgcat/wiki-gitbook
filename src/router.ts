import * as Router from 'koa-router'
import { update } from './update'

const router = new Router()



router.get('/update', update)


export { router }