import { run } from './run';
import { Context } from 'koa';

const update = async function (ctx: Context, next: any) {
    try {
        await run(`git --help`, {
            cwd: process.cwd(),
            stdio: 'inherit',
        })
        await run(`npm run build:book`, {
            cwd: process.cwd(),
            stdio: 'inherit',
        })
    } catch (e) {
        console.log('error:', e)
    }
    ctx.status = 200
    ctx.body = {
        code: 0
    }
}

export { update }