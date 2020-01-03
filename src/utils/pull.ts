import { run } from './run';

const pull = async function () {
    await run(`git pull`, {
        cwd: process.cwd(),
        stdio: 'inherit',
    })
}

export { pull }